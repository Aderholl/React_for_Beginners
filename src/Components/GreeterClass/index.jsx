import { Component } from 'react';
import './GreeterClass.scss';

class GreeterClass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: ''
        };
    }

    componentDidMount() {
        console.log('@termino de montar con clase');
        const timer = setTimeout(() => {
            this.setState({
                name: 'David'
            });
            clearTimeout(timer);
        }, 12000);
    }

    shouldComponentUpdate(nextProps, nextState) {
        const arePropsEqual = this.props.className === nextProps.className;
        console.log('@this.state.name: ', this.state.name);
        console.log('@nextState.name: ', nextState.name);
        const areNamesEqual = this.state.name === nextState.name;
        return !arePropsEqual || !areNamesEqual;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log('@prevProps: ', prevProps);
        console.log('@prevState: ', prevState);
        console.log('@snapshot: ', snapshot);
    }
    
    componentWillUnmount() {
        console.log('@componentWillUnmount Class !!!!!!');
    }

    render() {
        return (
            <div className={this.props.className}>GreeterClass {this.state.name}</div>
        );
    }
}

export default GreeterClass;
