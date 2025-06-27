import { Fragment } from "react";
import { Link, Routes } from "react-router-dom";

function Header() {
    return (
        <Fragment>
            <Link className="mr-4" to={"/"}>Home</Link>
            <Link to={"/following"}>Following</Link>
        </Fragment>
    );
}

export default Header;
