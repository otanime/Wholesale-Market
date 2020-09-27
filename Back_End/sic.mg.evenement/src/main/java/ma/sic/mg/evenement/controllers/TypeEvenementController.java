package ma.sic.mg.evenement.controllers;

import ma.sic.mg.evenement.entities.TypeEvenement;
import ma.sic.mg.evenement.repositiries.TypeEvenementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/evenements/types")
@CrossOrigin(origins = "http://localhost:4200")
public class TypeEvenementController {


    @Autowired
    TypeEvenementRepository typeEvenementRepository;

    @GetMapping("")
    public List<TypeEvenement> findAll() {

        return typeEvenementRepository.findAll();
    }

    @PostMapping(value = "")
    public TypeEvenement save(@RequestBody final TypeEvenement typeEvenement) {

        return getOne(String.valueOf(typeEvenementRepository.save(typeEvenement).getId()));
    }

    @PutMapping("")
    public TypeEvenement update(@RequestBody final TypeEvenement typeEvenement) {

        return getOne(String.valueOf(typeEvenementRepository.save(typeEvenement).getId()));
    }

    @GetMapping("/{id}")
    public TypeEvenement getOne(@PathVariable(required = true) String id) {

        return typeEvenementRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        TypeEvenement typeEvenement = typeEvenementRepository.findById(Long.parseLong(id));
        typeEvenementRepository.delete(typeEvenement);
        typeEvenementRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return typeEvenementRepository.count();
    }
    
}
