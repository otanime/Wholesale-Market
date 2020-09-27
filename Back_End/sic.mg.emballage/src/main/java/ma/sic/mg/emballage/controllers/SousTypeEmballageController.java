package ma.sic.mg.emballage.controllers;

import ma.sic.mg.emballage.entities.SousTypeEmballage;
import ma.sic.mg.emballage.entities.TypeEmballage;
import ma.sic.mg.emballage.repositiries.SousTypeEmballageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/sous-type-emballages")
public class SousTypeEmballageController {


    @Autowired
    SousTypeEmballageRepository sousTypeEmballageRepository;

    @GetMapping("")
    public List<SousTypeEmballage> findAll() {

        return sousTypeEmballageRepository.findAll();
    }

    @PostMapping(value = "")
    public SousTypeEmballage save(@RequestBody final SousTypeEmballage sousTypeEmballage) {

        return getOne(String.valueOf(sousTypeEmballageRepository.save(sousTypeEmballage).getId()));
    }

    @PutMapping("")
    public SousTypeEmballage update(@RequestBody final SousTypeEmballage sousTypeEmballage) {

        sousTypeEmballage.setTypeEmballage(getOne(String.valueOf(sousTypeEmballage.getId())).getTypeEmballage());
        return getOne(String.valueOf(sousTypeEmballageRepository.save(sousTypeEmballage).getId()));
    }

    @GetMapping("/{id}")
    public SousTypeEmballage getOne(@PathVariable(required = true) String id) {

        return sousTypeEmballageRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        SousTypeEmballage sousTypeEmballage = sousTypeEmballageRepository.findById(Long.parseLong(id));
        sousTypeEmballageRepository.delete(sousTypeEmballage);
        sousTypeEmballageRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return sousTypeEmballageRepository.count();
    }
}
