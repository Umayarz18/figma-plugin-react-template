import React from 'react';

export default function UpdateCardPage({ handlers }: { handlers: {} }) {
  const variantSelection = React.useRef<HTMLSelectElement>(undefined);
  const imageTextbox = React.useRef<HTMLInputElement>(undefined);
  const titleTextbox = React.useRef<HTMLInputElement>(undefined);
  const descriptionTextbox = React.useRef<HTMLTextAreaElement>(undefined);

  const variantRef = React.useCallback((element: HTMLSelectElement) => {
    variantSelection.current = element;
  }, []);
  const imageRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = null;
    imageTextbox.current = element;
  }, []);
  const titleRef = React.useCallback((element: HTMLInputElement) => {
    if (element) element.value = null;
    titleTextbox.current = element;
  }, []);
  const descriptionRef = React.useCallback((element: HTMLTextAreaElement) => {
    if (element) element.value = null;
    descriptionTextbox.current = element;
  }, []);

  const onUpdate = () => {
    const variant = variantSelection.current.value;
    const image = imageTextbox.current.value;
    const title = titleTextbox.current.value;
    const description = descriptionTextbox.current.value;
    parent.postMessage({ pluginMessage: { type: 'update-card', variant, image, title, description } }, '*');
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
      <div className="form-control-container">
        <label>Image:</label>
        <input ref={imageRef} type="file" />
      </div>
      <div className="form-control-container">
        <label>Title:</label>
        <input ref={titleRef} type="text" />
      </div>
      <div className="form-control-container">
        <label>Description:</label>
        <textarea ref={descriptionRef} placeholder={'Your card description'} />
      </div>
      {/** Flex Goal: Modify the other properties exclusive to different variants! */}
      <div>
        <button id="create" onClick={onUpdate}>
          Update Card
        </button>
        <button onClick={handlers['onCancel']}>Cancel</button>
      </div>
    </>
  );
}
