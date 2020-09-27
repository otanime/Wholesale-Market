package ma.sic.mg.emballage.repositiries;

import ma.sic.mg.emballage.entities.SousTypeEmballage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface SousTypeEmballageRepository extends JpaRepository<SousTypeEmballage, Long> {

    SousTypeEmballage findById(long id);

    
}

