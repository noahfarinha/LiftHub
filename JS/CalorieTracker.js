function calculateCalories() {
    
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;
    let age = document.getElementById("age").value;
    let goal = document.getElementById("goal").value.toLowerCase();

    let bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;

    let calories;

    if (goal === "bulk") {
        calories = bmr + 500;
    } else if (goal === "cut") {
        calories = bmr - 500;
    } else {
        document.getElementById("result").innerText = "Enter 'bulk' or 'cut'";
        return;
    }

    document.getElementById("result").innerText = 
        "You should aim for around: "  + Math.round(calories) + " calories a day.";
}