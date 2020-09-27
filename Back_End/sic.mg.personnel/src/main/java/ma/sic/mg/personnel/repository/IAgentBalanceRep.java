package ma.sic.mg.personnel.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import ma.sic.mg.personnel.entities.AgentBalance;
import ma.sic.mg.personnel.entities.Mandataire;

public interface IAgentBalanceRep  extends  CrudRepository<AgentBalance,Integer> {
	AgentBalance findById(int id );
	 List<AgentBalance> findAll();
}
