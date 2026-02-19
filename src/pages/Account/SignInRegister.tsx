import React, { useState } from 'react';

const SignInRegister: React.FC = () => {
  const [mode, setMode] = useState<'signin' | 'register'>('signin');

  return (
    <div className="max-w-md mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">{mode === 'signin' ? 'Sign In' : 'Create Account'}</h1>

      <div className="border rounded-lg p-6">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`${mode === 'signin' ? 'Signed in' : 'Account created'} (demo)`);
          }}
          className="space-y-4"
        >
          {mode === 'register' && (
            <div>
              <label className="block text-sm mb-1">Full Name</label>
              <input className="w-full border rounded px-3 py-2" placeholder="Your name" />
            </div>
          )}

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input type="email" className="w-full border rounded px-3 py-2" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input type="password" className="w-full border rounded px-3 py-2" placeholder="••••••••" />
          </div>

          <button className="w-full bg-black text-white py-2 rounded hover:opacity-90">
            {mode === 'signin' ? 'Sign In' : 'Register'}
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4">
          {mode === 'signin' ? 'New here?' : 'Already have an account?'}{' '}
          <button className="underline" onClick={() => setMode(mode === 'signin' ? 'register' : 'signin')}>
            {mode === 'signin' ? 'Create one' : 'Sign in'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SignInRegister;