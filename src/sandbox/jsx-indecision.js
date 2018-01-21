const app = {
    title: 'Indecision App',
    subtitle: 'text goes here',
    options: []
};

const onFormSubmit = (e) => {
    e.preventDefault();
    console.log('hit onFormSubmit!');
    const option = e.target.elements.option.value;
    console.log(option);

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate();
};

const onRemoveAll = () => {
    app.options = [];
    renderTemplate();
};


const template = ( 
    <div>
        <h1>{app.title}</h1>
        {app.subtitle && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <p>{app.options.length}</p>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
    </div>
);

const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);

const numbers = [55, 101, 1000]

const renderTemplate = () => {
    const template = ( 
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>{app.options.length}</p>
            <button onClick={onMakeDecision}>What should I do?</button>
            <button onClick={onRemoveAll}>Remove All</button>
            <ol>
                {
                    app.options.map((option)=> <li key={option}>{option}</li>)
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};