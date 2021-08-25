const reqFailures = 1;
let age = Number(prompt("What is your age?"));
    
for (let currentFailures = 0; age !== age; currentFailures++) {
	if (currentFailures < reqFailures) {
        age = Number(prompt("At least give me a number?"));
	} else if (currentFailures > reqFailures) {
           age = Number(prompt("Stop being rude and answer the question."));  
    }
}  if (age >= 16) {
    	alert("is old enough to drive");  
} if (age <= 19 && age >= 13) {
    	alert("is a teen (oh no!)");
} if (age < 13 && age > 0) {
    	alert("a child!");
} else if (age == 0) {
        alert("rude");
}
