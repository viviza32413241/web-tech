// Task01 
// Using JavaScript and DOM hide first paragraph 
// of target HTML document, all other elements should be visible

function m07task01() {
    const paragraphs = document.querySelectorAll('p');
    paragraphs[0].style.display = 'none';
}
m07task01();