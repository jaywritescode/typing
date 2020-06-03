import { typing } from './index.js';

(function() { 
  window.addEventListener('DOMContentLoaded', () => {
    typing(document.getElementById('test'), document.getElementById('main'));
  });
})();
