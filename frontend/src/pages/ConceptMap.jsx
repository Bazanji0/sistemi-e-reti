import { useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactFlow, { Background, Controls, MiniMap, useNodesState, useEdgesState } from 'reactflow';
import 'reactflow/dist/style.css';
import { useFetch } from '../hooks/useFetch';
import { api } from '../lib/api';

const nodeColors = {
  A: '#a855f7', B: '#3b82f6', C: '#06b6d4', D: '#10b981',
  E: '#f59e0b', F: '#ef4444', G: '#ec4899', H: '#8b5cf6',
  I: '#14b8a6', J: '#f97316', K: '#6366f1', L: '#84cc16',
  M: '#e11d48', N: '#0ea5e9',
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
];

export default function ConceptMap() {
  const { data: sections } = useFetch(() => api.getSections(), []);
  const navigate = useNavigate();

  const initialNodes = useMemo(() => {
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
        background: `${nodeColors[s.id]}22`,
        border: `2px solid ${nodeColors[s.id]}88`,
        borderRadius: '12px',
        padding: '12px 16px',
        color: '#e5e7eb',
        fontSize: '13px',
        fontWeight: '600',
        cursor: 'pointer',
        minWidth: '180px',
        textAlign: 'center',
      },
    }));
  }, [sections]);

  const initialEdges = useMemo(() =>
    connections.map(([from, to, label], i) => ({
      id: `e${i}`,
      source: from,
      target: to,
      label,
      labelStyle: { fill: '#6b7280', fontSize: 9 },
      style: { stroke: '#4b5563', strokeWidth: 1.5 },
      animated: false,
    })), []);

  const [nodes, , onNodesChange] = useNodesState(initialNodes);
  const [edges, , onEdgesChange] = useEdgesState(initialEdges);

  const onNodeClick = useCallback((_, node) => {
    navigate(`/study/${node.id}`);
  }, [navigate]);

  if (!sections) return <div className="text-center text-gray-500 py-20">Caricamento mappa...</div>;

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
          Mappa Concettuale
        </h1>
        <p className="text-gray-500 mt-1">Clicca su un nodo per aprire la sezione</p>
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
        >
          <Background color="#1e1e32" gap={20} />
          <Controls
            style={{
              button: { background: '#161625', color: '#a855f7', border: '1px solid #2a2a42' },
            }}
          />
          <MiniMap
            nodeColor={(n) => nodeColors[n.id] || '#6b7280'}
            maskColor="#0a0a0f99"
            style={{ background: '#0f0f1a', border: '1px solid #2a2a42' }}
          />
        </ReactFlow>
      </div>
    </div>
  );
}
