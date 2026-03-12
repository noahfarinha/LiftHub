function bmiCalculator() {
    // Get input values
    var weight = parseFloat(document.getElementById("weight").value);
    var height = parseFloat(document.getElementById("height").value);

    if (!weight || !height) {
        alert("Please enter both weight and height!");
        return;
    }

    var bmi = weight / (height * height);
    bmi = Math.round(bmi);

    // Display result
    document.getElementById("bmiResult").innerText = "Your BMI is: " + bmi;
}