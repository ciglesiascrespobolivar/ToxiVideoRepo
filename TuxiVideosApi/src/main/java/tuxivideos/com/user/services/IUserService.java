package tuxivideos.com.user.services;

import tuxivideos.com.user.dto.request.LoginRequest;
import tuxivideos.com.user.dto.request.RegisterUserRequest;
import tuxivideos.com.user.dto.response.LoginResponse;
import tuxivideos.com.user.dto.response.RegisterUserResponse;

public interface IUserService {
    RegisterUserResponse register(RegisterUserRequest request);

    LoginResponse login(LoginRequest request);

}
