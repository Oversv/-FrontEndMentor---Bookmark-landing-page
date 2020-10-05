const tabs = document.getElementById('tab-list')
const listTabs = document.querySelectorAll('.tabs__item')
const tabContent = document.querySelectorAll('.tab-content')
const acordion = document.getElementById('accordion')
const menu = document.getElementById('menu')
const topMenu = document.getElementById('top-menu')
const logo = document.getElementById('logo')
const form = document.getElementById('form-contact')

const validateEmail = email =>{ 

    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 
    
    if(!re.test(String(email.value).toLowerCase())){             
        email.classList.add('contact__email-input--error') 
        email.nextSibling.classList.add('contact__email-error--show')
        email.placeholder = email.value

        return false   
    }

    email.classList.remove('contact__email-input--error') 
    email.nextSibling.classList.remove('contact__email-error--show')

    return true    
}
//TODO mirar de crear los semicirculos dinamicamente
const calcDifferenceBodyToSemicircle = () =>{
    const windowSize = window.innerWidth
    const styles = document.documentElement.style
    const marginRight = 0.07 //%
    const marginLeft = 0.115 //%
    const semicircleRight = windowSize * marginRight
    const semicircleLeft = windowSize * marginLeft
    
    styles.setProperty('--semicircleRight', `-${semicircleRight}px`)
    styles.setProperty('--semicircleLeft', `-${semicircleLeft}px`)
}

menu.addEventListener('click', () =>{

    if(topMenu.classList.contains('nav--show')){
        
        logo.classList.remove('header__logo--white')
        topMenu.classList.remove('nav--show')
        menu.src = 'images/icon-hamburger.svg'

    }else{
        logo.classList.add('header__logo--white')
        topMenu.classList.add('nav--show')
        menu.src = 'images/icon-close.svg'
    }
})

tabs.addEventListener('click', e =>{    

    if(e.target.getAttribute('data-tab-target')){
        
        /**List Items **/
        listTabs.forEach(el =>{

            el.classList.remove('tabs__item--active')

            if(el === e.target){
                el.classList.add('tabs__item--active')                
            }  
        })
        /**Content **/
        tabContent.forEach(el =>{
            
            el.classList.remove('tab-content--active')

            if(el.id === e.target.getAttribute('data-tab-target')){                
                el.classList.add('tab-content--active')              
            }
        })
    }
})

acordion.addEventListener('click', e =>{ 

  if(e.target.classList.contains('accordion__question')){    
    const accordionContent = e.target.nextElementSibling
    
    e.target.classList.toggle('accordion__question--active')
    accordionContent.classList.toggle('accordion__content--show')
  }

})

form.addEventListener('submit', e =>{
    const email = form.email
    
    e.preventDefault()
    validateEmail(email)
})



window.addEventListener('load', calcDifferenceBodyToSemicircle)
window.addEventListener('resize', calcDifferenceBodyToSemicircle)