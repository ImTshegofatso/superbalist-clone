import React from 'react';

const DeliveryInfo: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Delivery Information</h1>
    <div className="grid sm:grid-cols-2 gap-6">
      <div className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Standard</h2>
        <p className="text-gray-600">2–5 business days. Free over R650, else R60.</p>
      </div>
      <div className="border rounded-lg p-4">
        <h2 className="font-semibold mb-2">Express</h2>
        <p className="text-gray-600">1–2 business days. From R120 depending on area.</p>
      </div>
    </div>
    <p className="text-gray-600 mt-6">
      Delivery times may vary during peak periods or to outlying areas.
    </p>
  </div>
);

export default DeliveryInfo;