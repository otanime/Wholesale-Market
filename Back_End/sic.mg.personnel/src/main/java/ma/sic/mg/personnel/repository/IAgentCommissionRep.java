package ma.sic.mg.personnel.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import ma.sic.mg.personnel.entities.AgentCommission;

public interface IAgentCommissionRep extends JpaRepository<AgentCommission,Integer> {
	AgentCommission findById(int id);

}

