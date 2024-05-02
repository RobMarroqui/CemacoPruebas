import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { show_alerta } from '../functions';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import Footer from './Footer';



const ShowProducts = () => {
    const url = 'http://localhost:5127/api/Producto/Lista';
    const [products, setProducts] = useState([]);
    const [idProducto, setIdProducto] = useState('');
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');
    const [sku, setSku] = useState('');
    const [invetario, setinvetario] = useState('');
    const [imagen, setImagen] = useState('');
    const [operation, setOperation] = useState(1);
    const [title, setTitle] = useState('');

    useEffect(() => {
        getProducts();
    }, []);

    const reloadPage = () => {
        window.location.reload();
    };

    const getProducts = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No se encontró el token JWT en el almacenamiento local');
                return;
            }
    
            const respuesta = await axios.get(url, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (respuesta.data && Array.isArray(respuesta.data.response)) {
                setProducts(respuesta.data.response);
            } else {
                console.error('La respuesta de la API no contiene un array de productos:', respuesta.data);
            }
        } catch (error) {
            console.error('Error al obtener los productos:', error);
        }
    };

    const openModal = (op, product) => {
        if (product) {
            setIdProducto(product.idProducto);
            setNombre(product.nombre);
            setDescripcion(product.descripcion);
            setPrecio(product.precio);
            setSku(product.sku);
            setinvetario(product.invetario);
            setImagen(product.imagen);
            setOperation(op);

            if (op === 1) {
                setTitle('Registrar Producto');
            } else if (op === 2) {
                setTitle('Editar Producto');
            }

            window.setTimeout(function () {
                document.getElementById('nombre').focus();
            }, 500);
        }
    };

    const validar = () => {
        var parametros;
        var metodo;
        if (nombre.trim() === '') {
            show_alerta('Escríbe el nombre del producto', 'warning');
        } else if (descripcion.trim() === '') {
            show_alerta('Agrega una descripción del producto', 'warning');
        } else if (precio.trim() === '') {
            show_alerta('Escríbe el precio del producto', 'warning');
        } else if (sku.trim() === '') {
            show_alerta('No olvides el SKU', 'warning');
        } else if (invetario.trim() === '') {
            show_alerta('Falta total de inventario', 'warning');
        } else if (imagen.trim() === '') {
            show_alerta('Falta adjuntar el enlace de la imagen', 'warning');
        } else {
            if (operation === 1) {
                parametros = { nombre: nombre.trim(), descripcion: descripcion.trim(), precio: precio.trim(), sku: sku.trim(), invetario: invetario.trim(), imagen: imagen };
                metodo = 'POST';
            } else {
                parametros = { idProducto: idProducto, nombre: nombre.trim(), descripcion: descripcion.trim(), precio: precio.trim(), sku: sku.trim(), invetario: invetario.trim(), imagen: imagen };
                metodo = 'PUT';
            }
            enviarSolicitud(metodo, parametros);
        }
    };

    const enviarSolicitud = async (metodo, parametros) => {
        let endpoint;
        if (metodo === 'POST') {
            endpoint = 'http://localhost:5127/api/producto/guardar';
        } else if (metodo === 'PUT') {
            endpoint = 'http://localhost:5127/api/producto/Editar';
        }
    
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No se encontró el token JWT en el almacenamiento local');
                return;
            }
    
            const confirmacion = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¿Quieres continuar con la acción?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Continuar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            });
    
            if (confirmacion.isConfirmed) {
                const respuesta = await axios({
                    method: metodo,
                    url: endpoint,
                    data: parametros,
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                const tipo = respuesta.data[0];
                const msj = respuesta.data[1];
    
                if (tipo === 'success') {
                    show_alerta(msj, tipo);
                    document.getElementById('btncCerrar').click();
                    getProducts();
                    reloadPage();
                } else {
                    show_alerta(msj, tipo);
                }
            }
        } catch (error) {
            show_alerta('Error en la solicitud', 'error');
            console.error(error);
        }
    };

    const confirmarEliminacion = async (idProducto) => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                console.error('No se encontró el token JWT en el almacenamiento local');
                return;
            }
    
            const confirmacion = await Swal.fire({
                title: '¿Estás seguro?',
                text: '¿Quieres eliminar este producto?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Continuar',
                cancelButtonText: 'Cancelar',
                reverseButtons: true
            });
    
            if (confirmacion.isConfirmed) {
                const respuesta = await axios.delete(`http://localhost:5127/api/Producto/Eliminar/${idProducto}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
    
                const tipo = respuesta.data[0];
                const msj = respuesta.data[1];
    
                if (tipo === 'success') {
                    show_alerta(msj, tipo);
                    getProducts();
                } else {
                    show_alerta(msj, tipo);
                }
            }
        } catch (error) {
            show_alerta('Error en la solicitud', 'error');
            console.error(error);
        }
    };

    return (
        <div className='App'>
            <Header />
            <div className='container-fluid'>
                <div className='row mt-3'>
                    <div className='col-md-4 offset-md-4'>
                        <div className='d-grid mx-auto'>
                            <button onClick={() => openModal(1)} className='btn btn-success' data-bs-toggle='modal' data-bs-target='#modalProducts'>
                                <i className='fa-solid fa-circle-plus'></i> Añadir
                            </button>
                        </div>
                    </div>
                </div> <br />
                <div className='row mt-3'>
                    <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
                        <div className='table-responsive'>
                            <table className='table table-bordered'>
                                <thead>
                                    <tr><th>#</th><th>CodigoÚnico</th><th>Producto</th><th>Descripción</th><th>Precio</th><th>SKU</th><th>invetario</th><th>Imagen</th><th>Acción</th></tr>
                                </thead>
                                <tbody className='table-group-divider'>
                                    {products.map((product, index) => (
                                        <tr key={product.idProducto}>
                                            <td>{index + 1}</td>
                                            <td>{product.idProducto}</td>
                                            <td>{product.nombre}</td>
                                            <td>{product.descripcion}</td>
                                            <td>Q{new Intl.NumberFormat('es-gt').format(product.precio)}</td>
                                            <td>{product.sku}</td>
                                            <td>{product.invetario}</td>
                                            <td>{product.imagen}</td>
                                            <td>
                                                <button onClick={() => openModal(2, product, idProducto, nombre, descripcion, precio, sku, invetario, imagen)}
                                                    className='btn btn-warning' data-bs-toggle='modal' data-bs-target='#modalProducts' >
                                                    <i className='fa-solid fa-edit'></i>
                                                </button>
                                                &nbsp;
                                                <button onClick={() => confirmarEliminacion(product.idProducto)} className='btn btn-danger'>
                                                    <i className='fa-solid fa-trash'></i>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer /> 
            <div id='modalProducts' className='modal fade' aria-hidden='true'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal header'>
                            <label className='h5'>{title}</label>
                            <button type='button' className='btn-close' data-bs-dismiss='modal' aria-label='close'></button>
                        </div>
                        <div className='modal-body'>
                            <input type='hidden' id='id'></input>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-file-signature'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder="Nombre" value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder="Descripcion" value={descripcion}
                                    onChange={(e) => setDescripcion(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-money-bill'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder="Precio" value={precio}
                                    onChange={(e) => setPrecio(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-barcode'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder="SKU" value={sku}
                                    onChange={(e) => setSku(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-warehouse'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder="invetario" value={invetario}
                                    onChange={(e) => setinvetario(e.target.value)}></input>
                            </div>
                            <div className='input-group mb-3'>
                                <span className='input-group-text'><i className='fa-solid fa-image'></i></span>
                                <input type='text' id='nombre' className='form-control' placeholder="Imagen" value={imagen}
                                    onChange={(e) => setImagen(e.target.value)}></input>
                            </div>
                            <div className='d-grid col-6 mx-auto'>
                                <button onClick={() => validar()} className='btn btn-success'>
                                    <i className='fa-solid fa-floppy-disk'></i> Guardar
                                </button> <br />
                            </div>
                            <div className='modal-footer'>
                                <button type='button' id='btncCerrar' className='btn btn-secondary' data-bs-dismiss='modal' > Cerrar </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowProducts;
