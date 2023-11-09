let themes = document.querySelectorAll('.lbl-toggle');

Array.from(themes).forEach(label => {
  label.addEventListener('keydown', e => {
    32 === spacbar
    13 === enter
    if (e.which === 32 || e.which === 13) {
      e.preventDefault();
      label.click();
    };
  });
});
