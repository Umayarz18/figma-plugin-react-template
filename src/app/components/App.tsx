import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';
import CreateComponentPage from './CreateComponentPage';
import { TabsContainer } from './Tabs';
import UpdateCardPage from './UpdateComponentPage';

function App() {
  // Common event handlers used in both pages.
  const onCancel = () => {
    parent.postMessage({ pluginMessage: { type: 'cancel' } }, '*');
  };
  return (
    <div>
      <img src={logo} />
      <h2>My First Plugin</h2>
      <TabsContainer
        tabsList={['Create Component', 'Update Component']}
        tabsContent={[<CreateComponentPage handlers={{ onCancel }} />, <UpdateCardPage handlers={{ onCancel }} />]}
      />
    </div>
  );
}

export default App;
