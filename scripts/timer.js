class TimerLayer extends CanvasLayer {
    constructor() {
        super();
        console.log('Timer/Stopwatch | Loaded into canvas');
        const isActive = false;
    }

    setButtons() {
        timerLayer.newButtons = {
            name: 'timer',
            title: 'CONTROLS.Timer',
            layer: 'TimerLayer',
            icon: 'fa fa-hourglass-half',
            tools: [
                {
                    icon: "fa fa-plus",
                    name: "create",
                    title: "CONTROLS.TimerCreate",
                    onClick: TimerLayer.newTimer
                },
                {
                    icon: "fa fa-hourglass-start",
                    name: "view",
                    title: "CONTROLS.TimerSelect",
                    onClick: TimerLayer.viewTimers
                },
            ],
            activeTool: 'create',
        };
    }

    /*
    Adds listeners to the newly added buttons
     */
    _addListeners() {
        canvas.stage.addListener('mousedown', TimerLayer.addIconListeners);
    }


    /*
    Open a window to create a timer
     */
    newTimer() {
        console.log("timering");
    }

    /*
    Show all current timers
     */
    viewTimer() {

    }

    /*
      Hook to initialize layer with buttons and controls for buttons
    */
    hookButtons() {
        Hooks.on('getSceneControlButtons', (controls) => {
            console.log(controls)
            if (game.user.data.role == 4) {
                /* When buttons are clicked, Foundry looks for the layer among the stage's children
                   Canvas Layer's activate() is then called
                */
                canvas.stage.addChild(timerLayer);
                controls.push(timerLayer.newButtons);
            }
        });
    }
}


const timerLayer = new TimerLayer();
timerLayer.setButtons();
timerLayer.hookButtons();
