package ma.sic.mg.hangar.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import ma.sic.mg.hangar.entities.Hangar;

public interface IhangarRepository extends JpaRepository<Hangar,Integer> {
	Hangar findById(int id );
	List<Hangar>  findByCategorieProduit(int id );
	 List<Hangar> findAll();

}
