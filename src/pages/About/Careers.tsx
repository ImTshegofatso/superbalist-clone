import React from 'react';

const Careers: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-10">
    <h1 className="text-2xl font-bold mb-4">Careers</h1>
    <p className="text-gray-600 mb-6">
      Join our team! Below is a sample layout for roles. Replace with real data or integrate an API.
    </p>

    <div className="space-y-4">
      {[
        { title: 'Frontend Developer', type: 'Full-time', location: 'Remote' },
        { title: 'Customer Support Agent', type: 'Contract', location: 'Pretoria / Remote' },
      ].map((job) => (
        <div key={job.title} className="border rounded-lg p-4">
          <h2 className="font-semibold">{job.title}</h2>
          <p className="text-sm text-gray-500">{job.type} • {job.location}</p>
          <button className="mt-3 inline-flex items-center px-3 py-1.5 text-sm border rounded hover:bg-gray-50">
            View Details
          </button>
        </div>
      ))}
    </div>
  </div>
);

export default Careers;