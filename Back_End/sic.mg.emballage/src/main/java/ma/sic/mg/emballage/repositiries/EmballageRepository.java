package ma.sic.mg.emballage.repositiries;

import ma.sic.mg.emballage.entities.Emballage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface EmballageRepository extends JpaRepository<Emballage, Long> {

    Emballage findById(long id);

    List<Emballage> findByLibelleContains(String libelle);

    List<Emballage> findByTypeEmballage_LibelleContains(String typeEmballage);

    List<Emballage> findBySousTypeEmballage_LibelleContains(String sousTypeEmballage);

}

