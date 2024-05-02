import React from 'react';
import logo from '../img/CemacoHome2IONew.png';
import banner from '../img/banner.png';
import { Card, Button } from 'react-bootstrap';
import Footer from './Footer';
import { Link } from 'react-router-dom';


const Logo = ({ src, alt }) => (
  <a className="navbar-brand">
    <img src={src} width="120px" height="31.53" alt={alt} />
  </a>
);

export default function Dashboard() {
  return (
    <div>
      <div style={{ backgroundColor: '#101e8d' }}>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
          <div style={{ backgroundColor: '#101e8d', padding: '10px' }} className="container-fluid">
            <Logo src={logo} alt="Logo Cemaco" />
            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
              <div className="input-group">
                <input type="text" className="form-control" aria-label="Text input with segmented dropdown button" />
                <Link to="/login">
                  <button type="button" className="btn btn-primary" data-mdb-ripple-init>Login</button>
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><a className="dropdown-item">Action</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarCenteredExample"
            aria-controls="navbarCenteredExample"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarCenteredExample">
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">Tecnología</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Muebles</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Novedades</a>
              </li>
              <li className="nav-item">
                <a className="nav-link">Todo en ferretería</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div>
        <h1 className='text-center'>Cocina y mesa</h1>
      </div>
      <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={banner} alt="First slide" />
          </div>
        </div>
      </div>
      <br/>
      <div className="d-flex justify-content-around flex-wrap">
<Card style={{ width: '18rem' }}>
      <a href="https://bitly.cx/FD7" target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src="https://bitly.cx/FD7" alt="Card image cap" /></a>
          <Card.Body>
            <Card.Title>Martillo</Card.Title>
              <Card.Text> Martillo de 16 oz con mango de madera	</Card.Text>
                <Card.Text>Q75.88</Card.Text>
                  <Button variant="primary">AGREGAR</Button>
          </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
       <a href="https://bitly.cx/D1qhJ" target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src="https://bitly.cx/D1qhJ" alt="Card image cap" /></a>
          <Card.Body>
            <Card.Title>Destornillador Phillips</Card.Title>
              <Card.Text>Destornillador de punta Phillips, 6 pulgadas</Card.Text>
                <Card.Text>Q5.49</Card.Text>
                  <Button variant="primary">AGREGAR</Button>
          </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
       <a href="https://bitly.cx/MSZM" target="_blank" rel="noopener noreferrer">
         <Card.Img variant="top" src="https://bitly.cx/MSZM" alt="Card image cap" /></a>
          <Card.Body>
             <Card.Title>Cinta Métrica</Card.Title>
               <Card.Text>Cinta métrica de 25 pies con bloqueo automático</Card.Text>
                <Card.Text>Q9.99</Card.Text>
                  <Button variant="primary">AGREGAR</Button>
          </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
      <a href="https://bitly.cx/ytsCr" target="_blank" rel="noopener noreferrer">
        <Card.Img variant="top" src="https://bitly.cx/ytsCr" alt="Card image cap" /></a>
          <Card.Body>
            <Card.Title>Alicates de Corte</Card.Title>
              <Card.Text>Alicates de corte diagonal de 6 pulgadas</Card.Text>
                <Card.Text>Q8.99</Card.Text>
                  <Button variant="primary">AGREGAR</Button>
     </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
       <a href="https://bitly.cx/zkkRZ" target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src="https://bitly.cx/zkkRZ" alt="Card image cap" /></a>
            <Card.Body>
              <Card.Title>Broca de Titanio</Card.Title>
                <Card.Text>Broca de titanio de 1/4 pulgadas, 6 piezas</Card.Text>
                 <Card.Text>Q14.99</Card.Text>
                  <Button variant="primary">AGREGAR</Button>
       </Card.Body>
</Card>
<Card style={{ width: '18rem' }}>
      <a href="https://bitly.cx/KaaN" target="_blank" rel="noopener noreferrer">
          <Card.Img variant="top" src="https://bitly.cx/KaaN" alt="Card image cap" /></a>
            <Card.Body>
              <Card.Title>Clavos Galvanizados</Card.Title>
                <Card.Text>Clavos galvanizados para carpintería, 2 pulgadas</Card.Text>
                  <Card.Text>Q7.49</Card.Text>
                    <Button variant="primary">AGREGAR</Button>
       </Card.Body>
</Card>

        <Footer/>
      </div>
    </div>
  );
}
