package ma.sic.mg.ballance.repositiries;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import ma.sic.mg.ballance.entities.Pesage;

@Component
public interface PesageRepository extends JpaRepository<Pesage, Long> {

	Pesage findById(long id);
}
