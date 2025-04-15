import React from 'react';
import { createRoot } from 'react-dom/client';

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Welcome to Electron + React + TypeScript</h1>
      <p>This is a basic setup for your application.</p>
    </div>
  );
};

const root = createRoot(document.body);
root.render(<App />);

