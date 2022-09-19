//
// Scripts
// 

import { save } from './firebase.js'
import { sendEmail } from './email.js'

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});

const form = document.getElementById('quiero_ayudar');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name')
    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const description = document.getElementById('description')
    const messageSucces = document.getElementById('submitSuccessMessage')
    const messageError = document.getElementById('submitErrorMessage')

    const inscription = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        whois: description.value
    }

    if(inscription.name != "" && inscription.email != "" && inscription.phone != "" && inscription.whois != "") {
        save(inscription)
        
        if(messageSucces.classList.contains('d-none')) messageSucces.classList.remove('d-none')
        if(!messageError.classList.contains('d-none')) messageError.classList.add('d-none')
        
        name.value = ""
        email.value = ""
        phone.value = ""
        description.value = ""

        sendEmail(inscription)
    }
    else {
        if(messageError.classList.contains('d-none')) messageError.classList.remove('d-none')
        if(!messageSucces.classList.contains('d-none')) messageSucces.classList.add('d-none')
    }
});