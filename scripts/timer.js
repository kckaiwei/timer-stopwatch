class TimerLayer extends CanvasLayer {
    constructor() {
        super();
        console.log('Timer/Stopwatch | Loaded into canvas');
        const isActive = false;
    }

    setButtons() {
        timerLayer.newButtons = {
            activeTool: 'Create Timer',
            name: 'timer',
            icon: 'fa fa-hourglass-half',
            layer: 'TimerLayer',
            title: 'Timer Controls',
            tools: [
                {
                    icon: "fas fas fa-square",
                    name: "Create Timer",
                    title: "Configure the grid by drawing a square",
                    onClick: TimerLayer.newTimer
                },
            ],
        };
    }

    /*
    Adds listeners to the newly added buttons
     */
    _addListeners() {
        canvas.stage.addListener('mousedown', TimerLayer.addIconListeners);
    }

    /*
    Adds listeners to the Icons via a switch method
    Not actually sure this is the best way to do it, copying scaleGrid's methods for now
     */
    addIconListeners(e) {
        console.log(e)
    }


    newTimer() {
        console.log("timering")
    }

    setUpControls() {
        let style = new PIXI.TextStyle({      //this  here defines the style of  the text being displayed.  Can be changed later  at runtime if needed.
            dropShadow: true,
            dropShadowDistance: 1,
            fill: "#4bf02a",
            fontSize: 35,
            lineJoin: "round",
            strokeThickness: 4
        });

        TimerLayer.testControl = new PIXI.Text("this is test", style);
        canvas.controls.addChild(TimerLayer.testControl);
    }

    /*
      Hook to initialize layer with buttons and controls for buttons
    */
    hookButtons() {
        Hooks.on('getSceneControlButtons', (controls) => {
            if (game.user.data.role == 4) {
                controls.push(timerLayer.newButtons);
                timerLayer.setUpControls();
            }
        });
    }
}


const timerLayer = new TimerLayer();
timerLayer.setButtons();
timerLayer.hookButtons();
