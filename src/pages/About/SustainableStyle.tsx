import React from 'react';

const SustainableStyle: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Sustainable Style</h1>
    <p className="text-gray-600 mb-6">
      We care about responsible sourcing, reduced packaging, and durable design.
      Use this page to highlight certifications, materials, and supplier standards.
    </p>

    <ul className="list-disc ml-5 text-gray-700 space-y-2">
      <li>Eco-friendly packaging</li>
      <li>Ethical supplier audits</li>
      <li>Recycled fibers and low-impact dyes</li>
      <li>Repair & care guides</li>
    </ul>
  </div>
);

export default SustainableStyle;