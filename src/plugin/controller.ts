figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-card') {
    const cardVariant = msg.variant;
    const cardName = `Card/${cardVariant}`;
    // Get the whole page
    const page = figma.currentPage;

    // Find the card article by name using
    const cardComponent = page.findOne((node) => node.type == 'COMPONENT' && node.name == cardName) as ComponentNode;

    // Use the createInstance() function to make a whole new component instance
    const newComponent = cardComponent.createInstance();

    const nodes = [...figma.currentPage.selection];
    nodes.pop();
    nodes.push(newComponent);
    figma.viewport.scrollAndZoomIntoView(nodes);
    // This is how figma responds back to the ui
    figma.ui.postMessage({
      type: 'create-card',
      message: `Created a ${msg.variant} Card`,
    });
  } else if (msg.type == 'update-card') {
    // We can transform the image ahead of time here
    const propertyUpdates = new Map([
      ['cardVariant', msg.variant],
      ['cardImage', msg.image], //We can transform the image ahead of time here
      ['cardTitle', msg.title],
      ['cardDescription', msg.description],
    ]);
    const cardName = `Card/${propertyUpdates['cardVariant']}`;
    const currentSelection = figma.currentPage.selection[0] as InstanceNode;

    console.log(currentSelection);
    if (currentSelection.type !== 'INSTANCE' && !currentSelection.mainComponent.name.includes('Card/')) {
      figma.ui.postMessage({
        type: 'update-error',
        message: 'Sorry your selection did not have a card instance to update.',
      });
      return;
    }

    const selectedCard = currentSelection;

    // When the user wants to change the variant as well
    // else if (currentSelection.mainComponent.name !== cardName) {
    //   // Swap instance to a different variant
    // }

    // Update All the Card Data
  } else {
    figma.closePlugin();
  }
};

function updateVariant() {
  // If the name has been replaced then record all previous property data
  // Create a new Component instance based on new variant
  // copy property data over to new copy
  // remove previous instance + replace with new Instance Node.
}

function updateImage() {
  // Check if file is a JPEG or PNG
  // If not, post error message and do not change image
  // take image and hash it
  // send hash to instanceNode + replace the Media Component rectangle node fill
  // with new image
}

function updateTitle() {
  // if not empty, find the instance + the auto-layout container
  // change the first item in array to new title
  /**
   * figma.loadFontAsync(textNode).then(() => {
            textNode.characters = newTitle;
        });
   */
}

function updateDescription() {
  // if not empty, find the instance + the auto-layout container
  // change the first item in array to new title
  /**
   * figma.loadFontAsync(textNode).then(() => {
            textNode.characters = newTitle;
        });
   */
}
