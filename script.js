const sketchContainer = document.querySelector('.container');
const clearSketch = document.querySelector('#clear');
const newSketch = document.querySelector('#new');
const changeColor = document.querySelector('#change_color');

const containerSize = parseInt(getComputedStyle(sketchContainer).width);

let tileWidthNumber = 16;

fillContainer(tileWidthNumber)

function fillContainer(tileNum) {
    const tileSize = containerSize / tileNum;
    const tileCount = tileNum * tileNum;

    for (let i = 0; i < tileCount; ++i) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;

        tile.addEventListener('mouseover', () => {
            tile.classList.add('colored_tile');
        });

        sketchContainer.appendChild(tile);
    }

    console.log('fill container ' + sketchContainer.childElementCount);
}

clearSketch.addEventListener('click', () => {
    for (let child of sketchContainer.children) 
        child.classList.remove('colored_tile');
})

newSketch.addEventListener('click', () => {
    tileWidthNumber = parseInt(prompt('Enter new sketch width. Max 100.'));
    // check if tileWidthnumber is number, otherwise set its value to 16
    if (tileWidthNumber > 100) tileWidthNumber = 100;
    if (tileWidthNumber < 1) tileWidthNumber = 16;
    console.log(`sketch size set to ${tileWidthNumber}`);
    removeOldChilds();
    fillContainer(tileWidthNumber);
})

changeColor.addEventListener('click', () => {
    let newColor = prompt('Enter color you want to paint, use hex notation like "#12a57c" please');
    console.log(newColor)
    // change style of colored_tile class
})

function removeOldChilds(){
    while(sketchContainer.firstChild)
        sketchContainer.removeChild(sketchContainer.lastChild);
}
