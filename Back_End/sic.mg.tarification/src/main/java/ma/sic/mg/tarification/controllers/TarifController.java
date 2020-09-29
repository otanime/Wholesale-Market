package ma.sic.mg.tarification.controllers;

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
import org.springframework.web.bind.annotation.RestController;
import ma.sic.mg.tarification.entities.Tarification;
import ma.sic.mg.tarification.repositories.TarifRepo;

@RestController
@RequestMapping("api/tarifs")
public class TarifController {


    @Autowired
    TarifRepo tarifRepository;

    @GetMapping("")
    public List<Tarification> findAll() {
 
        return tarifRepository.findAll();
    } 

    @PostMapping(value = "")
    public Tarification save(@RequestBody final Tarification Tarification) {

        Tarification.setStatus("EN_COURS");
        return getOne(String.valueOf(tarifRepository.save(Tarification).getIdTarif()));
    }

    @PutMapping("")
    public Tarification update(@RequestBody final Tarification Tarification) {

        return getOne(String.valueOf(tarifRepository.save(Tarification).getIdTarif()));
    }

    @PutMapping("/annulation")
    public Tarification annuller(@RequestBody final Tarification Tarification) {

        Tarification ev = getOne(String.valueOf(Tarification.getIdTarif()));
        ev.setStatus("ANNULEE");

        return getOne(String.valueOf(tarifRepository.save(ev).getIdTarif()));
    }

    @PutMapping("/confirmation")
    public Tarification confirmer(@RequestBody final Tarification Tarification) {

        Tarification ev = getOne(String.valueOf(Tarification.getIdTarif()));
        ev.setStatus("CONFIMER");

        return getOne(String.valueOf(tarifRepository.save(ev).getIdTarif()));
    }

    @GetMapping("/{id}")
    public Tarification getOne(@PathVariable(required = true) String id) {

        return tarifRepository.findById(Integer.parseInt(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Tarification Tarification = tarifRepository.findById(Integer.parseInt(id));
        tarifRepository.delete(Tarification);
        tarifRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return tarifRepository.count();
    }

}
