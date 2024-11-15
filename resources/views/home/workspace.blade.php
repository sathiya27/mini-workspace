<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @vite(['resources/js/app.js', 'resources/js/workspace.js', 'resources/css/app.css'])
    <title>Workspace</title>
</head>

<body>

    <h1>Workspace</h1>
    <div class="row">
        <div class="col-12" style="border: 2px solid green;">
            <button id="container-btn">Container</button>
        </div>
    </div>
    <div class="row" style="height: 70vh;">
        <div class="col-9" id="canvas-holder">
            <div id="konva-canvas" style="border: 2px solid yellow; height: 100%;"></div>
        </div>

        <div class="col-3" style="border: 2px solid blue">
        </div>
    </div>

</body>

</html>