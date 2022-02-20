package tuxivideos.com.catalogo.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tuxivideos.com.catalogo.dto.request.BookMovieRequest;
import tuxivideos.com.catalogo.dto.response.BookMovieResponse;
import tuxivideos.com.catalogo.dto.response.GetMoviesResponse;
import tuxivideos.com.catalogo.models.Movie;
import tuxivideos.com.catalogo.repository.ICatalogoRepository;
import tuxivideos.com.commons.dto.DataHeader;
import tuxivideos.com.user.models.User;
import tuxivideos.com.user.repository.IUserRepository;

import javax.xml.crypto.Data;
import java.util.ArrayList;
import java.util.List;

@Service
public class CatalogoService implements ICatalogoService {
    @Autowired
    ICatalogoRepository repository;

    @Autowired
    IUserRepository userRepository;

    @Override
    public GetMoviesResponse getMovies() {
        List<Movie> list = new ArrayList<>();
        GetMoviesResponse response = new GetMoviesResponse();
        DataHeader status = new DataHeader();

        try {
            list = repository.findAll();

            status.setCode(200);
            status.setOk(true);
        } catch (Exception e) {
            status.setCode(500);
            status.setOk(false);
            e.printStackTrace();
        }
        response.setMovies(list);
        response.setStatus(status);
        return response;
    }

    @Override
    public BookMovieResponse bookMovie(BookMovieRequest request) {
        BookMovieResponse response = new BookMovieResponse();
        DataHeader status = new DataHeader(false,404);
        String message = "Datos no encontrados";
        try{

            Movie movie =  repository.hasStock(request.getMovieId());
            if(!userRepository.existsById(request.getUserId())){
                status.setOk(false);
                status.setCode(404);
                message="Usuario no registrado";
            }else if(movie == null){
                status.setOk(false);
                status.setCode(404);
                message="Pelicula sin stock";
            }else{
                movie.setStock(movie.getStock()-1);
                repository.save(movie);
                status.setCode(200);
                status.setOk(true);
                message="Successful booking";
            }

        }catch (Exception e){
            status.setCode(500);
            status.setOk(false);
            message="Error en el servidor";
            e.printStackTrace();
        }

        response.setStatus(status);
        response.setMessage(message);
        return response;
    }
}
