// Task03 
// Using JavaScript and DOM create click event handler for Button that 
// replaces content of a paragraph 4 with a number 42

function m07task03() {
  const button = document.querySelector('button'); 
  button.addEventListener('click', function() {
    const paragraph = document.querySelectorAll('p');
    paragraph[3].textContent = '42';
  });
}
m07task03();