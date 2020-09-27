package ma.sic.mg.emballage.repositiries;

import ma.sic.mg.emballage.entities.TypeEmballage;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface TypeEmballageRepository extends JpaRepository<TypeEmballage, Long> {

    TypeEmballage findById(long id);


}

