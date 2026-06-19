let weightInput= document.getElementById('weight');
let heightInput= document.getElementById('height');
let calculateBtn= document.getElementById('calculate');
let result= document.getElementById('result');
result.style.fontSize='20px';

calculateBtn.addEventListener('click', function() {
    let weight= parseFloat(weightInput.value);
    let height= parseFloat(heightInput.value);

    if(isNaN(weight) || isNaN(height) || weight<=0  || height<=0){
        result.style.color='red';
        result.textContent="Please enter valid positive numbers for weight and height.";
        return;
    }
    else{
        let bmi= weight / (height*height);
        let category='';
        result.style.fontWeight='bold';
        if(bmi<18.5){
            category='Underweight';
            result.style.color='blue';
        } else if(bmi>=18.5 && bmi<25){
            category='Normal weight';
            result.style.color='green';
        } else if(bmi>=25 && bmi<30){
            category='Overweight';
            result.style.color='red';
        } else {
            category='Obese';
        }
        result.textContent= 'Your BMI is ' + bmi .toFixed(2) + ' (' + category + ')';
        return

    }
});
