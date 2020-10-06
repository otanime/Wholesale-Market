package ma.sic.mg.tarification.controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ma.sic.mg.tarification.entities.LigneTarifPK;
import ma.sic.mg.tarification.entities.LigneTarification;
import ma.sic.mg.tarification.entities.Tarification;
import ma.sic.mg.tarification.repositories.LigneTarificationRep;

@RestController
@RequestMapping("api/lignetarifs")
@CrossOrigin(origins = "http://localhost:4200")  
public class LigneTarifController {

	@Autowired
	private LigneTarificationRep LigneTarifRep;
	
	@GetMapping("")
	public List<LigneTarification> findAll(){
		return LigneTarifRep.findAll();
	}
	
	@GetMapping("/find")
	public LigneTarification findById(@RequestParam String param1 ,@RequestParam String  param2 ){
		LigneTarifPK pk = new LigneTarifPK();
		pk.setIdTarif(Integer.parseInt(param2));
		pk.setIdProduit(Integer.parseInt(param1));
		return LigneTarifRep.findByLigneID(pk);
	}
	
	@PostMapping("")
	public void save(@RequestBody  final LigneTarification  LigneTarification) {
		List<LigneTarification> ll = new  ArrayList<LigneTarification>();
		LigneTarification lt = new LigneTarification();
		double old_price = 0 ;
		 ll = LigneTarifRep.findByLigneID_IdProduit(LigneTarification.getLigneID().getIdProduit());
		 if (ll != null) {
			 
			 for (LigneTarification ligneTarification2 : ll) {
				 if (ligneTarification2.getTarif().getStatus().equals("EN_COURS")) {
					 ligneTarification2.getTarif().setStatus("Annulle");
					 ligneTarification2.setDateModification(new Date());
					 ligneTarification2.setIdAgentCommission(LigneTarification.getIdAgentCommission());
					 old_price = ligneTarification2.getTarif().getPrix();
						LigneTarifRep.save(ligneTarification2);
						
						}
			}
			 
				Tarification t = new Tarification();
				t =	LigneTarification.getTarif();
				t.setStatus("EN_COURS");
		
				LigneTarification.setTarif(t);
				LigneTarification.setOldPrix(old_price);
					LigneTarifRep.save(LigneTarification);
		 }
		 
		 else {
			Tarification t = new Tarification();
			
		t =	LigneTarification.getTarif();
		t.setStatus("EN_COURS");
		LigneTarification.setTarif(t);
			LigneTarifRep.save(LigneTarification);
			
			
		}
			
	
	}
	
	
	
	
/*	@DeleteMapping(value = "/delete/{id}")
	public void delete(@PathVariable(required = true) String id){
		System.out.println("id = "+id);
		LigneTarification LigneTarification=LigneTarifRep.findById(Integer.parseInt(id));
		LigneTarifRep.delete(LigneTarification);	
	}


	

*/
}
