using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

using APICORE.Models;

using System.Data;
using System.Data.SqlClient;
using static System.Net.Mime.MediaTypeNames;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Authorization;

namespace APICORE.Controllers
{
    [Authorize]
    [EnableCors("ReglasCors")]
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        private readonly string cadenaSQL;

        public ProductoController(IConfiguration config){
            cadenaSQL = config.GetConnectionString("CadenaSQL");            
        }

        [HttpGet]
        [Route("Lista")]

        public IActionResult Lista(){
            List<Producto> lista = new List<Producto>();

            try
            {

                using(var conexion = new SqlConnection(cadenaSQL)){

                    conexion.Open();
                    var cmd = new SqlCommand("sp_lista_productos", conexion);
                    cmd.CommandType = CommandType.StoredProcedure;

                    using (var rd = cmd.ExecuteReader())
                    {
                        while(rd.Read()) {
                            lista.Add(new Producto() {

                                IdProducto = Convert.ToInt32 ( rd["idProducto"]),
                                    Nombre = rd["nombre"].ToString(),
                                    Descripcion = rd["descripcion"].ToString(),
                                    Precio = rd["precio"].ToString(),
                                    Sku = rd["sku"].ToString (),
                                    Invetario = rd["inventario"].ToString(),
                                    Imagen = rd["imagen"].ToString()
                            });

                        }
                    }
                }

                return StatusCode(StatusCodes.Status200OK, new {mensaje = "OK", Response = lista});

            }
            catch (Exception error) {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message, Response = lista });

            }


        }






        [HttpGet]
        [Route("Obtener/{idProdcuto:int}")]

        public IActionResult Obtener(int idProdcuto)
        {
            List<Producto> lista = new List<Producto>();
          Producto producto = new Producto();

            try
            {

                using (var conexion = new SqlConnection(cadenaSQL))
                {

                    conexion.Open();
                    var cmd = new SqlCommand("sp_lista_productos", conexion);
                    cmd.CommandType = CommandType.StoredProcedure;

                    using (var rd = cmd.ExecuteReader())
                    {
                        while (rd.Read())
                        {
                            lista.Add(new Producto()
                            {

                                IdProducto = Convert.ToInt32(rd["idProducto"]),
                                Nombre = rd["nombre"].ToString(),
                                Descripcion = rd["descripcion"].ToString(),
                                Precio = rd["precio"].ToString(),
                                Sku = rd["sku"].ToString(),
                                Invetario = rd["inventario"].ToString(),
                                Imagen = rd["imagen"].ToString()
                            });

                        }
                    }
                }
                producto = lista.Where(item => item.IdProducto == idProdcuto).FirstOrDefault();

                return StatusCode(StatusCodes.Status200OK, new { mensaje = "OK", Response = producto });

            }
            catch (Exception error)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message, Response = producto });

            }


        }





        [HttpPost]
        [Route("Guardar")]

        public IActionResult Guardar([FromBody] Producto objeto)
        {


             try
            {

                using (var conexion = new SqlConnection(cadenaSQL))
                {

                    conexion.Open();
                    var cmd = new SqlCommand("sp_guardar_producto", conexion);
                    cmd.Parameters.AddWithValue("nombre",objeto.Nombre);
                    cmd.Parameters.AddWithValue("descripcion",objeto.Descripcion);
                    cmd.Parameters.AddWithValue("precio",objeto.Precio);
                    cmd.Parameters.AddWithValue("sku",objeto.Sku);
                    cmd.Parameters.AddWithValue("inventario",objeto.Invetario);
                    cmd.Parameters.AddWithValue("imagen",objeto.Imagen);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.ExecuteNonQuery();

                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "OK"});

            }
            catch (Exception error)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message});

            }


        }


        [HttpPut]
        [Route("Editar")]

        public IActionResult Editar([FromBody] Producto objeto)
        {


            try
            {

                using (var conexion = new SqlConnection(cadenaSQL))
                {

                    conexion.Open();
                    var cmd = new SqlCommand("sp_editar_producto", conexion);
                    cmd.Parameters.AddWithValue("idProducto", objeto.IdProducto == 0 ? DBNull.Value : objeto.IdProducto);
                    cmd.Parameters.AddWithValue("nombre", objeto.Nombre is null ? DBNull.Value : objeto.Nombre);
                    cmd.Parameters.AddWithValue("descripcion", objeto.Descripcion is null ? DBNull.Value : objeto.Descripcion);
                    cmd.Parameters.AddWithValue("precio", objeto.Precio is null ? DBNull.Value : objeto.Precio);
                    cmd.Parameters.AddWithValue("sku", objeto.Sku is null ? DBNull.Value : objeto.Sku);
                    cmd.Parameters.AddWithValue("inventario", objeto.Invetario is null ? DBNull.Value : objeto.Invetario);
                    cmd.Parameters.AddWithValue("imagen", objeto.Imagen is null ? DBNull.Value : objeto.Imagen);
                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.ExecuteNonQuery();

                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Editado" });

            }
            catch (Exception error)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message });

            }


        }

        [HttpDelete]
        [Route("Eliminar/{idProducto}")]

        public IActionResult Eliminar(int idProducto)
        {


            try
            {

                using (var conexion = new SqlConnection(cadenaSQL))
                {

                    conexion.Open();
                    var cmd = new SqlCommand("sp_eliminar_producto", conexion);
                    cmd.Parameters.AddWithValue("idProducto", idProducto);

                    cmd.CommandType = CommandType.StoredProcedure;

                    cmd.ExecuteNonQuery();

                }
                return StatusCode(StatusCodes.Status200OK, new { mensaje = "Registro Eliminado" });

            }
            catch (Exception error)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, new { mensaje = error.Message });

            }


        }
    }
}
