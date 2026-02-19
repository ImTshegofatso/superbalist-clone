import React from 'react';

const ReturnsRefunds: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Returns & Refunds</h1>
    <p className="text-gray-600 mb-6">
      Returns accepted within 30 days for unworn items in original packaging. Refunds processed to the
      original payment method within 3–7 business days after inspection.
    </p>

    <ol className="list-decimal ml-5 space-y-2 text-gray-700">
      <li>Initiate a return in your Account &rarr; Order History.</li>
      <li>Print the label and drop off at the nearest courier point.</li>
      <li>Track your return in “Track My Order”.</li>
    </ol>
  </div>
);

export default ReturnsRefunds;