package tuxivideos.com.user.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import tuxivideos.com.user.dto.request.LoginRequest;
import tuxivideos.com.user.dto.request.RegisterUserRequest;
import tuxivideos.com.user.dto.response.LoginResponse;
import tuxivideos.com.user.dto.response.RegisterUserResponse;
import tuxivideos.com.user.services.IUserService;

@RestController
public class UserController implements IUser{
    @Autowired
    IUserService service;

    @Override
    public ResponseEntity<RegisterUserResponse> registerUser(RegisterUserRequest body) {
        return new ResponseEntity<>(service.register(body), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<LoginResponse> loginUser(LoginRequest body) {
        return new ResponseEntity<>(service.login(body),HttpStatus.OK);
    }
}
