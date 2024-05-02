import React from 'react';

const Footer = () => {
  return (

    <footer className="py-5">
      <header className="text-white py-4" style={{ backgroundColor: '#101e8d' }} >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-2 text-center">
              <i className="fas fa-shop fa-2x"></i>
                <p className="text-white d-block"> Tiendas</p></div>
                  <div className="col-md-2 text-center">
                    <i className="fas fa-envelope fa-2x"></i>
                      <a className="text-white d-block"> tusamigos@cemaco.com</a></div>
                        <div className="col-md-2 text-center">
                          <i className="fab fa-whatsapp fa-2x"></i>
                            <a className="text-white d-block"> Compra por WhatsApp</a></div>
                            <div className="col-md-2 text-center">
                              <i className="fas fa-address-book fa-2x"></i>
                                <a className="text-white d-block"> (502) 2499-9990</a> </div>
                                  <div className="col-md-2 text-center">
                                    <i className="fab fa-rocketchat fa-2x"></i>
                                      <a className="text-white d-block"> Chat en línea</a>
              </div>
            </div>
          </div>
        </header>
  <div className="container">
    <div className="d-flex justify-content-center">
        <div className="col-md-3 mb-3">
     
            <h5>Servicios</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/features" className="nav-link p-0 text-muted">Instalaciones</a></li>
                <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0 text-muted">Blog</a></li>
                <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0 text-muted">Servicio a empresas</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">Bodas</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">Actividades</a></li>
              </ul>

          </div>
          
         <div className="col-md-3 mb-3">
         
            <h5>Nuestros valores</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/features" className="nav-link p-0 text-muted">Sostenibilidad</a></li>
                <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0 text-muted">Garantia total</a></li>
                <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0 text-muted">Sistema B</a></li>
              </ul>
          </div>

         <div className="col-md-3 mb-3">

            <h5>Venta en línea</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/features" className="nav-link p-0 text-muted">Retirar en tienda</a></li>
                <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0 text-muted">Métodos de pago</a></li>
                <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0 text-muted">Preguntas frecuentes</a></li>
              </ul>
          </div>

         <div className="col-md-3 mb-3">
          
            <h5>Grupo Cemaco</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2"><a href="/features" className="nav-link p-0 text-muted">Únete a nuestro equipo</a></li>
                <li className="nav-item mb-2"><a href="/pricing" className="nav-link p-0 text-muted">Sobre nosotros</a></li>
                <li className="nav-item mb-2"><a href="/faqs" className="nav-link p-0 text-muted">Deseas ser proveedor</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">Juguetón</a></li>
                <li className="nav-item mb-2"><a href="/about" className="nav-link p-0 text-muted">Bebé Juguetón</a></li>

              </ul>
          </div>


         <div className="col-md-3 mb-3">
            <h5>Somos una empresa B</h5>
            <p>Estamos orgullosos de ser reconocidos por los más altos estándares de sostenibilidad social y ambiental.</p>
            <form>
            <h5>Suscríbete</h5>
            <p>Recibe ofertas, beneficios y noticias</p>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Suscríbete" aria-label="Email address" aria-describedby="button-addon2"/>
                <button className="btn btn-primary" type="button" id="button-addon2">SUSCRIBIRME</button>
              </div>
            </form>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <hr className="mt-0 mb-4"/>
          </div>
        </div>

        <div className="row">
        <div className="mb-0">
            <p className="d-inline mb-0 me-3">Privacidad</p>
            <p className="d-inline mb-0">Términos y condiciones</p>
            </div>
          <div className="col-md-12 d-flex justify-content-center align-items-center"> 
            <p className="mb-0">© 2022 Company, Inc. All rights reserved.</p>
            <ul className="list-unstyled d-flex mb-0">
              <li className="me-3"><a className="link-dark" href="#"><i className="bi bi-twitter"></i></a></li>
              <li className="me-3"><a className="link-dark" href="#"><i className="bi bi-instagram"></i></a></li>
              <li><a className="link-dark" href="#"><i className="bi bi-facebook"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
