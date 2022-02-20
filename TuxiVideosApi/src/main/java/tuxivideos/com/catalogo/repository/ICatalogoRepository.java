package tuxivideos.com.catalogo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import tuxivideos.com.catalogo.models.Movie;

public interface ICatalogoRepository extends JpaRepository<Movie,String> {
    @Query("select m from Movie m where m.id = :id and m.stock >0")
    Movie hasStock(@Param("id") String id);
}
