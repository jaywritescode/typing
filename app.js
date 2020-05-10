import typing from './index.js';

(function() { window.addEventListener('DOMContentLoaded', () => {
  const el = document.getElementById('main');
  typing('hello world', el, () => console.log('done'));
}) })();
