import React from 'react'
import NavBar from './NavBar';

class UnitCalculator extends React.Component {
    constructor(){
        super();
        this.state={
            power:null,
            time:null,
            units:null,
            displayPower:false
        }
    }
    handleChange = (event) =>{
        const name = event.target.name;
        this.setState({[name] : event.target.value});
        // console.log(this.state.power)
        // console.log(this.state.time)
    }
    handleSubmit = (event) =>{
        let powerW = this.state.power;
        let timeHr = this.state.time;
        let units = powerW*timeHr/1000;
        console.log(powerW)
        console.log(timeHr)
        console.log(units)
        this.setState({displayPower:true, units:units})
        event.preventDefault();
        // return(<p>Total Units consumed are {`${units}`}</p>);
        
    }
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <NavBar />
                    <p>You're in Unit calc.</p>
                    <form id="unitCalcForm" onSubmit= {this.handleSubmit}>
                        <label>Power (Watts)<input name="power" type="text" value={this.state.power} onChange={this.handleChange} style={{color:'black'}}/></label><br/>
                        <label>Time (Hours)<input name="time" type="text" value={this.state.time} onChange={this.handleChange} style={{color:'black'}}/></label><br/>
                        <input type="submit" value="Submit"  style={{color:'black'}}/>
                        {this.state.displayPower && <p> Total Units consumed are {`${this.state.units}`}</p>}
                    </form>
                    
                </header>
            </div>
        )
    }
}

export default UnitCalculator