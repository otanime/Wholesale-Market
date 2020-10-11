package ma.sic.mg.ballance.entities;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
@JsonIgnoreProperties(value = ("recu"), allowSetters = true)

public class Reglement implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

	private long mandataire;

	private Date dateReglement;
	private Status Statut;

	private String observation;

	@OneToMany(mappedBy = "reglement", cascade = CascadeType.ALL)
	private List<FilePjReglement> files;

	@OneToOne
	private Recu recu;


}
