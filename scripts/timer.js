class TimerLayer extends CanvasLayer {
    constructor() {
        super();
        console.log('Timer/Stopwatch | Loaded into canvas');
        const isActive = false;
    }

    setButtons() {
        /*
        Default button behavior is as an "tool", which uses this behavior
          tool.onClick()
        Adding `button: true` changes behavior to be a button, which we want in this instance
          tool.onClick()
        Setting `toggle: true` changes it to a toggle, which Foundry uses this behavior
          tool.onClick(tool.active)
         */
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
                    onClick: () => timerLayer.newTimer(),
                    button: true
                },
                {
                    icon: "fa fa-hourglass-start",
                    name: "show",
                    title: "CONTROLS.TimerShow",
                    onClick: () => timerLayer.showTimers(),
                    button: true
                },
            ],
            activeTool: 'create',
        };
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
    showTimers() {
        console.log("this shows timers");
    }

    /*
      Hook to initialize layer with buttons and controls for buttons
    */
    hookButtons() {
        Hooks.on('getSceneControlButtons', (controls) => {
            /* getSceneControlButtons is called on any button click on the side toolbar
               Without deactivating it first, timerLayer will always be counted as "active"
               And can never be selected
            */
            timerLayer.deactivate();
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
