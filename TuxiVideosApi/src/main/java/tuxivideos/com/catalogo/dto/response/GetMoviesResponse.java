package tuxivideos.com.catalogo.dto.response;

import lombok.Data;
import lombok.NoArgsConstructor;
import tuxivideos.com.catalogo.models.Movie;
import tuxivideos.com.commons.dto.DataHeader;

import java.util.List;

@Data
@NoArgsConstructor
public class GetMoviesResponse {
    private DataHeader status;
    private List<Movie> movies;

}
