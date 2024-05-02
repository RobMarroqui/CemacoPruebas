import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/CemacoLogo.png'; 

const Header = () => {
    const logout = () => {
        localStorage.removeItem('token');
    };

    return (
        <header className="text-white py-4" style={{ backgroundColor: '#101e8d' }} >
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <img src={logo} alt="Cemaco Logo" /> 
                        <p className="lead">Sistema Administrador</p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <Link to="/">
                            <button className="btn btn-danger me-2" onClick={logout}>
                                Cerrar sesión
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
