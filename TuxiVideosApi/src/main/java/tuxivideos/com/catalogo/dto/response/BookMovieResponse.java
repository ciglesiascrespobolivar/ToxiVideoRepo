package tuxivideos.com.catalogo.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;
import tuxivideos.com.commons.dto.DataHeader;

@NoArgsConstructor
@Data
public class BookMovieResponse {
    private DataHeader status;
    private String message;
}
