package ma.sic.mg.ballance.repositiries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import ma.sic.mg.ballance.entities.Recu;

@Component
public interface RecuRepository extends JpaRepository<Recu, Long> {

    Recu findById(long id);

}
