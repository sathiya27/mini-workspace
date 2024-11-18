
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

var tr = new Konva.Transformer();
layer.add(tr);

function enableResizing(node){
    node.on('mousedown',()=>{
        tr.nodes([node]);
        layer.draw();
    });

    stage.on('click', (e) => {
        if (e.target === stage) {
            tr.nodes([]);
            layer.draw();
        }
    });
}

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

    enableResizing(container);

    layer.add(container);
});


//end generrate container button 

// generate placeholder button

const phBtn = document.querySelector('#placeholder-btn');

phBtn.addEventListener('click', (e)=>{
    const ph = new Konva.Text({
        x: stage.width()/2,
        y: stage.height()/2,
        text: 'Placeholder',
        fontSize: 24,
        fill: 'black',
        align: 'center',
        draggable: true,
        stroke: 'red',
        strokeWidth: 1,
    });

    enableResizing(ph);

    layer.add(ph);


});


//end generate placeholder button

//generate img button

const imgBtn = document.querySelector('#qr-btn');

imgBtn.addEventListener('click', ()=>{

    const img = new Image();
    img.src = "/images/qr.png";

    img.onload = function () {

        const aspectRatio = img.width / img.height;

        // Calculate new width and height while maintaining aspect ratio
        const newWidth = 200;  // Set a desired width
        const newHeight = newWidth / aspectRatio;  // Calculate height based on aspect ratio
        const imgs = new Konva.Image({
            x: stage.width()/2,
            y: stage.height()/2,
            draggable: true,
            image: img,
            width: newWidth,
            height: newHeight,
        });
    
        enableResizing(imgs);
    
        layer.add(imgs);
    };  
});

//end generate img button
