package ma.sic.mg.emballage.entities;

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
public class Emballage implements Serializable {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String libelle;
    private String description;
    private double poidsMoyen;
    private double poidsMoyenEmbarque;

    @ManyToOne()
    private TypeEmballage typeEmballage;

    @ManyToOne()
    private SousTypeEmballage sousTypeEmballage;




}
