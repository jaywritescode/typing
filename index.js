const DEFAULT_SPEED = 200;

function typing(tree, parent, options = {}) {
  const queue = [[tree, parent]];

  const speed = options.speed || DEFAULT_SPEED;

  function appendElementNode(currentNode, parent) {
    const clone = currentNode.cloneNode();
    parent.appendChild(clone);

    queue.unshift(...Array.from(currentNode.childNodes).map(node => [node, clone]));
    doNextNode();
  }

  function appendTextNode(currentNode, parent) {
    const newNode = document.createTextNode('');
    parent.appendChild(newNode);

    const text = currentNode.textContent;
    
    const doNextLetter = (len = 0) => {
      if (len > text.length) {
        doNextNode();
        return;
      }
      else {
        newNode.data = text.substring(0, ++len);
        setTimeout(() => doNextLetter(len), speed);
      }
    }
    doNextLetter();
  }

  function doNextNode() {
    if (!queue.length) {
      return;
    }

    const [currentNode, parent] = [...queue.shift()];

    if (currentNode.nodeType == Node.ELEMENT_NODE) {
      appendElementNode(currentNode, parent);
    }
    else if (currentNode.nodeType == Node.TEXT_NODE) {
      appendTextNode(currentNode, parent);
    }
    else {
      console.error('Unknown node type.');
    }
  };
  doNextNode();
}

export { typing };