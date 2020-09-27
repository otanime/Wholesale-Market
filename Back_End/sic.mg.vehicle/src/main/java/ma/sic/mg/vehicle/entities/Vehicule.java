package ma.sic.mg.vehicle.entities;

import com.fasterxml.jackson.annotation.JsonAutoDetect;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString

public class Vehicule implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String matricule;
    private double poidsVide;
    private Carburant carburant;
    private Date datePremierCirculation;

    @ManyToOne(fetch = FetchType.LAZY)
    private TypeVehicule typeVehicule;
}
