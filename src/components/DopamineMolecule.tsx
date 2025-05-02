import React from 'react';

export function DopamineMolecule() {
  return (
    <div className="w-48 h-48 dopamine-molecule-container">
      <svg className="dopamine-molecule" viewBox="120 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <g transform="rotate(270 150 100)">
          {/* Benzene Ring */}
          <path
            className="molecule-path"
            d="M100 70 L115 78 L115 94 L100 102 L85 94 L85 78 Z"
            fill="none"
            stroke="#FCEA00"
            strokeWidth="2"
          />

          {/* Ethylamine Chain */}
          <path
            className="molecule-path"
            d="M100 102 L100 120 L90 135 L110 150"
            fill="none"
            stroke="#FCEA00"
            strokeWidth="2"
          />

          {/* Hydroxyl Groups */}
          <circle cx="85" cy="78" r="4" className="molecule-node" />
          <circle cx="115" cy="78" r="4" className="molecule-node" />

          {/* Nitrogen Group */}
          <circle cx="110" cy="150" r="4" className="molecule-node" />
        </g>

        {/* Pulsating Glow Filter */}
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </div>
  );
}
