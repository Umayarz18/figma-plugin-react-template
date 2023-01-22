import React from 'react';

export default function CreateComponentPage({ handlers }: { handlers: {} }) {
  const textbox = React.useRef<HTMLSelectElement>(undefined);

  const variantRef = React.useCallback((element: HTMLSelectElement) => {
    if (element) element.value = 'Default';
    textbox.current = element;
  }, []);

  const onCreate = () => {
    const variant = textbox.current.value;
    parent.postMessage({ pluginMessage: { type: 'create-card', variant } }, '*');
  };
  return (
    <>
      <div className="form-control-container">
        <label htmlFor="update-variant">Variant:</label>
        <select ref={variantRef} id="update-variant">
          <option value="">---Select a Variant</option>
          <option value="Default">Default</option>
          <option value="Hover">Hover</option>
          <option value="Menu">Menu</option>
        </select>
      </div>
      <div className="footer">
        <button id="create" onClick={onCreate}>
          Create Card
        </button>
        <button onClick={handlers['onCancel']}>Cancel</button>
      </div>
    </>
  );
}
