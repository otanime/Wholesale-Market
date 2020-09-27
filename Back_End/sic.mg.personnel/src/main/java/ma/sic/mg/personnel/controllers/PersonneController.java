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

import ma.sic.mg.personnel.entities.Mandataire;
import ma.sic.mg.personnel.entities.Personne;
import ma.sic.mg.personnel.repository.IPersonnelRep;



@RestController
@RequestMapping("personnes")
@CrossOrigin(origins = "http://localhost:4200")  
public class PersonneController {
	@Autowired
	private IPersonnelRep PersonneRepository;
	
	@GetMapping("/all")
	public List<Personne> findAll(){
		return  PersonneRepository.findAll();
	}
	@GetMapping("/find/{id}")
	public Personne findPersonne(@PathVariable(required = true) String id){
		return PersonneRepository.findById(Integer.parseInt(id));
	}
	@PostMapping("/save")
	public void save(@RequestBody Personne Mandataire) {
		PersonneRepository.save(Mandataire);
	}
	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		Personne Personne=PersonneRepository.findById(Integer.parseInt(id));
		PersonneRepository.delete(Personne);	
	}
	

}
