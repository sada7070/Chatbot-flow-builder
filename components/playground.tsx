"use client";

import { useState, useCallback } from 'react';
import { Button } from "@/components/ui/button"
import {
  ReactFlow,
  Controls,
  Background,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  type NodeChange,
  type EdgeChange,
  type Connection,
  type Edge,
  type Node,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

const initialNodes: Node[] = [
  {
    id: '1',
    data: { label: 'Hello' },
    position: { x: 0, y: 0 },
    type: 'input',
  }
];

const initialEdges: Edge[] = [];

export function Playground() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) =>
      setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) =>
      setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) =>
      setEdges((eds) => addEdge(params, eds)),
    []
  );

  const handleAddNode = () => {
    setNodes((nds) => [
        ...nds,
        {
        id: (nds.length + 1).toString(), // simple ID logic
        data: { label: `Node ${nds.length + 1}` },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        },
    ]);
  };

  return (
    <div style={{ width: '1500px', height: '100vh' }} className="ml-86">
      <div className="absolute top-20 left-25">
      <Button variant='outline' onClick={handleAddNode} className="border-2 border-zinc-950 px-4 py-2 rounded shadow cursor-pointer">
        New Node
      </Button>
    </div>

    <ReactFlow
      nodes={nodes}
      onNodesChange={onNodesChange}
      edges={edges}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      fitView
    >
      <Background />
      <Controls />
    </ReactFlow>
    </div>
  );
}
