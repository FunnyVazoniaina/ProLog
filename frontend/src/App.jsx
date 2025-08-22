import React, { useState } from 'react';
import SuspectSelector from './components/SuspectSelector';
import CrimeSelector from './components/CrimeSelector';
import ResultDisplay from './components/ResultDisplay';

function App() {
  const [suspect, setSuspect] = useState('');
  const [crimeType, setCrimeType] = useState('');
  const [verdict, setVerdict] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const suspects = ['john', 'mary', 'alice', 'bruno', 'sophie'];
  const crimes = ['assassinat', 'vol', 'escroquerie'];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setVerdict(null);

    try {
      const response = await fetch('/check-guilty', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ suspect, crimeType }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch verdict');
      }

      const data = await response.json();
      setVerdict(data.verdict);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-center">Simulation d'Enquête Policière</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <SuspectSelector suspects={suspects} value={suspect} onChange={setSuspect} />
          <CrimeSelector crimes={crimes} value={crimeType} onChange={setCrimeType} />
          <button
            type="submit"
            disabled={loading || !suspect || !crimeType}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded disabled:opacity-50"
          >
            {loading ? 'Vérification...' : 'Vérifier la Culpabilité'}
          </button>
        </form>
        {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
        <ResultDisplay verdict={verdict} />
      </div>
    </div>
  );
}

export default App;