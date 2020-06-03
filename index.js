function typing(tree, parent) {
  const queue = [[tree, parent]];

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
          setTimeout(() => doNextLetter(len), 500);
        }
      }

      doNextLetter();
    }
  };
  doNextNode();
}

export { typing };