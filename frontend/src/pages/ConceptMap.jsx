import { useCallback, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

const nodeColors = {
  A: '#a78bfa', B: '#60a5fa', C: '#22d3ee', D: '#34d399',
  E: '#fbbf24', F: '#f87171', G: '#f472b6', H: '#a78bfa',
  I: '#2dd4bf', J: '#fb923c', K: '#818cf8', L: '#a3e635',
  M: '#fb7185', N: '#38bdf8', O: '#ef4444', P: '#8b5cf6',
  Q: '#06b6d4', R: '#10b981', S: '#f59e0b',
  T: '#14b8a6',
};

// Posizioni manuali ragionate per evitare incroci
// Layout a "flusso" dall'alto (fisico) verso il basso (applicazioni + sicurezza)
const nodePositions = {
  // Riga 1: Livello fisico
  A: { x: 0, y: 0 },       // Mezzi Trasmissivi
  C: { x: 280, y: 0 },     // Cablaggio Strutturato
  B: { x: 560, y: 0 },     // Apparati di Rete

  // Riga 2: Ethernet + Modelli
  D: { x: 140, y: 160 },   // Ethernet
  E: { x: 420, y: 160 },   // Modelli di Riferimento

  // Riga 3: IP + Trasporto
  F: { x: 140, y: 320 },   // Indirizzi IP
  M: { x: 420, y: 320 },   // Trasporto

  // Riga 4: Subnetting + Routing + Applicazioni
  G: { x: 0, y: 480 },     // FLSM
  H: { x: 200, y: 480 },   // VLSM
  I: { x: 420, y: 480 },   // Routing
  N: { x: 620, y: 320 },   // Applicazioni e QUIC

  // Riga 5: Routing dettagli
  J: { x: 300, y: 620 },   // Routing Statico
  K: { x: 480, y: 620 },   // Grafi
  L: { x: 660, y: 620 },   // RIP e OSPF

  // Riga 6: Sicurezza (a destra, cluster separato)
  R: { x: 800, y: 80 },    // VLAN
  O: { x: 900, y: 280 },   // Firewall
  P: { x: 1100, y: 200 },  // Crittografia
  Q: { x: 1100, y: 380 },  // VPN
  S: { x: 900, y: 480 },   // Malware

  // Packet Tracer (sotto sicurezza)
  T: { x: 800, y: 620 },   // Packet Tracer
};

const connections = [
  // Flusso principale (alto → basso)
  ['A', 'D', 'Mezzi → Ethernet'],
  ['C', 'D', 'Cablaggio → Ethernet'],
  ['B', 'D', 'Apparati → Ethernet'],
  ['B', 'E', 'Apparati → Modelli OSI'],
  ['D', 'E', 'Ethernet ↔ Livello 2'],
  ['E', 'F', 'Modelli → IP'],
  ['E', 'M', 'Modelli → Trasporto'],
  ['M', 'N', 'Trasporto → Applicazioni'],

  // Subnetting
  ['F', 'G', 'IP → FLSM'],
  ['F', 'H', 'IP → VLSM'],
  ['G', 'H', 'FLSM → VLSM'],

  // Routing
  ['F', 'I', 'IP → Routing'],
  ['I', 'J', 'Routing Statico'],
  ['I', 'K', 'Routing → Grafi'],
  ['I', 'L', 'Routing → RIP/OSPF'],
  ['K', 'L', 'Grafi → Algoritmi'],

  // Sicurezza (cluster separato)
  ['R', 'B', 'VLAN → Switch'],
  ['O', 'R', 'Firewall ↔ VLAN'],
  ['O', 'P', 'Firewall → Crittografia'],
  ['O', 'Q', 'Firewall → VPN'],
  ['O', 'S', 'Firewall → Difesa Malware'],
  ['P', 'Q', 'Crittografia → VPN'],
  ['P', 'N', 'TLS → Applicazioni'],

  // Packet Tracer
  ['T', 'R', 'PT → VLAN'],
  ['T', 'I', 'PT → Routing'],
];

const staticEdges = connections.map(([from, to, label], i) => ({
  id: `e${i}`,
  source: from,
  target: to,
  label,
  type: 'smoothstep',
  labelStyle: { fill: '#6b7280', fontSize: 9, fontWeight: 500 },
  labelBgStyle: { fill: '#050508', fillOpacity: 0.92 },
  labelBgPadding: [6, 3],
  labelBgBorderRadius: 4,
  style: { stroke: '#2a2a42', strokeWidth: 1.5 },
  animated: false,
}));

export default function ConceptMap() {
  const { data: sections } = useFetch(() => api.getSections(), []);
  const navigate = useNavigate();

  const computedNodes = useMemo(() => {
    if (!sections) return [];
    return sections.map((s) => ({
      id: s.id,
      position: nodePositions[s.id] || { x: 0, y: 0 },
      data: { label: `${s.code} — ${s.name}` },
      style: {
        background: `${nodeColors[s.id]}10`,
        border: `1.5px solid ${nodeColors[s.id]}40`,
        borderRadius: '14px',
        padding: '12px 18px',
        color: nodeColors[s.id],
        fontSize: '12px',
        fontWeight: '600',
        cursor: 'pointer',
        minWidth: '160px',
        textAlign: 'center',
        backdropFilter: 'blur(8px)',
        transition: 'all 0.2s ease',
      },
    }));
  }, [sections]);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  useEffect(() => {
    if (computedNodes.length > 0) {
      setNodes(computedNodes);
      setEdges(staticEdges);
    }
  }, [computedNodes, setNodes, setEdges]);

  const onNodeClick = useCallback((_, node) => {
    navigate(`/study/${node.id}`);
  }, [navigate]);

  if (!sections) return <div className="text-center text-gray-600 py-20">Caricamento mappa...</div>;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="page-title">Mappa Concettuale</h1>
        <p className="page-subtitle">Clicca su un nodo per aprire la sezione</p>
      </div>

      <div className="card p-0 overflow-hidden" style={{ height: '75vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          fitViewOptions={{ padding: 0.15 }}
          attributionPosition="bottom-left"
          proOptions={{ hideAttribution: true }}
        >
          <Background color="#18182d" gap={24} size={1} />
          <Controls
            style={{
              button: { background: '#10101e', color: '#7c3aed', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '10px' },
            }}
          />
          <MiniMap
            nodeColor={(n) => nodeColors[n.id] || '#4b5563'}
            maskColor="rgba(5,5,8,0.7)"
            style={{ background: '#0a0a12', border: '1px solid rgba(255,255,255,0.06)', borderRadius: '12px' }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}
