import React, {Component}   from 'react';
import {browserHistory}     from 'react-router';
import Model                from './NameModal.js'

class Directions extends Component {

  constructor(props){
    super(props);
    this.state = {
      clicked: false
    }
  }

  makeDirections(){
    let directions = this.props.directions;
    let dirToRender = "";
    for(let prop in directions){
      for(let info in directions[prop]){
        if(info === 'start_address'){

          dirToRender += "<div>From " + directions[prop][info] + "</div>";
        }
        if(info === 'end_address'){
          dirToRender += "<div> To " + directions[prop][info] + "</div>";
        }

        if(info === 'steps'){
          let steps = ""
          directions[prop][info].map(function(step, index){
              dirToRender += step.html_instructions;
          });
        }
      }
    }

    return (
      <div dangerouslySetInnerHTML ={{__html: dirToRender}}/>
    )
  }

  createRouteToSave(event){
    this.setState({clicked: true})

  }

  render() {
    let directions = this.props.directions;
    let length = directions.length;
    let sp = this.props.shortestPath
    let clicked = this.state.clicked;

    return (
      <div>
        {length > 0 ? this.makeDirections(): ""}
        <button onClick={(event)=> this.createRouteToSave(event)}>Save Route</button>
        {clicked ? <Model sp={sp}/> : ""}
      </div>
    );
  }

}

export default Directions;
