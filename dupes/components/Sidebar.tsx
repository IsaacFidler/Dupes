import React, { ReactElement } from 'react';

interface Props {}

export default function Sidebar({}: Props): ReactElement {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 felx flex-col bg-lime-200">
      hhhh
      <p>A</p>
      <p>B</p>
      <p>C</p>
      <p>D</p>
    </div>
  );
}
