// Task02
// Using JavaScript and DOM hide hide second and third paragraphs 
// of target HTML document, all other elements should be visible

function m07task02() {
  const paragraphs = document.querySelectorAll('p');
  paragraphs[1].style.display = 'none';
  paragraphs[2].style.display = 'none';
}