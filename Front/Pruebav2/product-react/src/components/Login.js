import React from 'react';
import axios from 'axios';
import { Apiurl } from '../services/apirest';
import '../assetss/css/Login.css'
import logo from '../img/cemaco-495x200.jpeg';

class Login extends React.Component {
  state = {
    form: {
      usuario: '',
      clave: ''
    },
    error: false,
    errorMsg: ''
  };

  manejadorSubmit = e => {
    e.preventDefault();
    this.manejadorBoton();
  };

  manejadorChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };

  manejadorBoton = () => {
    const url = Apiurl + '/api/Credencial/Validar';
    axios.post(url, this.state.form)
      .then(response => {
        const token = response.data.token;
        localStorage.setItem('token', token);
        window.location.href = '/ShowProducts';
      })
      .catch(error => {
        this.setState({
          error: true,
          errorMsg: 'Usuario o contraseña incorrectos'
        });
      });
  };

  render() {
    return (
    <React.Fragment>
        <div className="wrapper fadeInDown">
          <div id="formContent">
            <div className="fadeIn first">
              <br/><br/>
              <img src={logo} width="250px" alt="User Icon"/>
            </div>
            <form onSubmit={this.manejadorSubmit}> 
              <input type="text" className="fadeIn second" name="usuario" placeholder="Usuario" onChange={this.manejadorChange}/>
              <input type="password" className="fadeIn third" name="clave" placeholder="Password" onChange={this.manejadorChange}/>
              <input type="submit" className="fadeIn fourth" value="Log In"/>
            </form>
            {this.state.error && <p>{this.state.errorMsg}</p>}
            <div id="formFooter">
              <h6>Sistema Administrador</h6>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Login;
