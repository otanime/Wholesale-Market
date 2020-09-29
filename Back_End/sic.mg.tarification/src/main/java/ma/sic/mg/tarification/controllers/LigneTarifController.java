package ma.sic.mg.tarification.controllers;

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

import ma.sic.mg.tarification.entities.LigneTarification;
import ma.sic.mg.tarification.repositories.LigneTarificationRep;

@RestController
@RequestMapping("tarifs")
@CrossOrigin(origins = "http://localhost:4200")  
public class LigneTarifController {

	@Autowired
	private LigneTarificationRep LigneTarifRep;
	
	@GetMapping("/all")
	public List<LigneTarification> findAll(){
		return LigneTarifRep.findAll();
	}

	@PostMapping("/save")
	public void save(@RequestBody LigneTarification LigneTarification) {
		LigneTarifRep.save(LigneTarification);
	}
	
/*	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		LigneTarification LigneTarification=LigneTarifRep.findById(Integer.parseInt(id));
		LigneTarifRep.delete(LigneTarification);	
	}


	

*/
}
