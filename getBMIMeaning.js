const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight/(height*height)
}
function getBMIMeaning(weight, height) {
  if (calculateBMI(weight, height) < 18.5) return 'Underweight'
  else if (calculateBMI(weight, height) > 24.9) return 'Overweight'
  else return 'Normal weight'
}
module.exports = getBMIMeaning

