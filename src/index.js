import React, {useState, component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import styles from './rect.css';
import * as serviceWorker from './serviceWorker';
import App from './App';
import interact from 'interactjs';

// hook example
function Example(){
    const [count, setCount] = useState(0);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

// rect component
class Rectangle extends React.Component {
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount() {

    }

    render(){
        const svgStyle = {
            width: '100%',
            height: '240px',
            backgroundColor: '#2e9'
        };
        return(
            <div>
                <svg width="200" height="200" backgroundColor="#2e9">
                    <rect width="50" height="50" fill="rgb(0,0,255)" 
                          strokeWidth="3" stroke="rgb(0,0,0)" />
                </svg>
            </div>
        );
    };
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
