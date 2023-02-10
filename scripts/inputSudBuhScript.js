const sud = document.querySelector("#sud")

var labels = { 0: '0', 5: '5', 10: '10', 15: '15', 20: '20+' };
noUiSlider.create(sud, {
  start: 10,
  connect: [true, false],
  tooltips: {
    to: function(value) {
        return value > 100 ? '100+' : parseInt(value)
    }
  },
  range: {
    'min': 0,
    '25%': 5,
    '50%': 10,
    '75%': 15,
    'max': 20
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