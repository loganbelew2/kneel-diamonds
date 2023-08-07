import { buttonHTML } from "./button.js"
import { MetalOptions } from "./metals.js"
import { SizeOptions } from "./sizes.js"
import { StyleOptions } from "./styles.js"
import { Orders } from "./submitionList.js"

const container = document.querySelector("#mainContainer")
const render = async () => {
    const metalOptionsHTML = await MetalOptions()
    const sizeOptionsHTML = await SizeOptions()
    const styleOptionsHTML = await StyleOptions()
    const submitionList =  await Orders()
    const button = buttonHTML()
    const composedHTML = `
        <h1>Kneel Diamonds</h1>

        <article class="choices">
            <section class="choices__metals options">
                <h2>Metals</h2>
                ${metalOptionsHTML}
            </section>

            <section class="choices__sizes options">
                <h2>Sizes</h2>
                ${sizeOptionsHTML}
            </section>

            <section class="choices__styles options">
                <h2>Styles</h2>
                ${styleOptionsHTML}
            </section>
        </article>

        <article class="order">
            ${button}
        </article>

        <article class="customOrders">
            <h2>Custom Jewelry Orders</h2>
            ${submitionList}
        </article>
    `

    container.innerHTML = composedHTML
    
}

document.addEventListener("newSubmission", render)

render()
