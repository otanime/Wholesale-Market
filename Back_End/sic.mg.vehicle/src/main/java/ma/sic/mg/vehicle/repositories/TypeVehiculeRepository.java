package ma.sic.mg.vehicle.repositories;

import ma.sic.mg.vehicle.entities.TypeVehicule;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface TypeVehiculeRepository extends JpaRepository<TypeVehicule, Long> {

    TypeVehicule findById(long id);

}
