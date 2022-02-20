package tuxivideos.com.user.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;
import tuxivideos.com.user.models.User;
import tuxivideos.com.commons.dto.DataHeader;

@Data
@NoArgsConstructor
public class LoginResponse {
    private DataHeader status;
    private String message;
    private User user;
}
