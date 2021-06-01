import Burger from './Burger'


function MenuContainer({burgers, addToCart}) {

    let arrayOfBurgers = burgers.map(burgerObj => {
        return <Burger key={burgerObj.id} 
            burger={burgerObj} 
            addToCart={addToCart}
        />
    })

    return (
        <div className="menu">
            <h2>Good Burger Menu</h2>
            <div id="burger-menu">
                {arrayOfBurgers}
            </div>
        </div>

    );
}


export default MenuContainer;
