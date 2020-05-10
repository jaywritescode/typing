function typing(text, el, callback) {
  if (!text.length) {
    return;
  }

  setTimeout(function typeMore(len = 0) {
    if (len > text.length) {
      callback && typeof callback === 'function' && callback(); 
    }
    else {
      el.innerText = text.substring(0, len);
      setTimeout(() => typeMore(len + 1), Math.random() * 1000);
    }
  }, 3000);
};

export default typing;