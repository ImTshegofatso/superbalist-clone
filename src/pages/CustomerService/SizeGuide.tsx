import React from 'react';

const SizeGuide: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Size Guide</h1>
    <p className="text-gray-600 mb-6">
      Use this general size guide. For exact sizing, refer to each product’s size chart.
    </p>

    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="border px-3 py-2 text-left">Size</th>
            <th className="border px-3 py-2 text-left">Chest (cm)</th>
            <th className="border px-3 py-2 text-left">Waist (cm)</th>
            <th className="border px-3 py-2 text-left">Hips (cm)</th>
          </tr>
        </thead>
        <tbody>
          {[
            { size: 'XS', chest: '84-89', waist: '69-73', hips: '84-88' },
            { size: 'S', chest: '90-95', waist: '74-79', hips: '89-94' },
            { size: 'M', chest: '96-101', waist: '80-85', hips: '95-100' },
            { size: 'L', chest: '102-108', waist: '86-92', hips: '101-107' },
            { size: 'XL', chest: '109-115', waist: '93-100', hips: '108-115' },
          ].map((r) => (
            <tr key={r.size}>
              <td className="border px-3 py-2">{r.size}</td>
              <td className="border px-3 py-2">{r.chest}</td>
              <td className="border px-3 py-2">{r.waist}</td>
              <td className="border px-3 py-2">{r.hips}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default SizeGuide;
``