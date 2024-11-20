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
        <div class="col-12 dropdown" style="border: 2px solid green;">
            <button id="container-btn">Container</button>
            <button id="placeholder-btn">Placeholder</button>
            <button id="qr-btn">Image</button>
        </div>
    </div>
    <div class="row" style="height: 80vh;">
        <div class="col-9" id="canvas-holder">
            <div id="konva-canvas" style="border: 2px solid yellow; height: 100%;"></div>
        </div>

        <div class="col-3 overflow-auto" style="border: 2px solid blue; height: 80vh">
            <!-- Sidebar Container -->
            <div class="row">
                <h3>Element: <span>container1</span></h3>
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
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="fill-div">
                <div class="row">
                    <div class="col-12 text-left">
                        <a class="btn btn-primary w-75" data-bs-toggle="collapse" href="#fill-container" role="button">Fill</a>
                    </div>
                </div>
                <div class="row">
                    <div class="col-12 mb-2">
                        <div class="collapse multi-collapse" id="fill-container">
                            <div class="card card-body">
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
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
                                Some placeholder content for the first collapse component of this multi-collapse example. This panel is hidden by default but revealed when the user activates the relevant trigger.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

</body>

</html>