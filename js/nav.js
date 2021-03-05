// Create Element Variables
const navbar = document.querySelector(".top-nav")
const navExpander = document.createElement("li")

// Set Element Attributes
navExpander.setAttribute("class", "nav-mobile-expander")

// Add nav expander text
navExpander.innerText = "^"

// Mousedown Event Listener
navExpander.addEventListener("mousedown", () => {
    // Loop through all nav-items, except for the first one
    for (var i = 1; i < navbar.querySelectorAll(".nav-item").length; i++)
        // Toggles the class 'nav-mobile-hidden'
        navbar.querySelectorAll(".nav-item")[i].classList.toggle("nav-mobile-hidden")
    
    // Toggle the text
    navExpander.innerText = (navExpander.innerText == "V") ? "^" : "V"
})

window.onload = () => {
    // Loop through all nav-items, except for the first one
    for (var i = 1; i < navbar.querySelectorAll(".nav-item").length; i++)
        // Toggles the class 'nav-mobile-hidden'
        navbar.querySelectorAll(".nav-item")[i].classList.toggle("nav-mobile-hidden")
    // Add navExpander element to the nav bar
    navbar.querySelectorAll(".nav-item")[0].append(navExpander)
}