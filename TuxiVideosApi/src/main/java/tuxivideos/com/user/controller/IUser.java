package tuxivideos.com.user.controller;

import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import tuxivideos.com.user.dto.request.LoginRequest;
import tuxivideos.com.user.dto.request.RegisterUserRequest;
import tuxivideos.com.user.dto.response.LoginResponse;
import tuxivideos.com.user.dto.response.RegisterUserResponse;

@CrossOrigin(origins = "*", allowedHeaders = "*", methods = {RequestMethod.POST})
@RequestMapping("/api/v1/user")
@Api(value = "Usuarios" )
@Validated
public interface IUser {
    @ApiOperation(value = "Servicio que permite a los Clientes poder registrarse. Esto creará un \n" +
            "nuevo cliente en el sistema.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Operación exitosa", response = RegisterUserResponse.class),
            @ApiResponse(code = 400, message = "Error en los parámetros proporcionados"),
            @ApiResponse(code = 404, message = "No existen datos con los datos ingresados"),
            @ApiResponse(code = 500, message = "Error de servidor")
    })
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    @PostMapping(value = "/register",produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<RegisterUserResponse> registerUser(@RequestBody RegisterUserRequest body);

    @ApiOperation(value = "Servicio que permite a los Clientes iniciar sesión.")
    @ApiResponses(value = {
            @ApiResponse(code = 200, message = "Operación exitosa", response = LoginResponse.class),
            @ApiResponse(code = 400, message = "Error en los parámetros proporcionados"),
            @ApiResponse(code = 404, message = "No existen datos con los datos ingresados"),
            @ApiResponse(code = 500, message = "Error de servidor")
    })
    @ResponseStatus(value = HttpStatus.OK)
    @ResponseBody
    @PostMapping(value = "/login",produces = MediaType.APPLICATION_JSON_VALUE, consumes = MediaType.APPLICATION_JSON_VALUE)
    ResponseEntity<LoginResponse> loginUser(@RequestBody LoginRequest body);
}
