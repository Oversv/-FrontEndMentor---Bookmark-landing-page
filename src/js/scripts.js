const tabs = document.getElementById('tab-list')
const listTabs = document.querySelectorAll('.tabs__item')
const tabContent = document.querySelectorAll('.tabs__content')
const acordion = document.getElementById('accordion')
const menu = document.getElementById('menu')
const topMenu = document.getElementById('top-menu')
const logo = document.getElementById('logo')

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

            el.classList.remove('tabs__content--active')

            if(el.id === e.target.getAttribute('data-tab-target')){                
                el.classList.add('tabs__content--active')
                
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