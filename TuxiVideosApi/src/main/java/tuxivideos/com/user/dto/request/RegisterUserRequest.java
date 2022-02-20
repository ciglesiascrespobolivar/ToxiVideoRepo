package tuxivideos.com.user.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;
import tuxivideos.com.user.models.User;

@Data
@NoArgsConstructor
public class RegisterUserRequest {
    private User user;
}
