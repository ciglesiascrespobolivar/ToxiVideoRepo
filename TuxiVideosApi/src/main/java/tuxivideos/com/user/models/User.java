package tuxivideos.com.user.models;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Data
@NoArgsConstructor
@Entity
@Table(name = "User")
public class User {
    @Id
    private String id;
    private String name;
    private String lastName;
    private String email;
    private String phone;
    private String address;
    private String password;

}
