package ma.sic.mg.emballage.controllers;

import ma.sic.mg.emballage.entities.Emballage;
import ma.sic.mg.emballage.repositiries.EmballageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/emballages")
public class EmballageController {


    @Autowired
    EmballageRepository emballageRepository;

    @GetMapping("")
    public List<Emballage> findAll() {

        return emballageRepository.findAll();
    }

    @PostMapping(value = "")
    public Emballage save(@RequestBody final Emballage emballage) {

        return getOne(String.valueOf(emballageRepository.save(emballage).getId()));
    }

    @PutMapping("")
    public Emballage update(@RequestBody final Emballage emballage) {

        return getOne(String.valueOf(emballageRepository.save(emballage).getId()));
    }

    @GetMapping("/{id}")
    public Emballage getOne(@PathVariable(required = true) String id) {

        return emballageRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Emballage emballage = emballageRepository.findById(Long.parseLong(id));
        emballageRepository.delete(emballage);
        emballageRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return emballageRepository.count();
    }

    @GetMapping(value = "/libelle/{libelle}")
    public List<Emballage> findByLibelle(@PathVariable(required = true) String libelle) {

        return emballageRepository.findByLibelleContains(libelle);
    }

    @GetMapping(value = "/type-emballage/{typeEmballage}")
    public List<Emballage> findByTypeEmballage(@PathVariable(required = true) String typeEmballage) {

        return emballageRepository.findByTypeEmballage_LibelleContains(typeEmballage);
    }

    @GetMapping(value = "/sous-type-emballage/{sousTypeEmballage}")
    public List<Emballage> findBySousTypeEmballage(@PathVariable(required = true) String sousTypeEmballage) {

        return emballageRepository.findBySousTypeEmballage_LibelleContains(sousTypeEmballage);
    }
}
