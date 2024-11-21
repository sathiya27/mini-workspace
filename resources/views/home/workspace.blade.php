<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    @vite(['resources/js/app.js', 'resources/js/workspace.js', 'resources/css/app.css'])
    <title>Workspace</title>
</head>

<body>

    <h1 class="text-center">Workspace</h1>
    <div class="row">
        <div class="col-12 d-flex gap-2 justify-content-center py-2 dropdown" style="border: 2px solid green;">
            <button class="btn btn-success" id="container-btn">Container</button>
            <button class="btn btn-success" id="placeholder-btn">Placeholder</button>
            <button class="btn btn-success" id="qr-btn">Image</button>
        </div>
    </div>
    <div class="row" style="height: 80vh;">
        <div class="col-9" id="canvas-holder">
            <div id="konva-canvas" style="border: 2px solid yellow; height: 100%;"></div>
        </div>

        <div class="col-3 overflow-auto" style="border: 2px solid blue; height: 80vh">
            <!-- Sidebar Container -->
            <div class="row text-center">
                <h3 style="padding-left: 0;"><span id="selected-container"></span></h3>
            </div>
            <div class="font-div">
                <div class="row">
                    <div class="col-12 text-left">
                        <a class="btn btn-primary w-75" data-bs-toggle="collapse" href="#font-container" role="button">Fonts</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-2">
                        <div class="collapse multi-collapse" id="font-container">
                            <div class="card card-body">
                                <ul style="list-style: none;">
                                    <li>Font Family:
                                        <select id="fontPicker">
                                            <option value="Arial">Arial</option>
                                            <option value="Courier New">Courier New</option>
                                            <option value="Times New Roman">Times New Roman</option>
                                        </select>
                                    </li>
                                    <li>Font Size: <input type="range" id="fontSizePicker" value="20" min="5" max="100" step="1"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fill-div">
                <div class="row">
                    <div class="col-12">
                        <a class="btn btn-primary w-75" data-bs-toggle="collapse" href="#fill-container" role="button">Fill</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-2">
                        <div class="collapse multi-collapse" id="fill-container">
                            <div class="card card-body">
                                <input name="color-picker" id="colorPicker" type="color" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sizing-div">
                <div class="row">
                    <div class="col-12 text-left mb-2">
                        <a class="btn btn-primary w-75" data-bs-toggle="collapse" href="#sizing-container" role="button">
                            Sizing
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12">
                        <div class="collapse multi-collapse" id="sizing-container">
                            <div class="card card-body">
                                <ul style="list-style: none;">
                                    <li>Width: <span id="container-width">-</span> px</li>
                                    <li>Height: <span id="container-height">-</span> px</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="position-div">
                <div class="row">
                    <div class="col-12 text-left">
                        <a class="btn btn-primary w-75" data-bs-toggle="collapse" href="#position-container" role="button">Positioning</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-2">
                        <div class="collapse multi-collapse" id="position-container">
                            <div class="card card-body">
                                <ul style="list-style: none;">
                                    <li>X-position: <span id="container-x"></span></li>
                                    <li>Y-position: <span id="container-y"></span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>

</body>

</html>