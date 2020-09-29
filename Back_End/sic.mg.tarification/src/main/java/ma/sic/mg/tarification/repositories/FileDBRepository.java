package ma.sic.mg.tarification.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.tarification.entities.FileDB;
import ma.sic.mg.tarification.entities.Tarification;

public interface FileDBRepository extends JpaRepository<FileDB,Integer> {

	FileDB findById(int id);
	List<FileDB> findByTarif(Tarification id);

}
