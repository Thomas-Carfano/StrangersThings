import { Link } from "react-router-dom";
import '../App.css'


const NavBar = () => {
    console.log("Nav Bar Main")

    return(
        <>
        <div id="Title-Nav">
            <h1>Strangers Things
            <Link to="./SignIn" title="Home" id="login">Sign In</Link>
            </h1>

            <section id="Nav-Links">
                <Link to="./" title="Home" className="test">Home</Link>
                <Link to="./Posts" title="Posts" className="test">Posts</Link>
                <Link to="./Sell" title="Sell" className="test">Sell</Link>
            </section>
        </div>
        </>
    )
};

export default NavBar