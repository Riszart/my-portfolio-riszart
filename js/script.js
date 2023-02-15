const buttonAbout = document.getElementById('about').addEventListener('click', ()=>{nextPage('about')})
const buttonProgramming = document.getElementById('programming').addEventListener('click', ()=>{nextPage('programming')})
const buttonWork = document.getElementById('work').addEventListener('click', ()=>{nextPage('work')})
const buttonContact = document.getElementById('contact').addEventListener('click', ()=>{nextPage('contact')})
const buttonSummary = document.getElementById('summary').addEventListener('click', ()=>{nextPage('summary')})
const changeBody = document.querySelector('.bodyTras')

const linkPage = {
    about:'/my-portfolio-riszart/html/about.html',
    programming:'/my-portfolio-riszart/html/programming.html',
    work:'/my-portfolio-riszart/html/portafolio.html',
    contact:'/my-portfolio-riszart/html/contact.html',
    summary:'/my-portfolio-riszart/html/summary.html',
}
console.log(buttonSummary)

function nextPage(element){
    const iframe = document.querySelector('.iframe-item')
    let itemElement = Object.keys(linkPage).find(item=>item==element)
    iframe.src = linkPage[itemElement]
    if( itemElement == 'summary'){
        changeBody.classList.add('view-page')
    }
}
