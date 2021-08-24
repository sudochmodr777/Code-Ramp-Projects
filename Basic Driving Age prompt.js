let age = Number(prompt("What is your age?"));
while (age !== age) {
    age = Number(prompt("Nice try! At least give me a number?"));
} if (age >= 16) {
    alert("is old enough to drive");  
} if (age <= 19 && age >= 13) {
    alert("is a teen (oh no!)");
} else if (age < 13) {
    alert("is a child");
}
