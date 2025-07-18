export function handleUserChange() {
    setIsSubmitted(false);
  }

function Header() {
    return (
        <header>
            <nav id="navigation">
                <span><a href="index.html"><img src="images/joy-stick.png" id="logo" alt="logo" /></a></span>
                <span><h1 id="title-header">Game<br />Space</h1></span>
            </nav>
        </header>
    );
}

export default Header;