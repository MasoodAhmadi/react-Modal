import React from 'react';
import { useDrag } from 'react-dnd';

export default function Module({ name, id }) {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD',
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return (
    <div
      ref={drag}
      style={{ height: 40, width: 50, backgroundColor: 'yellow' }}
    >
      {name}sss
    </div>
  );
}
