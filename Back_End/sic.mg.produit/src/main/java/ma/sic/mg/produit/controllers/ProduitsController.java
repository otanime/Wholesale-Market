package ma.sic.mg.produit.controllers;

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

import ma.sic.mg.produit.entities.Produit;
import ma.sic.mg.produit.repositories.IProduitRepository;



@RestController
@RequestMapping("produits")
@CrossOrigin(origins = "http://localhost:4200")  
public class ProduitsController {
	@Autowired
	private IProduitRepository ProduitRepository;
	
	@GetMapping("/all")
	public List<Produit> findAll(){
		return ProduitRepository.findAll();
	}
	@GetMapping("/find/{id}")
	public Produit findProduit(@PathVariable(required = true) String id){
		return ProduitRepository.findById(Integer.parseInt(id));
	}
	
	
	@PostMapping("/save")
	public void save(@RequestBody Produit Produit) {
		ProduitRepository.save(Produit);
	}
	
	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		Produit Produit=ProduitRepository.findById(Integer.parseInt(id));
		ProduitRepository.delete(Produit);	
	}

	

}
