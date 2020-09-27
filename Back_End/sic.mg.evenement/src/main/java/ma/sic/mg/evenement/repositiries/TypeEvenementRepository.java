package ma.sic.mg.evenement.repositiries;

import ma.sic.mg.evenement.entities.TypeEvenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface TypeEvenementRepository extends JpaRepository<TypeEvenement, Long> {

    TypeEvenement findById(long id);
}
