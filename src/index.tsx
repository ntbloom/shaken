import React from 'react';
import ReactDOM from 'react-dom/client';
import Wrapper from './components/Wrapper';
import './index.css';

const rootElem = document.getElementById('root');
if (rootElem === null) {
  console.error("Can't find element `root`");
} else {
  const root = ReactDOM.createRoot(rootElem);
  root.render(
    <React.StrictMode>
      <Wrapper />
    </React.StrictMode>,
  );
}
