import React from 'react';

const ResultDisplay = ({ verdict }) => {
  if (!verdict) return null;

  const isGuilty = verdict === 'guilty';
  return (
    <div className="mt-6 text-center">
      <p className="text-lg font-semibold">
        Verdict: <span className={isGuilty ? 'text-red-500' : 'text-green-500'}>{isGuilty ? 'Coupable' : 'Non Coupable'}</span>
      </p>
    </div>
  );
};

export default ResultDisplay;