import React, { Component } from 'react';
import App from "../App";


class Counter extends Component {
    state = {
        count: 0,
        tags: ['tag1','tag2','tag3']
    };

      renderTags(){
          if(this.state.tags.length === 0) {return <p> No Tag</p>}
          return   <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;


      }


      clickHandler =() =>{
          this.setState({count: this.state.count +1})
      };



    render() {

        return (
            <div>

            <span   className= {this.getBadgeClasses()}>{this.formatCount()}</span>
            <button  onClick={this.clickHandler} className="btn btn-secondary btn-sm  ">Insert </button>
                {this.state.tags.length === 0 && " Please create a New Tag"}
            {this.renderTags()}
        </div>
    );
    }


    formatCount(){

        return this.state.count === 0 ? 'Zero' : this.state.count;
    }


    getBadgeClasses(){
        let classes = "badge m-2 badge-";
        classes +=(this.state.count === 0) ? "warning" : "primary";
        return classes
    }
}

export default Counter;
