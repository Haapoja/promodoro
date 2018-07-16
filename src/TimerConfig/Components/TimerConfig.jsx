import React, { Component } from "react";
import moment from "moment";
//this was a statless functional component before
class TimerConfig extends Component { //now its a class component, requires "this" be added infront of thigns, ex: props.baseTime= this.props.baseTime
    constructor() {                     //otherwise "props is not defined
        super();

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const newBaseTime = this.props.baseTime

        if (e.target.id === "hours") newBaseTime.subtract(newBaseTime.get("hours"), "hours").add(parseInt(e.target.value, 10), "hours");
        if (e.target.id === "minutes") newBaseTime.subtract(newBaseTime.get("minutes"), "minutes").add(parseInt(e.target.value, 10), "minutes");
        if (e.target.id === "seconds") newBaseTime.subtract(newBaseTime.get("seconds"), "seconds").add(parseInt(e.target.value, 10), "seconds");

        this.props.setBaseTime(newBaseTime);
    }

    render(props) {


        return (
            <div>
                <div className="row">
                    <h2 className="text-primary">set timer </h2>
                </div>
                <div className="row control-row">
                    <div className="form-group">
                        <div className="col-md-6 ">
                            <label htmlFor="hours">hours<span className="invisible">22</span>     </label>
                        </div>
                        <div className="col-sm-6">
                            <input id="hours" className="form-control" type="number"
                                defaultValue={this.props.baseTime.get("hours")}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row control-row">
                    <div className="form-group">
                        <div className="col-sm-6 ">
                            <label htmlFor="minutes">minutes </label>
                        </div>
                        <div className="col-sm-6">
                            <input id="minutes" className="form-control" type="number"
                                defaultValue={this.props.baseTime.get("minutes")}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
                <div className="row control-row">
                    <div className="form-group">
                        <div className="col-sm-6">
                            <label htmlFor="seconds">seconds </label>
                        </div>
                        <div className="col-sm-6">
                            <input id="seconds" className="form-control" type="number"
                                defaultValue={this.props.baseTime.get("seconds")}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default TimerConfig;