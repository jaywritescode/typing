const DEFAULT_SPEED = 200;

function typing(tree, parent, options = {}) {
  const queue = [[tree, parent]];

  const speed = options.speed || DEFAULT_SPEED;

  function doNextNode() {
    if (!queue.length) {
      return;
    }

    const [currentNode, parent] = [...queue.shift()];

    if (currentNode.nodeType == Node.ELEMENT_NODE) {
      const clone = currentNode.cloneNode();
      parent.appendChild(clone);

      queue.unshift(...Array.from(currentNode.childNodes).map(node => [node, clone]));
      doNextNode();
    }
    else {
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
  };
  doNextNode();
}

export { typing };