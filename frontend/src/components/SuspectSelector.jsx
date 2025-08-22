import React from 'react';

const SuspectSelector = ({ suspects, value, onChange }) => (
  <div>
    <label className="block text-sm font-medium mb-1">Suspect:</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full bg-gray-700 border border-gray-600 rounded py-2 px-3 text-white"
    >
      <option value="">Sélectionnez un suspect</option>
      {suspects.map((sus) => (
        <option key={sus} value={sus}>
          {sus.charAt(0).toUpperCase() + sus.slice(1)}
        </option>
      ))}
    </select>
  </div>
);

export default SuspectSelector;