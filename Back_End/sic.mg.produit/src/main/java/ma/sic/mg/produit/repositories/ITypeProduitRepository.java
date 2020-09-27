package ma.sic.mg.produit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import ma.sic.mg.produit.entities.Produit;
import ma.sic.mg.produit.entities.TypeProduit;

public interface ITypeProduitRepository extends JpaRepository<TypeProduit,Integer> {
	TypeProduit findById(int id );
	 List<TypeProduit> findAll();

}
