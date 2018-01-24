//render, constructor, handleToggleV
//v -> false

class Visibility extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visible: false 
        }
    }

    handleToggle() {
        console.log('hit handle toggle');
        this.setState((prevState)=> {
            return {
                visible: !prevState.visible
            }
        })
    }


    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>
                    {this.state.visible ? 'Hide details' : 'Show details'}
                </button>
                {this.state.visible && (
                    <div>
                        <p>here are some details</p>
                    </div>
                )}
            </div>
        );
    }
}

ReactDOM.render(<Visibility />, document.getElementById('app'))

// let visibility = false;

// const toggle = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={toggle}>
//                 {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             {visibility && (
//                 <div>
//                     <p>Hey these are details</p>
//                 </div>
//             )}
//         </div>
//     );
//     ReactDOM.render(jsx, document.getElementById('app'))
// };

// render();