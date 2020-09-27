package ma.sic.mg.produit.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


import ma.sic.mg.produit.entities.Produit;

public interface IProduitRepository extends JpaRepository<Produit,Integer> {
	Produit findById(int id );
	 List<Produit> findAll();

}
