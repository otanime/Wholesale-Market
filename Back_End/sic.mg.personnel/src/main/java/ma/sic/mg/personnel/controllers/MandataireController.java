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
import ma.sic.mg.personnel.repository.IMandataireRep;



@RestController
@RequestMapping("api/mandataires")
@CrossOrigin(origins = "http://localhost:4200")  
public class MandataireController {
	@Autowired
	private IMandataireRep MandataireRepository;
	
	@GetMapping("")
	public List<Mandataire> findAll(){
		return  MandataireRepository.findAll();
	}
	@GetMapping("/{id}")
	public Mandataire findMandataire(@PathVariable(required = true) String id){
		return MandataireRepository.findById(Integer.parseInt(id));
	}
	
	@PostMapping("")
	public void save(@RequestBody Mandataire Mandataire) {
		MandataireRepository.save(Mandataire);
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		Mandataire Mandataire=MandataireRepository.findById(Integer.parseInt(id));
		MandataireRepository.delete(Mandataire);	
	}
	

}
