console.log("App.js is running");

//JSX - Javascript XML

const app = {
    title : "Indecision App",
    subtitle : "Here is the subtitle",
    options : []
}

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = "";
        renderApp()
    }
}

const removeAll = () => {
    app.options = [];
    renderApp();
}

const onMakeDecision = () => {
    const randomNumb = Math.floor(Math.random()*app.options.length);
    const option = app.options[randomNumb];
    alert(option);
};  

const appRoot = document.getElementById('app');

const numbers = [55, 101, 1000]

const renderApp = () =>{
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && app.subtitle}
            <p>{app.options.length > 0 ? 'Here are your options' : 'You have no options'}</p>
            <button disabled = {app.options.length === 0}onClick = {onMakeDecision}>What should I do?</button>
            <button onClick = {removeAll}>Remove All</button>
            {
                numbers.map((number) => {
                    return <p key = {number}>Number: {number}</p>
                })
            }
            <ol>
            {
                app.options.map((option) => <li key = {option}>{option}</li>)
            }
            </ol>
            <form onSubmit = {onFormSubmit}>
                <input type = "text" name = "option"/>
                <button>Add Option</button>
            </form>
        </div>
    );
    
    ReactDOM.render(template, appRoot);
};

renderApp();
