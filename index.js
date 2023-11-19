const container = document.querySelector("#Container")
const resetBtn = document.querySelector("#reset")
const sizing = document.querySelector("#sizing")
let size = [16, 16]

function initializeGrid(dims){
    let grid = document.createElement('div')
    grid.setAttribute("id", "grid")
    for (let i = 0; i < dims[0]; i++) {
        for (let j = 0; j < dims[1]; j++){
            let cell = document.createElement("div")
            cell.className = "cell"
            cell.addEventListener("mouseover", (event) => { event.target.style.background = "red" });
            cell.style.width = (640 / size[0]) + "px"
            cell.style.height = (640 / size[1]) + "px"
            grid.appendChild(cell)
        } 
    }
    document.body.appendChild(grid)
}

resetBtn.onclick = () => {
    let elements = document.querySelectorAll(".cell")
    elements.forEach((cell) => {
        cell.style.background = "lightseagreen"
    })
}

sizing.onclick = () => {
    let sizeX = prompt( "Enter desired x-coord grid size")
    while ( sizeX > 100 || sizeX < 0 ) {
        sizeX = prompt("Outside of bounds. Try Again")
    }
    let sizeY = prompt( "Enter desired y-coord grid size")
    while ( sizeY > 100 || sizeY < 0 ) {
        sizeY = prompt("Outside of bounds. Try Again")
    }
    
    size = [sizeX, sizeY]
    grid.remove()
    initializeGrid(size)
}

// Main

initializeGrid(size)