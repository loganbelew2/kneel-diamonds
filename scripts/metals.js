// The setMetalChoice() function used below is just an example.
// Change it to the name of the setter function you created.
import { setMetal } from "./transient.js"


export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()


    // Use map() to generate new array of strings
    let optionsHTML = ""
    const divStringArray = metals.map(
        (metal) => {
            return `<div>
            <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
            </div>`
        }
    )
    // This function needs to return a single string, not an array of strings
    optionsHTML += divStringArray.join("______________")
    
    return optionsHTML
}




const handleMetalChoice = (event) => {
    if (event.target.name === "metal") {
        setMetal(parseInt(event.target.value))
    }
}
document.addEventListener("change", handleMetalChoice)


