import { typing } from './index.js';

(function() { 
  window.addEventListener('DOMContentLoaded', () => {
    const el = document.getElementById('test');
    el.parentNode.removeChild(el);

    typing(el, document.getElementById('main'));
  });
})();
