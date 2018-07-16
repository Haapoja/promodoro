import React from "react";
import * as timerStates from "../../TimerStates";

const leftPad = (val) => { //so confused, adds 2 additional 0es on both sides of the clock?
if (val <10) return `0${val}`;

return `${val}`
}

const TimerDisplay = (props) => ( //statless functional component
<div>
<div classname="row-center-block">
{
(props.timerState===timerStates.COMPLETE)
&& <iframe className="center-block youtube-responsive-width" height="315" src="https://www.youtube.com/embed/EscGduAAPxU?autoplay=1&mute&start=30" allow="autoplay; encrypted-media" frameborder="0" allowfullscreen></iframe>
}
</div>
    <div className="row">
        <h2 className="center-block">
            {`${leftPad(props.currentTime.get("hours"))}:${leftPad(props.currentTime.get("minutes"))}:${leftPad(props.currentTime.get("seconds"))}`}

        </h2>
    </div>
</div>
);
export default TimerDisplay;