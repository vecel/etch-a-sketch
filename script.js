const sketchContainer = document.querySelector('.container');
const clearSketch = document.querySelector('#clear');
const newSketch = document.querySelector('#new');
const chnageColor = document.querySelector('#change_color');

const containerSize = parseInt(getComputedStyle(sketchContainer).width);

// let tileWidthNumber = 16;

const fillContainer = (tileNum = 16) => {
    const tileSize = containerSize / tileNum;
    const tileCount = tileNum * tileNum;

    for (let i = 0; i < tileCount; ++i) {
        const tile = document.createElement('div');
        tile.className = 'tile';
        tile.style.width = `${tileSize}px`;
        tile.style.height = `${tileSize}px`;

        tile.addEventListener('mouseenter', () => {
            tile.classList.add('colored_tile');
        });

        sketchContainer.appendChild(tile);
    }
}

fillContainer(50);