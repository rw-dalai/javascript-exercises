
// Component Hierarchie:
// App
//  ├─ ListComponent
//  └─ ButtonComponent

// What is a React Component?
// - A function that returns JSX (via return statement)
// - Can accept input via "props" (properties)
// - Can manage its own state (via useState hook, not shown here)

// What is JSX?
// - JavaScript XML
// - Allows to write HTML-like code in JavaScript

// What are props?
// - Passed as an object to the component function (its just a object)
// - Used to customize the component's behavior and appearance



function App() {

    const items = [
        { id: 1, name: "Item 1" },
        { id: 2, name: "Item 2" }
    ];

    function handleClick() {
        console.log("Meine Button Komponente wurde geklickt");
    }

    // Render App component
    return (
        <div>
            <h1>React Demo</h1>
            <ListComponent items={items} />
            <ButtonComponent onClick={handleClick} />
        </div>
    );
}

// function ListComponent({ items = [] }) { // Destructuring Variante + Default Wert
function ListComponent(props) {
    // Items is an array passed via props
    const items = props.items;

    // Render empty list message
    if (items.length === 0) {
        return <p>Die Liste ist leer.</p>;
    }

    // Render item list
    return (
        <ul>
            {items.map(item => (
                <li key={item.id}>{item.name}</li>
            ))}
        </ul>
    );
}

// function ButtonComponent({ onClick }) { // Destructuring Variante
function ButtonComponent(props) {
    // Callback is a function passed via props
    const onClick = props.onClick;

    // Render button
    return (
        <button onClick={onClick}>
            Klicke mich
        </button>
    );
}