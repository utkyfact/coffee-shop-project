const navmenu = document.getElementById('menu')
const navBtn = document.getElementById('navBtn')
const light = document.querySelector('.light')
const dark = document.querySelector('.dark')


// TEMA DEGISTIRICI
function checkTheme(){
    const theme = localStorage.getItem('theme')
    document.body.classList.toggle(
        'dark',
        theme == 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark').matches)
    )
    light.classList.toggle(
        'hidden',
        theme == 'light' || (!theme && !window.matchMedia('(prefers-color-scheme: dark').matches)
    )
    dark.classList.toggle(
        'hidden',
        theme == 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark').matches)
    )
}
checkTheme()

light.addEventListener('click',function(){
    localStorage.setItem('theme','light')
    checkTheme()
})

dark.addEventListener('click',function(){
    localStorage.setItem('theme','dark')
    checkTheme()
})

// NAVBAR AC KAPA
navBtn.addEventListener('click',function(){
    navmenu.classList.toggle('hidden')
    navBtn.children[0].classList.toggle('hidden')
    navBtn.children[1].classList.toggle('hidden')
})