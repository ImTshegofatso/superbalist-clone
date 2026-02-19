import React from 'react';

const mockOrders = [
  { id: 'ORD-2026-0001', date: '2026-02-05', total: 'R1,299.00', status: 'Delivered' },
  { id: 'ORD-2026-0002', date: '2026-02-12', total: 'R749.00', status: 'Shipped' },
];

const OrderHistory: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Order History</h1>
    <div className="overflow-x-auto">
      <table className="min-w-full border text-sm">
        <thead className="bg-gray-50">
          <tr>
            <th className="border px-3 py-2 text-left">Order #</th>
            <th className="border px-3 py-2 text-left">Date</th>
            <th className="border px-3 py-2 text-left">Total</th>
            <th className="border px-3 py-2 text-left">Status</th>
            <th className="border px-3 py-2"></th>
          </tr>
        </thead>
        <tbody>
          {mockOrders.map((o) => (
            <tr key={o.id}>
              <td className="border px-3 py-2">{o.id}</td>
              <td className="border px-3 py-2">{o.date}</td>
              <td className="border px-3 py-2">{o.total}</td>
              <td className="border px-3 py-2">{o.status}</td>
              <td className="border px-3 py-2">
                <button className="text-sm underline">View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default OrderHistory;
