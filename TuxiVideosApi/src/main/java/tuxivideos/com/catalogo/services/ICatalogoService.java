package tuxivideos.com.catalogo.services;

import tuxivideos.com.catalogo.dto.request.BookMovieRequest;
import tuxivideos.com.catalogo.dto.response.BookMovieResponse;
import tuxivideos.com.catalogo.dto.response.GetMoviesResponse;

public interface ICatalogoService {
    GetMoviesResponse getMovies();
    BookMovieResponse bookMovie(BookMovieRequest request);
}
