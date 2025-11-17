function App() {

    const products  = [
        {id : 1, name : "Matcha", preis : 9, description: "Green", isLegal : true},
        {id : 2, name : "Maka", preis : 29, description: "lila", isLegal : false},
        {id : 3, name : "Mariuana", preis : 15, description: "Gr**n", isLegal : false},
        {id : 1, name : "MDMA", preis : 50, description: "Rainbow", isLegal : false}
    ];

    return (
        <>
            <ListItem items={products} showLegal={true}/>
            <ListItem items={products} showLegal={false}/>
        </>
    )
}


function ListItem(props) {

    const showLegal = props.showLegal;

    // First Filter
    const filteredItems = props.items.filter(
        item => item.isLegal === showLegal);

    // Then show result
    return filteredItems.length === 0
        ? <p>No products available</p>
        : <ul>
            {filteredItems.map(item =>
                <li>{item.name} - {item.preis}</li>)}
        </ul>;
}

export default ListItem;