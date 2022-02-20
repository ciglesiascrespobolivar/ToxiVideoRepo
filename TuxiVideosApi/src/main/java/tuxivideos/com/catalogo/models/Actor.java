package tuxivideos.com.catalogo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Table(name = "Actor")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Actor {
    @Id
    String name;

    @ManyToOne
    @JoinColumn(name = "movie_id")
    @JsonIgnore
    Movie movie;
}
