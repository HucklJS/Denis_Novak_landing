// NodeList.prototype.forEach polyfill
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
}
// NodeList.prototype.forEach polyfill


const $navbar = document.querySelector('.navbar')
const $menuNavbar = document.querySelector('.menu-navbar')


$navbar.addEventListener('click', onNavbarClick)
$menuNavbar.addEventListener('click', onNavbarClick)

function onNavbarClick(event) {
    const target = event.target.closest('a')
    if (!target) return 
    
    const $menu = document.querySelector('.menu')
    const $closeBtn = document.querySelector('.menu-btn.close')

    makeAllElementsInactive($navbar)
    makeAllElementsInactive($menuNavbar)
    makeClickedElementActive(target)

    if ($menu.classList.contains('menu-opened')) {
        // from menu.js
        $closeBtn.click()
    }
}


function makeAllElementsInactive($navbar) {
    const $elements = $navbar.querySelectorAll('li > a')
    $elements.forEach($element => {
        if ($element.classList.contains('active')) {
            $element.classList.remove('active')
        } 
    })
}


function makeClickedElementActive($element) {
    $element.classList.add('active')
}