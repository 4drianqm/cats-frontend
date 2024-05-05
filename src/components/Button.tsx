"use client"

import React, { ReactNode } from "react";

type Props = {
  name?: string;
  children: ReactNode;
};

export default function Button({ name, children }: Props) {
  const handleClick = () => {
    alert("hello " + name);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {children}
      </button>
    </div>
  );
}
