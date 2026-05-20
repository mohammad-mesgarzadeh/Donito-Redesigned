import HomePage from './pages/HomePage.js'
import StreamerPage from './pages/StreamerPage.js'
import CreatorsPage from './pages/CreatorsPage.js'
import ContactPage from './pages/ContactPage.js'
import DownloadsPage from './pages/DownloadsPage.js'

const routes = [
    { path: '/', view: HomePage },
    { path: '/Streamer', view: StreamerPage },
    { path: '/Creators', view: CreatorsPage },
    { path: '/Contact', view: ContactPage },
    { path: '/Downloads', view: DownloadsPage },
]

const navTo = (url) => {
    location.hash = url
}

const setActiveLink = () => {

    const currentPath = location.hash.slice(1) || '/'

    document.querySelectorAll('.nav-link').forEach(link => {

        const href = link.getAttribute('href')

        if (href === currentPath) {
            link.classList.add('active')
        } else {
            link.classList.remove('active')
        }

    })
}

const initFaq = () => {

    const faqItems = document.querySelectorAll('.faq-item')

    faqItems.forEach(item => {

        const button = item.querySelector('button')
        const answer = item.querySelector('.faq-answer')
        const icon = item.querySelector('.faq-icon')

        button.addEventListener('click', () => {

            const isOpen = !answer.classList.contains('hidden')

            document.querySelectorAll('.faq-answer').forEach(el => {
                el.classList.add('hidden')
            })

            document.querySelectorAll('.faq-icon').forEach(el => {
                el.classList.remove('rotate-45')
            })

            if (!isOpen) {
                answer.classList.remove('hidden')
                icon.classList.add('rotate-45')
            }

        })

    })

}

const initMobileMenu = () => {

    const menuBtn = document.querySelector('#menu-btn')
    const mobileMenu = document.querySelector('#mobile-menu')
    const closeMenu = document.querySelector('#close-menu')
    const overlay = document.querySelector('#overlay')

    if (!menuBtn || !mobileMenu || !closeMenu || !overlay) return

    const openMenu = () => {

        mobileMenu.classList.remove('hidden')

        setTimeout(() => {
            overlay.classList.remove('opacity-0', 'pointer-events-none')
        }, 10)

    }

    const closeMenuFunc = () => {

        overlay.classList.add('opacity-0', 'pointer-events-none')

        setTimeout(() => {
            mobileMenu.classList.add('hidden')
        }, 300)

    }

    menuBtn.addEventListener('click', openMenu)
    closeMenu.addEventListener('click', closeMenuFunc)
    overlay.addEventListener('click', closeMenuFunc)

}

const router = () => {

    const currentPath = location.hash.slice(1) || '/'

    const match = routes.find(route => route.path === currentPath)

    const page = match ? match.view : HomePage

    document.querySelector('#app').innerHTML = page()

    setActiveLink()

    initFaq()

    initMobileMenu()

}

window.addEventListener('hashchange', router)

document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('click', (event) => {

        const link = event.target.closest('[data-link]')

        if (link) {

            event.preventDefault()

            const href = link.getAttribute('href')

            navTo(href)

        }

    })

    router()

})