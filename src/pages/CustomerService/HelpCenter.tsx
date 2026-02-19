import React from 'react';

const FAQ = [
  { q: 'How do I track my order?', a: 'Use the Track My Order page and enter your order number and email.' },
  { q: 'What is your return policy?', a: 'You can return items within 30 days if unused and in original packaging.' },
  { q: 'How long is delivery?', a: 'Standard delivery takes 2–5 business days depending on your location.' },
];

const HelpCenter: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Help Center</h1>
    <p className="text-gray-600 mb-6">Find answers to common questions below.</p>

    <div className="space-y-4">
      {FAQ.map((item) => (
        <details key={item.q} className="border rounded-lg p-4">
          <summary className="font-medium cursor-pointer">{item.q}</summary>
          <p className="mt-2 text-gray-600">{item.a}</p>
        </details>
      ))}
    </div>
  </div>
);

export default HelpCenter;
``