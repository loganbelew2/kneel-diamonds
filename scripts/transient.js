//set state data structure and give default values
const transientState = {
    "id": 0,
    "styleId": 0,
    "sizeId": 0,
    "metalId": 0
}


// setter functions
export const setStyle = (chooseStyle) => {
    transientState.styleId = parseInt(chooseStyle)
    console.log(transientState)
}

export const setSize = (chooseSize) => {
    transientState.sizeId = parseInt(chooseSize)
    console.log(transientState)
}

export const setMetal = (chooseMetal) => {
    transientState.metalId = parseInt(chooseMetal)
    console.log(transientState)
}


//function to create post and stringify transient state object
export const placeOrder = async () => {
    const postOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/Json"
        },
        body: JSON.stringify(transientState)
    }

    // Send the transient state to your API
    const response = await fetch("http://localhost:8088/orders", postOptions)
   
    const customEvent = new CustomEvent("newSubmission")
    document.dispatchEvent(customEvent)
}
