package tuxivideos.com.catalogo.controller;

import io.swagger.annotations.*;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tuxivideos.com.catalogo.dto.request.BookMovieRequest;
import tuxivideos.com.catalogo.dto.response.BookMovieResponse;
import tuxivideos.com.catalogo.dto.response.GetMoviesResponse;

@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.GET, RequestMethod.POST})
@RequestMapping("/api/v1/catalog")
@Api(value = "Catalogos" )
@Validated
public interface ICatalogo {


    @ApiOperation(value = "Servicio que permite a los Clientes consultar el catálogo de películas")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Operación exitosa", response = GetMoviesResponse.class),
            @ApiResponse(code = 400, message = "Error en los parámetros proporcionados"),
            @ApiResponse(code = 404, message = "No existen datos con los datos ingresados"),
            @ApiResponse(code = 500, message = "Error de servidor")
    })
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    @GetMapping(value = "/movies",produces = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<GetMoviesResponse> getMovies();

    @ApiOperation(value = "Servicio que permite a los Clientes  realizar una reserva de Películas")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Operación exitosa", response = BookMovieResponse.class),
            @ApiResponse(code = 400, message = "Error en los parámetros proporcionados"),
            @ApiResponse(code = 404, message = "No existen datos con los datos ingresados"),
            @ApiResponse(code = 500, message = "Error de servidor")
    })
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    @PostMapping(value = "/book",produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<BookMovieResponse> bookMovie(@RequestBody BookMovieRequest body);

}
