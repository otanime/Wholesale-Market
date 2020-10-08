package ma.sic.mg.ballance.entities;


import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class Pesage implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
	
	private String agentBallance;
    private Date dateDeclaration;

    private String vehiculeMatricule;
    private String conducteurCin;
    private String vendeurCin;
    
    private long typeProduit;
    private long sousTypeProduit;

    private String provenance;
    private int hangar;

    private long emballage;
    private double poidsEmballage;
    private int nombreUnite;
        
    private double poidsTotal;
    private double poidsNet;
    
    private double poidVideVehicule;
    
    private double prixReference;
    private double montantTotal;
    private double taxe;
    private double taxePayer;
    
    
    @OneToMany(mappedBy = "pesage", cascade = CascadeType.ALL)
    private List<FilePjPesage> files;
    
    @OneToOne
	private Recu recu;
	
}
