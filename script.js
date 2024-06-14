const age = prompt("What is your current age: ");
const retirementAge = prompt("At what age would you like to retire: ");
const date = new Date();
const year = date.getFullYear();
const yearsLeft = retirementAge - age;
const retireYear = year + (retirementAge - age)


if (isNaN(age) || isNaN(retirementAge)) {
  alert("Please make sure both inputs are numbers");
} else {
  if ( yearsLeft <= 0) {
    alert("You can already retire! Congratulations!");
  } else {
    alert(`You have ${yearDiff} years left until you can retire in ${year + yearDiff}`);
  }
}
;


