package ma.sic.mg.conducteur.repositories;

import ma.sic.mg.conducteur.entities.Conducteur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface ConducteurRepository extends JpaRepository<Conducteur, Long> {

    Conducteur findById(long id);

    Conducteur findByCIN(String cin);

    Conducteur findByTel(String tel);


}
