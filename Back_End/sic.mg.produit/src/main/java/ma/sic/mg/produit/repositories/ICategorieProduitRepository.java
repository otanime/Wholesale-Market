package ma.sic.mg.produit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.produit.entities.CategorieProduit;
import ma.sic.mg.produit.entities.Produit;

public interface ICategorieProduitRepository extends JpaRepository<CategorieProduit,Integer> {
	CategorieProduit findById(int id );
	 List<CategorieProduit> findAll();

}
