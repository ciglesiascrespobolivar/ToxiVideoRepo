package tuxivideos.com.catalogo.dto.request;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class BookMovieRequest {
    private String userId;
    private String movieId;
}
