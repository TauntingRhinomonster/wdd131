function Menu() {
    return (
        <nav id="menu">
            <button aria-label="Home" onClick={() => console.log('Go Home!')}>Home</button>
            <button>Friends</button>
            <button>Chat</button>
        </nav>
    );
}

export default Menu;