package tuxivideos.com.catalogo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;


import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@NoArgsConstructor
@Entity
@Table(name = "Movie")
public class Movie {
    @Id
    private String id;
    private String title;
    private String description;
    @OneToMany
    @JoinColumn(name = "movie_id")
    private List<Actor> actors;
    private String director;
    private int stock;


}
