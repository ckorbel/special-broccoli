class Counter extends React.Component {
    constructor(props) {
        super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
        count: 0
    };
    }
    handleAddOne() {
        console.log('hit add one');
        this.setState((prevState)=> {
            return {
                count: prevState.count + 1
            }
        })
    }

    handleMinusOne() {
        console.log('hit minus one');
        this.setState((prevState)=> {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
        console.log('hit reset');
        this.setState(()=> {
            return {
                count: 0
            }
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>reset</button>
            </div>
        );
    }
}


// let count = 0;
// const addOne = () => {
//     count ++; 
//     renderCounterApp();
// };
// const minusOne = () => {
//     count --;
//     renderCounterApp();
// };
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// };


// const templateTwo = (
//     <div>
//         <h1>Count: {count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}>-1</button>
//         <button onClick={reset}>reset</button>
//     </div>
// );



// const renderCounterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>Count: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     );

//     ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();