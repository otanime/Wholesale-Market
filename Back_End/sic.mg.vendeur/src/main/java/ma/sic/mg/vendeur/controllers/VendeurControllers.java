package ma.sic.mg.vendeur.controllers;

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
import ma.sic.mg.vendeur.entities.Vendeur;
import ma.sic.mg.vendeur.repositories.IvendeurRepository;
@RestController
@RequestMapping("api/vendeurs")
@CrossOrigin(origins = "http://localhost:4200")  
public class VendeurControllers {
	@Autowired
	private IvendeurRepository VendeurRepository;
	
	@GetMapping("")
	public List<Vendeur> findAll(){
		return VendeurRepository.findAll();
	}
	@GetMapping("/{id}")
	public Vendeur findVendeur(@PathVariable(required = true) String id){
		return VendeurRepository.findById(Integer.parseInt(id));
	}
	
	@PostMapping("")
	public void save(@RequestBody Vendeur Vendeur) {
		VendeurRepository.save(Vendeur);
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		Vendeur Vendeur=VendeurRepository.findById(Integer.parseInt(id));
		VendeurRepository.delete(Vendeur);	
	}

}
