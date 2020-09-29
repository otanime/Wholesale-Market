package ma.sic.mg.tarification.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.tarification.entities.Tarification;



public interface TarifRepo extends JpaRepository<Tarification,Integer>   {
	

    Tarification findById(int id);
}
