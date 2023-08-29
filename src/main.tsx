import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { FeatureFlagsToggle } from './components/FeatureFlagsToggle.tsx';
import { FeatureFlagsProvider } from './context/FeatureFlags.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FeatureFlagsProvider>
      <App />
      <FeatureFlagsToggle />
    </FeatureFlagsProvider>
  </React.StrictMode>,
);
