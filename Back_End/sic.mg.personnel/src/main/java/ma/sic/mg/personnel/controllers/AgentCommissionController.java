package ma.sic.mg.personnel.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import ma.sic.mg.personnel.entities.AgentCommission;
import ma.sic.mg.personnel.repository.IAgentCommissionRep;



@RestController
@RequestMapping("api/agentcommissions")
@CrossOrigin(origins = "http://localhost:4200")  
public class AgentCommissionController {
	@Autowired
	private IAgentCommissionRep AgentCommissionRepository;
	
	@GetMapping("")
	public List<AgentCommission> findAll(){
		return (List<AgentCommission>) AgentCommissionRepository.findAll();
	}
	@GetMapping("/{id}")
	public AgentCommission findAgentCommission(@PathVariable(required = true) String id){
		return AgentCommissionRepository.findById(Integer.parseInt(id));
	}
	
	@PostMapping("")
	public void save(@RequestBody AgentCommission AgentCommission) {
		AgentCommissionRepository.save(AgentCommission);
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		AgentCommission AgentCommission=AgentCommissionRepository.findById(Integer.parseInt(id));
		AgentCommissionRepository.delete(AgentCommission);	
	}
	

}
