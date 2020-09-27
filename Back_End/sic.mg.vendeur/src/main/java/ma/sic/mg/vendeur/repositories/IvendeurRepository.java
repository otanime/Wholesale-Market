package ma.sic.mg.vendeur.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.vendeur.entities.Vendeur;

public interface IvendeurRepository extends JpaRepository<Vendeur,Integer > {
	Vendeur findById(int t);
	List<Vendeur>findAll();

}
