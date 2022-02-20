package tuxivideos.com.user.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;
import tuxivideos.com.commons.dto.DataHeader;

@Data
@NoArgsConstructor
public class RegisterUserResponse {
    DataHeader status;
    String message;
}
