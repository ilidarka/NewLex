const judicialWork = document.querySelector("#judicial-work");

var labels = { 0: '0', 10: '10', 20: '20', 30: '30', 40: '40+', };
noUiSlider.create(judicialWork, {
  start: 20,
  connect: [true, false],
  tooltips: {
    to: function(value) {
        return value > 100 ? '100+' : parseInt(value)
    }
  },
  range: {
    'min': 0,
    '25%': 10,
    '50%': 20,
    '75%': 30,
    'max': 40,
  },
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