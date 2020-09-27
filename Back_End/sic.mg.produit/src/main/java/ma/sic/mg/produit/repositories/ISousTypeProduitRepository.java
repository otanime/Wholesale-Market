package ma.sic.mg.produit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.produit.entities.SousTypeProduit;



public interface ISousTypeProduitRepository extends JpaRepository<SousTypeProduit,Integer> {
	SousTypeProduit findById(int id );
	 List<SousTypeProduit> findAll();

}
