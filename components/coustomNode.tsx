"use client";

import { useCallback } from "react";
import type { NodeProps } from '@xyflow/react';

function CustomNode({ data }: NodeProps) {
  const onChange = useCallback((evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value);
    // Optionally: update `data.label` or call a prop function
  }, []);

  return (
    <div className="text-updater-node">
      <div>
        <label htmlFor="text">Text:</label>
        <input
          id="text"
          name="text"
          onChange={onChange}
          className="nodrag"
        />
      </div>
    </div>
  );
}

export default CustomNode;
