// This function should return the BMI for a person 
function BMICalculator(mass, height) {
    // Write your code here
    if(mass > 0 && height > 0){
        var BMI = mass / (height * height)
        return BMI
    }
    return "INVALID INPUT" 
}

module.exports = BMICalculator;
