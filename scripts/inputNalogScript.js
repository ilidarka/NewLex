const nalog = document.querySelector("#nalog")

var labels = { 0: 'УСН 6%', 1: 'УСН15%', 2: 'ОСНО', };
noUiSlider.create(nalog, {
  start: 1,
  connect: [true, false],
  tooltips: false,
  range: {
    'min': 0,
    'max': 2
  },
  step: 1,
  pips: {
    mode: 'steps',
    filter: function (value, type) {
      return type === 0 ? -1 : 1;
    },
    format: {
      to: function (value) {
        return labels[value];
      }
    }
  }
});