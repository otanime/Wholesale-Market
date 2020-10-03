package ma.sic.mg.hangar.controllers;

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

import ma.sic.mg.hangar.entities.Hangar;
import ma.sic.mg.hangar.repositories.IhangarRepository;

@RestController
@RequestMapping("hangars")
@CrossOrigin(origins = "http://localhost:4200")  
public class HangarsController {
	@Autowired
	private IhangarRepository hangarRepository;
	
	@GetMapping("/all")
	public List<Hangar> findAll(){
		return hangarRepository.findAll();
	}
	@GetMapping("/find/{id}")
	public Hangar findhangar(@PathVariable(required = true) String id){
		return hangarRepository.findById(Integer.parseInt(id));
	}
	@GetMapping("/category/{id}")
	public List<Hangar> findhangarBycategory(@PathVariable(required = true) String id){
		return hangarRepository.findByCategorieProduit(Integer.parseInt(id));
	}
	
	
	@PostMapping("/save")
	public void save(@RequestBody Hangar hangar) {
		hangarRepository.save(hangar);
	}
	
	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		Hangar hangar=hangarRepository.findById(Integer.parseInt(id));
		hangarRepository.delete(hangar);	
	}

	

}
