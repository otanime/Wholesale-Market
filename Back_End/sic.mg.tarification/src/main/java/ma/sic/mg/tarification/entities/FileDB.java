package ma.sic.mg.tarification.entities;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.GenericGenerator;

import lombok.Data;

@Entity
@Table(name = "files")
@Data
public class FileDB {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int id;

  private String name;
  @ManyToOne(cascade = CascadeType.MERGE)
  private Tarification tarif;
  private String type;

  @Lob
  private byte[] data;
 
public FileDB(String name, String type, byte[] data) {
	this.name = name;
	this.type = type;
	this.data = data;
}

public FileDB() {

}

  
}