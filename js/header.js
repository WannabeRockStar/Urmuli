// scroll sticky navbar
document.addEventListener('scroll', () => {
    const header = document.getElementById('header')

    if(document.documentElement.scrollTop === 0) {
        header.classList.remove('header-translate')
        header.classList.remove('header-fixed')

    }

    if(document.documentElement.scrollTop > 64 && document.documentElement.scrollTop < 128) {
        header.classList.add('header-translate')
    }

    if(document.documentElement.scrollTop > 184) {
        header.classList.remove('header-translate')
        header.classList.add('header-fixed')
    }
})