// scroll sticky navbar
document.addEventListener('scroll', () => {
    const header = document.getElementById('header')
    const logo = document.getElementById('logo')

    if(document.documentElement.scrollTop === 0) {
        header.classList.remove('header-translate')
        header.classList.remove('header-fixed')
        logo.firstElementChild.style.display = 'block'
        logo.lastElementChild.style.display = 'none'

    }

    if(document.documentElement.scrollTop > 64 && document.documentElement.scrollTop < 128) {
        header.classList.add('header-translate')
    }

    if(document.documentElement.scrollTop > 184) {
        header.classList.remove('header-translate')
        header.classList.add('header-fixed')
        logo.firstElementChild.style.display = 'none'
        logo.lastElementChild.style.display = 'block'
    }
})

function showMobileMenu() {
    const mobileNav = document.getElementById('mobile-nav')

    setTimeout(() => {
        mobileNav.classList.add('mobile-nav-show')
    }, 100)
}

function closeMenu() {
    const mobileNav = document.getElementById('mobile-nav')

    mobileNav.classList.remove('mobile-nav-show')
}