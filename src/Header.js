import { Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import './Header.css'

function Header() {
    const user = JSON.parse(localStorage.getItem("user-info"));
    console.warn(user)
    const history = useHistory()
    function logout()
    {
        localStorage.clear();
        history.push("./register");
    } 
    return (
        <div className="header">
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="mr-auto nav_bar_wrapper">
                    {
                        localStorage.getItem("user-info") ?
                            <>
                                <Link to="/">Product List</Link>
                                <Link to="/add">Add Product</Link>
                                <Link to="/update">Update Product</Link>
                            </>
                            :
                            <>
                                <Link to="/login">Login</Link>
                                <Link to="/register">Register</Link>
                            </>
                    }
                </Nav>
                {
                localStorage.getItem("user-info") ?
                <Nav>
                    <NavDropdown title={user && user.name}>
                        <NavDropdown.Item onClick={logout}>LogOut</NavDropdown.Item>
                        <NavDropdown.Item>User Profile</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                : null
                }
            </Navbar>
        </div>
    )
}

export default Header;