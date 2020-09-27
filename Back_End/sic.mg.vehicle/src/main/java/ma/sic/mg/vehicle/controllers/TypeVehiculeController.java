package ma.sic.mg.vehicle.controllers;


import ma.sic.mg.vehicle.entities.TypeVehicule;
import ma.sic.mg.vehicle.repositories.TypeVehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/type-vehicules")
public class TypeVehiculeController {

    @Autowired
    TypeVehiculeRepository typeVehiculeRepository;

    @GetMapping("")
    public List<TypeVehicule> findAll() {

        return typeVehiculeRepository.findAll();
    }

    @PostMapping(value = "")
    public TypeVehicule save(@RequestBody final TypeVehicule typeVehicule) {

        return getOne(String.valueOf(typeVehiculeRepository.save(typeVehicule).getId()));
    }

    @PutMapping("")
    public TypeVehicule update(@RequestBody final TypeVehicule typeVehicule) {

        return getOne(String.valueOf(typeVehiculeRepository.save(typeVehicule).getId()));
    }

    @GetMapping("/{id}")
    public TypeVehicule getOne(@PathVariable(required = true) String id) {

        return typeVehiculeRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        TypeVehicule typeVehicule = typeVehiculeRepository.findById(Long.parseLong(id));
        typeVehiculeRepository.delete(typeVehicule);
        typeVehiculeRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return typeVehiculeRepository.count();
    }

}
