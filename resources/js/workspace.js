
//canvas set up and project intialization

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

//Current selected node
let currentNode = null;

//color picker input, change color of container
const colorPicker = document.querySelector('#colorPicker');
let selectedColor = null;
colorPicker.addEventListener('input', () =>{
    selectedColor = colorPicker.value;
    if(currentNode && (currentNode.getClassName() === 'Rect' || currentNode.getClassName() === 'Text')){
        currentNode.fill(selectedColor);
    }
});

//FontPicker input

const fontPicker = document.querySelector('#fontPicker');
let selectedFont = null;
fontPicker.addEventListener('input', () =>{
    if(currentNode && currentNode.getClassName() === 'Text'){
        selectedFont = fontPicker.value;
        currentNode.fontFamily(selectedFont);
        updateResizeContainer(currentNode);
        tr.nodes([currentNode]);
    }
});


////FontSizePicker input
const fontSizePicker = document.querySelector('#fontSizePicker');
let selectedFontSize = null;
fontSizePicker.addEventListener('input', () =>{
    if(currentNode && currentNode.getClassName() === 'Text'){
        selectedFontSize = parseInt(fontSizePicker.value);
        currentNode.fontSize(selectedFontSize);
        updateResizeContainer(currentNode);
        tr.nodes([currentNode]);
    }
});



//getting needed containers for rendering
const elementInfo = document.querySelector('#selected-container');
const xContainerPos = document.querySelector('#container-x');
const yContainerPos = document.querySelector('#container-y');
const widthContainer = document.querySelector('#container-width');
const heightContainer = document.querySelector('#container-height');

stage.on('click', (e) => {
    if (e.target === stage) {
        tr.nodes([]);
        layer.draw();
    }
});

function enableNodeListeners(node){
    node.on('mousedown',()=>{

        console.log(node);

        tr.nodes([node]);
        layer.draw();


        // get and assign currently selected container on span tag
        elementInfo.innerHTML = node.id();

        updateResizeContainer(node);

        currentNode = node;

        switch(node.getClassName()){
            case'Rect':
                colorPicker.value = node.fill();
                break;
            case 'Text':
                colorPicker.value = node.fill();
                fontPicker.value = node.fontFamily();
                fontSizePicker.value = node.fontSize();
                break;
            default:
        }
    });

    node.on('dragmove', ()=>{
        updateResizeContainer(node);
    });

    node.on('transform', ()=>{
        updateResizeContainer(node);

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

// canvas set up and project initializaton end 






// generate container button
const containerBtn = document.querySelector('#container-btn');
let containerCounter = 0;

containerBtn.addEventListener('click', (e)=>{
    containerCounter++;
    const container = new Konva.Rect({
        id: 'container-'+ containerCounter,
        x: stage.width()/2,
        y: stage.height()/2,
        width: 200,
        height: 100,
        fill: '#b80de7',
        stroke: '#000000',
        strokeWidth: 4,
        draggable: true,
    });

    enableNodeListeners(container);

    layer.add(container);
});


//end generrate container button 

// generate placeholder button

const phBtn = document.querySelector('#placeholder-btn');
let phCounter = 0;

phBtn.addEventListener('click', (e)=>{
    phCounter++;
    const ph = new Konva.Text({
        id: 'ph-'+ phCounter,
        x: stage.width()/2,
        y: stage.height()/2,
        text: 'Placeholder',
        fontSize: 24,
        fontFamily: 'Arial',
        fill: '#008000',
        align: 'center',
        draggable: true,
    });

    enableNodeListeners(ph);

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
            id: 'qr-image',
            x: stage.width()/2,
            y: stage.height()/2,
            draggable: true,
            image: img,
            width: newWidth,
            height: newHeight,
        });
    
        enableNodeListeners(imgs);
    
        layer.add(imgs);
    };  
});

//end generate img button

// function to resize container and update details based on changes

function updateResizeContainer(node){
    //change span information which shows the position
    xContainerPos.innerHTML = (node.x()).toFixed(2);
    yContainerPos.innerHTML = (node.y()).toFixed(2);

    //change span information which shows the sizing
    widthContainer.innerHTML = (node.width() * node.scaleX()).toFixed(2);
    heightContainer.innerHTML = (node.height() * node.scaleY()).toFixed(2);
}


