const numberInputs = document.getElementsByClassName('num-input')[0];
const resultElement = document.getElementsByClassName('result')[0];
const selectElement = document.getElementsByTagName('select')[0];



function selectHandler(){
	const num = Number(numberInputs.value);
	
	if(selectElement.value ==="gumar_factorial"){
		let result = 0;
		function sumFactorial (n){
    		for (i=1; i<=n; i++) {
       		 result = result+i;
    		}
    		console.log(result);
		}

	sumFactorial(num);
	resultElement.value=result
	}

	if(selectElement.value ==="factorial"){
		let result = 1;
		function Factorial (n){
    		for (i=1; i<=n; i++) {
       		 result = result*i;
    		}
    		console.log(result);
		}

	Factorial(num);
	resultElement.value=result
	}

}




