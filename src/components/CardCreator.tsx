"use client";

import React, { ReactNode } from 'react';

interface CardCreatorProps {
  times: number;
  children: ReactNode | ((index: number) => ReactNode);
  };

const Repeater: React.FC<CardCreatorProps> = ({ times, children }) => {

  return (
    <div  className="flex columns-3">
        {Array.from({ length: times }, (_, index) => (
            <div key={index} className='mb-2'>
                {typeof children === "function" ? children(index + 1) : children}
            </div>
        ))}
    </div>
  );
};

export default Repeater;
