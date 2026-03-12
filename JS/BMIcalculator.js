

function bmiCalculator(weight, height) {
    var bmi = weight / Math.pow(height, 2);
    return Math.round(bmi);
}

var bmi = bmiCalculator(65, 1.80);
console.log("Your BMI is: " + bmi);