package ma.sic.mg.personnel.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.personnel.entities.AgentBalance;
import ma.sic.mg.personnel.entities.Mandataire;
import ma.sic.mg.personnel.entities.Personne;

public interface IPersonnelRep extends JpaRepository<Personne,Integer> {
	Personne findById(int id);
	 List<Personne>findAll();

}

