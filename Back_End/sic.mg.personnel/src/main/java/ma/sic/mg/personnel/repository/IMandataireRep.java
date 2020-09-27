package ma.sic.mg.personnel.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.personnel.entities.AgentBalance;
import ma.sic.mg.personnel.entities.Mandataire;

public interface IMandataireRep extends JpaRepository<Mandataire,Integer> {
	Mandataire findById(int id);
	 List<Mandataire> findAll();

}

