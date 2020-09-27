package ma.sic.mg.personnel.entities;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

import com.sun.tracing.dtrace.ArgsAttributes;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
@Entity
@Inheritance(strategy=InheritanceType.SINGLE_TABLE)
@DiscriminatorColumn(name="type")
@DiscriminatorValue("Personne")
public class Personne implements Serializable {
@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)

private  int idPers;
private String nom ;
private String prenom ;
private String tel ;
private String adresse;
@Column(name="type", insertable=false, updatable=false)
protected String type  ;
public Personne() {
	
}
public Personne(int idPers, String nom, String prenom, String tel, String adresse) {
	super();
	this.idPers = idPers;
	this.nom = nom;
	this.prenom = prenom;
	this.tel = tel;
	this.adresse = adresse;
}
public int getIdPers() {
	return idPers;
}
public void setIdPers(int idPers) {
	this.idPers = idPers;
}
public String getNom() {
	return nom;
}
public void setNom(String nom) {
	this.nom = nom;
}
public String getPrenom() {
	return prenom;
}
public void setPrenom(String prenom) {
	this.prenom = prenom;
}
public String getTel() {
	return tel;
}
public void setTel(String tel) {
	this.tel = tel;
}
public String getAdresse() {
	return adresse;
}
public void setAdresse(String adresse) {
	this.adresse = adresse;
}
public String getType() {
	return type;
}
public void setType(String type) {
	this.type = type;
}


}
