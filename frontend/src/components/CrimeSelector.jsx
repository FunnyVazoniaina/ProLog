import React from 'react';

const CrimeSelector = ({ crimes, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">Type de Crime:</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-white"
    >
      <option value="">Sélectionnez un crime</option>
      {crimes.map((crime) => (
        <option key={crime} value={crime}>
          {crime.charAt(0).toUpperCase() + crime.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export default CrimeSelector;