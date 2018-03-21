class Counter extends React.Component{

    constructor(props){
        super(props);
        this.handlePlus = this.handlePlus.bind(this);
        this.handleMinus = this.handleMinus.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count : 0
        };
    }

    componentDidMount(){
        const json = localStorage.getItem('count');
        const count = parseInt(json,10);
        console.log(count);

        if (!isNaN(count)){          
            this.setState(() => ({count}))
        }
    }
    componentDidUpdate(prevProp, prevState){
        if (prevState.count !== this.state.count){
        const json = this.state.count;
        localStorage.setItem('count', json);
        }
    }


    handlePlus(){
        this.setState((prevState) => {
            return {
                count: prevState.count +1
            }
        })
    }

    handleMinus(){
        this.setState((prevState) => {
            return {
                count: prevState.count -1
            }
        })
    }

    handleReset(){
        this.setState(() => {
            return {
                count: 0
            }
        })
    }

    render() {
        return(
            <div>
                <h1>Count: {this.state.count} </h1>
                <button onClick = {this.handlePlus}>+1</button>
                <button onClick = {this.handleMinus}>-1</button>
                <button onClick = {this.handleReset}>Reset</button>
            </div>
        )
    }
}

ReactDOM.render(<Counter count = {2}/>, document.getElementById('app'));


// const user = {
//     name : "Sonam",
//     age : 30,
//     location : "Toronto"
// }

// function getLocation(location){
//     if (location) {
//         return <p>Location: {location}</p>
//     } 
// }

// let count = 0;
// const addOne = () => {
//     count++;
//     renderCounterApp();
// }
// const minusOne = () => {
//     count--;
//     renderCounterApp();
// }
// const reset = () => {
//     count = 0;
//     renderCounterApp();
// }

// const renderCounterApp = () => {
//     const template2 = (
//         <div>
//           <h1>Count:{count}</h1>
//           <button onClick={addOne}>+1</button>
//           <button onClick={minusOne}>-1</button>
//           <button onClick={reset}>reset</button>
//         </div>
//       );

//     ReactDOM.render(template2, appRoot);
// };

// renderCounterApp(); 