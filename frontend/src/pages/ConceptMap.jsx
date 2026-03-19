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

const connections = [
  ['A', 'C', 'Mezzi fisici → Cablaggio'],
  ['A', 'D', 'Mezzi → Ethernet'],
  ['B', 'D', 'Apparati → Ethernet'],
  ['B', 'E', 'Apparati → Livelli OSI'],
  ['C', 'D', 'Cablaggio → Ethernet'],
  ['D', 'E', 'Ethernet → Livello 2 OSI'],
  ['E', 'F', 'Modelli → IP'],
  ['E', 'M', 'Modelli → Trasporto'],
  ['F', 'G', 'IP → Subnetting FLSM'],
  ['F', 'H', 'IP → VLSM'],
  ['F', 'I', 'IP → Routing'],
  ['G', 'H', 'FLSM → VLSM'],
  ['I', 'J', 'Routing → Statico'],
  ['I', 'K', 'Routing → Grafi'],
  ['I', 'L', 'Routing → RIP/OSPF'],
  ['K', 'L', 'Grafi → Algoritmi routing'],
  ['M', 'N', 'Trasporto → Applicazioni'],
  ['H', 'L', 'VLSM → OSPF'],
  // Nuove sezioni
  ['O', 'P', 'Firewall → Crittografia'],
  ['O', 'Q', 'Firewall → VPN'],
  ['O', 'R', 'Firewall → VLAN'],
  ['O', 'S', 'Firewall → Difesa Malware'],
  ['P', 'Q', 'Crittografia → VPN'],
  ['P', 'N', 'Crittografia → TLS/QUIC'],
  ['Q', 'F', 'VPN → Indirizzi IP'],
  ['R', 'B', 'VLAN → Switch'],
  ['R', 'D', 'VLAN → Ethernet 802.1Q'],
  ['S', 'O', 'Malware → Firewall'],
  ['T', 'R', 'Packet Tracer → VLAN'],
  ['T', 'I', 'Packet Tracer → Routing'],
  ['T', 'B', 'Packet Tracer → Apparati'],
];

const staticEdges = connections.map(([from, to, label], i) => ({
  id: `e${i}`,
  source: from,
  target: to,
  label,
  labelStyle: { fill: '#4b5563', fontSize: 9, fontWeight: 500 },
  labelBgStyle: { fill: '#050508', fillOpacity: 0.9 },
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
    const cols = 4;
    return sections.map((s, i) => ({
      id: s.id,
      position: {
        x: (i % cols) * 280 + 50,
        y: Math.floor(i / cols) * 180 + 50,
      },
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
        minWidth: '180px',
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

      <div className="card p-0 overflow-hidden" style={{ height: '70vh' }}>
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
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
