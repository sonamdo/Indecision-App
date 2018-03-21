class VisibilityApp extends React.Component {

    constructor(props){
        super(props);
        this.showButton = this.showButton.bind(this);
        this.state = {
            visibility : false
        }
    }

    showButton() {
        this.setState((prevState) => {
            return{
                visibility : !prevState.visibility
            }    
        })
    }

    render() {
        return(
        <div>    
            <h1>Visibility App</h1>
            <button onClick = {this.showButton}>{this.state.visibility ? 'Hide Details': 'Show Details'}</button>
            <p>{this.state.visibility ? 'The text is now visible' : null}</p>
            <p>Moving?</p>
        </div>
        )
    }
}

ReactDOM.render(<VisibilityApp/>,document.getElementById('app'))

// let counter = 0;

// const showButton = () =>{
//     if (counter === 0){counter++}else{counter--}
//     renderApp();
// }

// const appRoot = document.getElementById('app');

// const renderApp = () => {
//     const visibilityApp = (
//         <div>    
//             <h1>Visibility App</h1>
//             <button onClick = {showButton}>Show Details</button>
//             <p>{counter > 0 ? 'The text is now visible' : null}</p>
//             <p>Moving?</p>
//         </div>
//     );  
//     ReactDOM.render(visibilityApp, appRoot)
// }
