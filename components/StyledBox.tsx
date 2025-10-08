
import React from 'react';

interface StyledBoxProps {
  title: string;
  children: React.ReactNode;
}

const StyledBox: React.FC<StyledBoxProps> = ({ title, children }) => {
  return (
    <div className="border-2 border-cyan-500 rounded-lg bg-slate-800/50 p-6 pt-8 relative shadow-lg shadow-cyan-500/10">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-slate-900 px-4 py-1">
        <h2 className="text-lg font-bold text-cyan-400 text-center tracking-widest whitespace-nowrap">
          {`║ ${title} ║`}
        </h2>
      </div>
      <div className="text-slate-300">
        {children}
      </div>
    </div>
  );
};

export default StyledBox;
