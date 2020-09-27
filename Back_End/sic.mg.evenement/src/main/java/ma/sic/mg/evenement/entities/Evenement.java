package ma.sic.mg.evenement.entities;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Evenement implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String description;

    private Date dateDeclaration;
    private Date dateEvenement;

    private String matriculeVehicule;
    private String conducteurCin;

    private Status status;
    private String observation;

    @ManyToOne()
    private TypeEvenement typeEvenement;

    @OneToMany(mappedBy = "evenement", cascade = CascadeType.ALL)
    private List<FilePj> files;

}
