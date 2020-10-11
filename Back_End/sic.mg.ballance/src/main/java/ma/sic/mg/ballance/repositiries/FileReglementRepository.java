package ma.sic.mg.ballance.repositiries;

import ma.sic.mg.ballance.entities.FilePjReglement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface FileReglementRepository extends JpaRepository<FilePjReglement, Long> {

    FilePjReglement findById(long id);
    List<FilePjReglement> findByReglement_Id(long id);
}