import { setSize } from "./transient.js"

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizesObj = await response.json()

    let html = ""
   
const divStringArray = sizesObj.map(
    (sizes) => {
      return  `<div>
            <input type = 'radio' name = 'size' value = ${sizes.id}/> ${sizes.carets}
        </div>`
    }
)
  html += divStringArray.join("____________")
    return html
}

const handleSizeChoice = (event) => {
    // Make sure you change this condition if you named your inputs differently
    if (event.target.name === "size") {
        setSize(parseInt(event.target.value))
    }
}
document.addEventListener("change", handleSizeChoice)