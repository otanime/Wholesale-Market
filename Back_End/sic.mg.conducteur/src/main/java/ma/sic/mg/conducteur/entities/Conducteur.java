package ma.sic.mg.conducteur.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Conducteur implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(unique = true, nullable = false)
    private String CIN;

    @Column(nullable = false)
    private String nom;

    @Column(nullable = false)
    private String prenom;

    private String adresse;

    @Column(unique = true)
    private String tel;

}
