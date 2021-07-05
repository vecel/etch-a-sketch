const sketchContainer = document.querySelector('.container');
const clearSketch = document.querySelector('#clear');
const newSketch = document.querySelector('#new');
const changeColor = document.querySelector('#change_color');
const tileColor = document.querySelector('body');

const containerSize = parseInt(getComputedStyle(sketchContainer).width);

let tileWidthNumber = 16;
/*
There are some comments about 'colore_tile class' in the code, it turned out that having pencilColor
variable is better solution, because it allows to have multiple colors on a sketch and 
also manage invalid color - if such color occurs it doesn't make any changes
*/
let pencilColor = '#000000';
let draw = true;

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
            // works while managing colored_tile class
            // tile.classList.add('colored_tile');
            if (draw)
                tile.style.backgroundColor = pencilColor;
        });

        sketchContainer.appendChild(tile);
    }

    console.log('fill container ' + sketchContainer.childElementCount);
}

clearSketch.addEventListener('click', () => {
    /* 
    works while managing colored_tile class 
    */
   /*
    for (let child of sketchContainer.children) 
        child.classList.remove('colored_tile');
    */

    for (let child of sketchContainer.children)
        child.style.backgroundColor = 'white';
})

newSketch.addEventListener('click', () => {
    tileWidthNumber = parseInt(prompt('Enter new sketch width. Max 100.'));
    // to do: check if tileWidthnumber is number, otherwise set its value to 16
    
    if (tileWidthNumber > 100) tileWidthNumber = 100;
    if (tileWidthNumber < 1) tileWidthNumber = 16;
    if (typeof tileWidthNumber != 'number') tileWidthNumber = 16;

    console.log(`sketch size set to ${tileWidthNumber}`);
    removeOldChilds();
    fillContainer(tileWidthNumber);
})

changeColor.addEventListener('input', () => {
    pencilColor = changeColor.value;
    console.log(pencilColor);
    // draw = true;
})

// changeColor.addEventListener('click', () => {
//     let newColor = prompt('Enter color you want to paint, use hex notation like "#12a57c" please');
//     console.log(newColor)

//     // check wheter color is valid - not supported for the moment

//     // works while managing colored_tile class
//     // tileColor.style.setProperty('--tileColor', newColor);

//     pencilColor = newColor;
// })

function removeOldChilds(){
    while(sketchContainer.firstChild)
        sketchContainer.removeChild(sketchContainer.lastChild);
}
