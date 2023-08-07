import { placeOrder } from "./transient.js"


export const buttonHTML = () => {
    document.addEventListener("click", handleClickButtonEvent)
    let html = `<article class="order">
    <button id= 'saveSubmition' > Submit</button>
    </article>`
    return html
}



const handleClickButtonEvent = (buttonClicked) => {
    if (buttonClicked.target.id === 'saveSubmition') {
        placeOrder()
    }
}

  
  