import React from 'react';

const Picture = props => (
  <svg viewBox="0 0 58 58" {...props}>
    <path
      fill="#c3e1ed"
      stroke="#e7eced"
      strokeWidth={2}
      strokeMiterlimit={10}
      d="M1 7h56v44H1z"
    />
    <circle cx={16} cy={17.569} r={6.569} fill="#ed8a19" />
    <path
      fill="#1a9172"
      d="M56 36.111L55 35 43 24 32.5 35.5l5.483 5.483L42 45h14zM2 49h24l-4.017-4.017-10.966-10.966L2 41.956z"
    />
    <path fill="#6b5b4b" d="M2 45h54v5H2z" />
    <path fill="#25ae88" d="M37.983 40.983L27.017 30.017 10 45h32z" />
  </svg>
);

export default Picture;
