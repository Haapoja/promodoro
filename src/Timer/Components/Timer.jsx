import React, {Component} from "react";
import Header from "../../TimerHeader/Components/TimerHeader";
import TimerDisplay from "../../TimerDisplay/Components/TimerDisplay";
import TimerButton from "../../TimerButton/Components/TimerButton";
import TimerConfig from "../../TimerConfig/Components/TimerConfig";
import moment from "moment";
import * as timerStates from "../../TimerStates";  //imports 3 consts 


class Timer extends Component {
constructor(){
    super();
this.state = {
    currentTime:moment.duration(0, "minutes"),
    baseTime: moment.duration(0, "minutes"),
    timerState:timerStates.NOT_SET, //default state for timer
    timer: null, //purpouse: can set timer in startTimer
};
this.setBaseTime=this.setBaseTime.bind(this);
this.startTimer=this.startTimer.bind(this);
this.reduceTimer=this.reduceTimer.bind(this);
this.stopTimer=this.stopTimer.bind(this);
}

setBaseTime(newBaseTime){
this.setState({
    baseTime:newBaseTime,
    currentTime:newBaseTime
});
}

startTimer(){
this.setState({
    timerState:timerStates.RUNNING,
    timer:setInterval(this.reduceTimer, 1000) //fire onces per second
});
}

stopTimer(){
    if (this.state.timer){
        clearInterval(this.state.timer);
    }
    this.setState({
        timerState: timerStates.NOT_SET,
        timer:null,
        currentTime:moment.duration(this.state.baseTime),
    })
}

reduceTimer(){
    if(this.state.currentTime.get("hours")===0 &&
this.state.currentTime.get("minutes")===0 &&
this.state.currentTime.get("seconds")===0){
    this.completeTimer();
    return;
}
const newTime= moment.duration(this.state.currentTime);
newTime.subtract(1, "second");

this.setState({
    currentTime: newTime,
});
}
completeTimer(){
    if (this.state.timer){
        clearInterval(this.state.timer);
    }
    this.setState({
        timerState: timerStates.COMPLETE,
        timer:null,
        
    })
}

render()
{
    return (
    <div className="container-fluid">
        <Header />
       <TimerDisplay currentTime={this.state.currentTime}
       timerState={this.state.timerState}
       />
       <TimerButton 
       startTimer={this.startTimer} 
       timerState={this.state.timerState}
       stopTimer={this.stopTimer}
       />
       {
           (this.state.timerState !== timerStates.RUNNING) //hides config when time is running
             &&
           (<TimerConfig 
    baseTime={this.state.baseTime}
    setBaseTime={this.setBaseTime}
    />)
       }
    </div>
    )
}

}


export default Timer;