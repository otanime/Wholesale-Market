package ma.sic.mg.vehicle.repositories;

import ma.sic.mg.vehicle.entities.Carburant;
import ma.sic.mg.vehicle.entities.Vehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface VehiculeRepository extends JpaRepository<Vehicule, Long> {

    Vehicule findById(long id);

    List<Vehicule> findByCarburantLike(Carburant carburant);

    List<Vehicule> findByTypeVehicule_Type(String type);

    boolean existsByMatricule(String matricule);


}
