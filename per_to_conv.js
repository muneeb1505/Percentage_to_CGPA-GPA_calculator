function calculate(){
        const per = parseFloat(document.getElementById('per').value);
        if(!isNaN(per)){
 
            const cgpa = (per / 9.5).toFixed(2);
            const gpa = ((per / 100) * 4).toFixed(2);
            
            document.getElementById('result').innerHTML = `CGPA: ${cgpa}`;
            document.getElementById('result2').innerHTML = `GPA: ${gpa}`;
            result.style.color = 'green';
            result2.style.color = 'green';

        }
        else{

            document.getElementById('result').innerHTML = 'Please enter a valid value!';
            result.style.color = 'red';
            document.getElementById('result2').innerHTML = 'Please enter a valid value!';
            result2.style.color = 'red';

        }
    }
