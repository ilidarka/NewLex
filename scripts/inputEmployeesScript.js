const employees = document.querySelector("#employees")

var labels = { 0: '0', 10: '10', 20: '20', 30: '30', 40: '40', 50: '50+', };
noUiSlider.create(employees, {
  start: 25,
  connect: [true, false],
  tooltips: {
    to: function(value) {
        return value > 100 ? '100+' : parseInt(value)
    }
  },
  range: {
    'min': 0,
    '20%': 10,
    '40%': 20,
    '60%': 30,
    '80%': 40,
    'max': 50
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