package tuxivideos.com.user.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tuxivideos.com.user.dto.request.LoginRequest;
import tuxivideos.com.user.dto.request.RegisterUserRequest;
import tuxivideos.com.user.dto.response.LoginResponse;
import tuxivideos.com.user.dto.response.RegisterUserResponse;
import tuxivideos.com.user.models.User;

public interface IUserRepository extends JpaRepository<User, String> {

    @Query("select u from User u where u.email = :email and u.password = :password")
    User login(@Param("email") String email,
                                   @Param("password") String password);

}
