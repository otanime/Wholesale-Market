package ma.sic.mg.evenement.repositiries;

import ma.sic.mg.evenement.entities.FilePj;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface FileRepository extends JpaRepository<FilePj, Long> {

    FilePj findById(long id);

    List<FilePj> findByEvenement_Id(long id);
}
