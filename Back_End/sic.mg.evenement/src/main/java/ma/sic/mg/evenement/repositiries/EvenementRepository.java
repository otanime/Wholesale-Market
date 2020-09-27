package ma.sic.mg.evenement.repositiries;

import ma.sic.mg.evenement.entities.Evenement;
import ma.sic.mg.evenement.entities.Status;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface EvenementRepository extends JpaRepository<Evenement, Long> {

    Evenement findById(long id);

//    List<Evenement> findByConducteurCin(String cin);
//
//    List<Evenement> findByMatriculeVehicule(String matricule);
//
//    List<Evenement> findByTypeEvenement_LibelleContains(String typeEvenement);
//
//    List<Evenement> findByStatus(Status status);

}
