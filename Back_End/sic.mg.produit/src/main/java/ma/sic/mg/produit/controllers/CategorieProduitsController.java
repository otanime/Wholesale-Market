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


import ma.sic.mg.produit.entities.CategorieProduit;
import ma.sic.mg.produit.repositories.ICategorieProduitRepository;



@RestController
@RequestMapping("api/produitcategories")
@CrossOrigin(origins = "http://localhost:4200")  
public class CategorieProduitsController {
	
	@Autowired
	private ICategorieProduitRepository ProduitRepository;
	
	@GetMapping("")
	public List<CategorieProduit> findAll(){
		return ProduitRepository.findAll();
	}
	@GetMapping("/{id}")
	public CategorieProduit findProduit(@PathVariable(required = true) String id){
		return ProduitRepository.findById(Integer.parseInt(id));
	}
	
	
	@PostMapping("")
	public void save(@RequestBody CategorieProduit CategorieProduit) {
		ProduitRepository.save(CategorieProduit);
	}
	
	@DeleteMapping(value = "/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		CategorieProduit CategorieProduit=ProduitRepository.findById(Integer.parseInt(id));
		ProduitRepository.delete(CategorieProduit);	
	}

	

}
