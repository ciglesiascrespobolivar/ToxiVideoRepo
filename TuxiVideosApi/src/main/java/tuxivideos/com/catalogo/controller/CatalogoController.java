package tuxivideos.com.catalogo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import tuxivideos.com.catalogo.dto.request.BookMovieRequest;
import tuxivideos.com.catalogo.dto.response.BookMovieResponse;
import tuxivideos.com.catalogo.dto.response.GetMoviesResponse;
import tuxivideos.com.catalogo.services.ICatalogoService;

@RestController
public class CatalogoController implements ICatalogo{
    @Autowired
    ICatalogoService service;

    @Override
    public ResponseEntity<GetMoviesResponse> getMovies() {
        return new ResponseEntity<>(service.getMovies(), HttpStatus.OK) ;
    }

    @Override
    public ResponseEntity<BookMovieResponse> bookMovie(BookMovieRequest body) {
        return new ResponseEntity<>(service.bookMovie(body),HttpStatus.OK);
    }
}
