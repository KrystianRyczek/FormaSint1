import {
    baner,
    catBox
  } from './htmlFragment';


window.addEventListener('click', event => {
    const action = event.target.dataset.action
    console.log(event.target.dataset.action)
    //console.log(event.target.parentElement)

    if( action === "openModla"){
        const element = document.querySelector('#backdrop')
        element.classList.add('modal-open')
    }
    if( action === "closeModla"){
        const element = document.querySelector('#backdrop')
        element.classList.remove('modal-open')
    }
    if( action === "openMenu"){
        const element = document.querySelector('#hamburger-menu-box')
        element.classList.add('hamburger-open')
    }
    if( action === "closeMenu"){
        const element = document.querySelector('#hamburger-menu-box')
        element.classList.remove('hamburger-open')
    }
  });




  window.addEventListener("resize", ()=>{
    console.log(window.screen.width)
    const element = document.querySelector('#baner')
    element !== null? element.remove(): false 

    if (window.screen.width>360){
        const item = document.querySelector('#product-5')
        item.insertAdjacentHTML("afterend", baner())
        const uItem2 = document.querySelector('#upcoming-2')
        uItem2.classList.remove('hide')
        const uItem3 = document.querySelector('#upcoming-3')
        uItem3.classList.remove('hide')
        const uItem4 = document.querySelector('#upcoming-4')
        uItem4.classList.remove('hide')
        const smalBox = document.querySelector('#smal-box')
        smalBox !== null? smalBox.remove(): false 
    }
    if (window.screen.width<=360){
        const item = document.querySelector('#product-4')
        item.insertAdjacentHTML("afterend", baner())
        const uItem2 = document.querySelector('#upcoming-2')
        uItem2.classList.add('hide')
        const uItem3 = document.querySelector('#upcoming-3')
        uItem3.classList.add('hide')
        const uItem4 = document.querySelector('#upcoming-4')
        uItem4.classList.add('hide')
        const smalBox = document.querySelector('#smal-box')
        if(smalBox===null) {
            const uItem1 = document.querySelector('#upcoming-1')
            uItem1.insertAdjacentHTML("afterend", catBox())
        }

    }
    

  })