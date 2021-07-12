
let buttonTipPercentage= 10; 


// gets the number of people to split the bill
const numberOfPeople=()=>{
	let people = document.getElementById("people-input").value
	if (people.length && parseInt(people) > 0) {
		return parseInt(people)
	} 
}

// gets custom user percentage
const customPercantage=()=>{
	let custom = document.getElementById("custom-percentage").value
	if (custom.length) {
		resetButtons()
		return parseInt(custom)
	} 
}
// gets percentage set with buttons
const buttonPercentage=(param)=>{
	onChange()
	document.getElementById("custom-percentage").value = "";
	buttonTipPercentage = param;
	resetButtons()
	selectedPercentage(param)
}

const tipPercentage=()=>{
	if (customPercantage()){
		return customPercantage()
	}else{
		return buttonTipPercentage
	}
}

// gets the bill entered by user
const getBill= ()=>{
	let bill = document.getElementById("bill-input").value;
	if (bill.length) {return parseInt(bill)}
}
// Calculates tip amount
const calculateTip = ()=>{
	// get tip percentage
	let percentage = tipPercentage()

	// get Bill input
	let bill = getBill()
	// get number of people
	let people = numberOfPeople()
	
	if (bill === undefined| people === undefined){
		
		return
	}
	




	let tip = (bill *(percentage/100))/people
	let total = (bill*((100+percentage)/100))/people
	document.getElementById("tip-display").innerHTML=`&dollar;${tip.toFixed(2)}`
	document.getElementById("total-display").innerHTML=`&dollar;${total.toFixed(2)}`
}

// setInterval(calculateTip,1000)

const onChange=()=>{
	setTimeout(calculateTip, 500)
}

const reset=()=>{
	resetButtons();
	defaultPercentage();
	document.getElementById("bill-input").value = 0;
	document.getElementById("people-input").value =1;
}

const resetButtons=()=>{
	let buttons = [5,10,15,25,50]
	for (let i = 0; i < buttons.length; i++){
		document.getElementById(`${buttons[i]}`).classList.toggle("selected-btn", false);
		document.getElementById(`${buttons[i]}`).classList.toggle("inactive", true)
	}
}

const defaultPercentage=()=>{
	buttonPercentage(10)
}

const selectedPercentage=(param)=>{
	document.getElementById(`${param}`).classList.toggle("selected-btn", true);
	document.getElementById(`${param}`).classList.toggle("inactive", false);
}