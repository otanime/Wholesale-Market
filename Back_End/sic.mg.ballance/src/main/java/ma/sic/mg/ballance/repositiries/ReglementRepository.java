package ma.sic.mg.ballance.repositiries;

import ma.sic.mg.ballance.entities.Reglement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface ReglementRepository extends JpaRepository<Reglement, Long> {

    Reglement findById(long id);

}
