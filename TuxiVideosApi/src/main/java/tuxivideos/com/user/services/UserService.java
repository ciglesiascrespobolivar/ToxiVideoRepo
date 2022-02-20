package tuxivideos.com.user.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tuxivideos.com.commons.dto.DataHeader;
import tuxivideos.com.user.dto.request.LoginRequest;
import tuxivideos.com.user.dto.request.RegisterUserRequest;
import tuxivideos.com.user.dto.response.LoginResponse;
import tuxivideos.com.user.dto.response.RegisterUserResponse;
import tuxivideos.com.user.models.User;
import tuxivideos.com.user.repository.IUserRepository;

@Service
public class UserService implements IUserService {
    @Autowired
    IUserRepository repository;

    @Override
    public RegisterUserResponse register(RegisterUserRequest request) {
        RegisterUserResponse response = new RegisterUserResponse();
        DataHeader status = new DataHeader();
        String message = "";
        try {
            if (repository.existsById(request.getUser().getId())) {
                status.setCode(404);
                status.setOk(false);
                message = "Cliente ya existe";
            } else {
                repository.save(request.getUser());
                status.setOk(true);
                status.setCode(201);
                message = "Successfully registered user";
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
        response.setStatus(status);
        response.setMessage(message);
        return response;
    }

    @Override
    public LoginResponse login(LoginRequest request) {
        LoginResponse response = new LoginResponse();
        DataHeader status = new DataHeader();
        User userResponse = new User();
        String message = "";
        try {
            User user = repository.login(request.getEmail(), request.getPassword());
            if (user != null) {
                status.setCode(200);
                status.setOk(true);
                userResponse.setAddress(user.getAddress());
                userResponse.setEmail(user.getEmail());
                userResponse.setName(user.getName());
                userResponse.setLastName(user.getLastName());
                userResponse.setPhone(user.getPhone());
                userResponse.setId(user.getId());
                message = "Logged";
            } else {
                status.setCode(404);
                status.setOk(false);
                message = "Cliente no encontrado";
                userResponse = null;

            }
        } catch (Exception e) {
            status.setCode(500);
            status.setOk(false);
            message = "Error interno del Servidor";
            e.printStackTrace();
        }
        response.setStatus(status);
        response.setMessage(message);
        response.setUser(userResponse);
        return response;

    }
}
