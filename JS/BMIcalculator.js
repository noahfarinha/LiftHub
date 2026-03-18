function bmiCalculator() {
    // Get weight
    var weightInput = document.getElementById("weight").value.replace(',', '.');
    var weight = parseFloat(weightInput);

    // Get height
    var heightInput = document.getElementById("height").value.replace(',', '.');
    var height = parseFloat(heightInput);

    // Get unit
    var unit = document.getElementById("heightUnit").value;

    // Validation
    if (!weight || !height) {
        alert("Please enter both weight and height!");
        return;
    }

    // Convert cm to meters if selected
    if (unit === "cm") {
        height = height / 100;
    }

    // Calculate BMI
    var bmi = weight / (height * height);
    bmi = Math.round(bmi);

    // Determine category
    var category = "";
    if (bmi < 18.5) category = "Underweight";
    else if (bmi < 25) category = "Normal weight";
    else if (bmi < 30) category = "Overweight";
    else category = "Obese";

    // Display result
    document.getElementById("bmiResult").innerText = `Your BMI is: ${bmi} (${category})`;
}