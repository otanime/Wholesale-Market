package ma.sic.mg.ballance.repositiries;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import ma.sic.mg.ballance.entities.FilePjPesage;

@Component
public interface FileRepository extends JpaRepository<FilePjPesage, Long> {

    FilePjPesage findById(long id);

    List<FilePjPesage> findByPesage_Id(long id);
}