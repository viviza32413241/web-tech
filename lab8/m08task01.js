// Task01 - create regular expression which tests for corectness phone numbers.
// Phone number should have 10 digits optionally divided to 3-digit groups by periods ("."), dashes ("-"),
// brackets ("()"), or space symbols (" "). Brackets should be used only at the beginning
// Examples of correct phone numbers:
// (123) 456 7899
// (123).456.7899
// (123)-456-7899
// 123-456-7899
// 123 456 7899
// 1234567899

function task01(testNumber) {
    const regex = /^(\(\d{3}\)|\d{3})([\s.-]?\d{3}[\s.-]?\d{4})$/;
  return regex.test(testNumber);
}
console.log(task01("(123)-456-7899"));