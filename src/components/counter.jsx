import React, { Component } from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';

class Counter extends Component {
   

    state = { count: 0 }

    increment = () => {
        // this.setState({
        //     // count: this.state.count + 1
        // });
        this.props.dispatch({type: 'INCREMENT'});
    }

    decrement = () => {
        // this.setState({
        //     // count: this.state.count - 1
        // })
        this.props.dispatch({type: 'DECREMENT'});
    }

    
    render() {
        return(
            <div>
            <h1>Counter</h1>
            <div>
                <RaisedButton label="Primary" primary={true} style={style} onClick={this.decrement} />
                <span>{this.props.count}</span>
                <RaisedButton label="Primary" primary={true} style={style} onClick={this.increment} />
            </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

export default connect(mapStateToProps) (Counter);

const style = {
    margin: 12
}

