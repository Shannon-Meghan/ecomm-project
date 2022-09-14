import {
    Navbar,
    NavbarBrand,
    Collapse,
    NavbarToggler,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { NavLink } from 'react-router-dom';

import Logo from '../app/assets/img/logo.png';
import { useState } from 'react';
import UserLoginForm from '../features/user/UserLoginForm';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <Navbar dark color='primary' sticky='top' expand='md'>
            <div class="container">
                <div class="row-12 align-items-center">
                    <NavbarBrand className='ms-5' href='/'>
                        <img src={Logo} alt='auto sales' className='float-start' />
                    </NavbarBrand>

                    <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
                    <Collapse isOpen={menuOpen} navbar>
                        <Nav className='ms-auto' navbar>
                            <NavItem>
                                <NavLink className='nav-link' to='/'>
                                    <i className='fa fa-home fa-lg' /> Home
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='nav-link' to='/directory'>
                                    <i className='fa fa-list fa-lg' /> Inventory
                                </NavLink>
                            </NavItem>
                        </Nav>
                        <UserLoginForm />
                    </Collapse>
                </div>
            </div>
        </Navbar>
    )
}

export default Header;