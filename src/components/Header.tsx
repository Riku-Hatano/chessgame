import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <Link to="/">home</Link>
            <Link to="/game">game</Link>
        </>
    )
}

export default Header;