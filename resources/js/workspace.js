
//canvas set up

const divWidth = document.querySelector('#konva-canvas').clientWidth;
const divHeight = document.querySelector('#konva-canvas').clientHeight;

const stage = new Konva.Stage({
    container: 'konva-canvas',
    width: divWidth,
    height: divHeight,
});

const layer = new Konva.Layer();

stage.add(layer);

// resize the stage when window is resized
window.addEventListener('resize', function () {
    const divWidth = document.querySelector('#konva-canvas').clientWidth;
    const divHeight = document.querySelector('#konva-canvas').clientHeight;

    stage.width(divWidth);
    stage.height(divHeight);
    stage.batchDraw();
});

// canvas set up end

// generate container button
const containerBtn = document.querySelector('#container-btn');

containerBtn.addEventListener('click', (e)=>{
    const container = new Konva.Rect({
        x: stage.width()/2,
        y: stage.height()/2,
        width: 200,
        height: 100,
        fill: 'green',
        stroke: 'black',
        strokeWidth: 4,
        draggable: true,
    });

    console.log(document.querySelector('#canvas-holder').clientWidth);

    layer.add(container);
});


//end generrate container button 
