import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Menu from './Menu';
import SimpleSlider from './SimpleSlider';
import PersonsListManager from './PersonsListManager'

class App extends Component {
    constructor(){
        super();
        this.state = {visibleProjectIndex: 1};
        this.projectToggler = this.projectToggler.bind(this);
    }
    
    projectToggler(e){
        this.setState({visibleProjectIndex: parseInt(e.target.dataset.index, 10)});
    }
    
    render(){
        return (
            <div>
                <Menu handler={this.projectToggler}/>
            {this.state.visibleProjectIndex === 0 && <PersonsListManager />}
            {this.state.visibleProjectIndex === 1 && <SimpleSlider />}
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));