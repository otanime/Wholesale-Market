package ma.sic.mg.emballage.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;
import org.hibernate.annotations.Cascade;
import org.hibernate.annotations.SQLDeleteAll;
import org.springframework.web.bind.annotation.DeleteMapping;


import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class TypeEmballage {

    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String libelle;

    @OneToMany(mappedBy = "typeEmballage")
    //@Cascade(org.hibernate.annotations.CascadeType.DELETE)
    private List<SousTypeEmballage> sousTypeEmballages;

}
