import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { analyticsScreenshotDataUrl, membershipScreenshotDataUrl } from './src/screenshotData';

// Keep the two exhibition proof screenshots inside the application bundle.
// This avoids CDN/static-asset corruption while preserving the exact,
// privacy-safe images that were reviewed before deployment.
document.documentElement.style.setProperty('--membership-screenshot', `url("${membershipScreenshotDataUrl}")`);
document.documentElement.style.setProperty('--analytics-screenshot', `url("${analyticsScreenshotDataUrl}")`);

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);