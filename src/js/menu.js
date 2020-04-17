document.querySelector('.menu-btn.open').addEventListener('click', function() {
    const $menu = document.querySelector('.menu')
    const $closeBtn = document.querySelector('.menu-btn.close')
    
    changeClassesToOpenMenu($menu, document.body)
    $closeBtn.addEventListener('click', function hide() {
        changeClassesToCloseMenu($menu, document.body)
        this.removeEventListener('click', hide)
    })
})

function changeClassesToOpenMenu($menu, $body) {
    $menu.classList.remove('menu-closed')
    $menu.classList.add('menu-opened')
    $body.classList.add('menu-open')
}

function changeClassesToCloseMenu($menu, $body) {
    $menu.classList.remove('menu-opened')
    $menu.classList.add('menu-closed')
    $body.classList.remove('menu-open')
}