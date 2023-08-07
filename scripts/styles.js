import { setStyle } from "./transient.js"

export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const stylesObj = await response.json()

    
    let html = ""
    const divStringArray = stylesObj.map(
        (styles) => {
            return `<div>
            <input type = 'radio' name = 'style' value = ${styles.id}/> ${styles.style}
        </div>`
        }
    )
    html += divStringArray.join("____________")
    return html
}





const handleStyleChoice = (event) => {
    if (event.target.name === "style") {
        setStyle(parseInt(event.target.value))
    }
}
document.addEventListener("change", handleStyleChoice)