import React, { useState } from 'react';

const TrackOrder: React.FC = () => {
  const [orderNo, setOrderNo] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState<{ status: string; eta: string } | null>(null);

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-4">Track My Order</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          // Demo result
          setResult({ status: 'In Transit', eta: '2 business days' });
        }}
        className="border rounded-lg p-6 space-y-4"
      >
        <div>
          <label className="block text-sm mb-1">Order Number</label>
          <input
            value={orderNo}
            onChange={(e) => setOrderNo(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="e.g. ORD-2026-0002"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded px-3 py-2"
            placeholder="you@example.com"
          />
        </div>
        <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">Track</button>
      </form>

      {result && (
        <div className="mt-6 border rounded-lg p-4">
          <p className="font-medium">Status: <span className="text-green-700">{result.status}</span></p>
          <p className="text-gray-600">Estimated delivery: {result.eta}</p>
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
