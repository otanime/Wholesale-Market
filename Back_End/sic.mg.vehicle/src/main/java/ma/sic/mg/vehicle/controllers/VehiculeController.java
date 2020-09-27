package ma.sic.mg.vehicle.controllers;


import ma.sic.mg.vehicle.entities.Carburant;
import ma.sic.mg.vehicle.entities.Vehicule;
import ma.sic.mg.vehicle.repositories.VehiculeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/vehicules")
public class VehiculeController {

    @Autowired
    VehiculeRepository vehiculeRepository;

    @GetMapping("")
    public List<Vehicule> findAll() {

        return vehiculeRepository.findAll();
    }

    @PostMapping(value = "")
    public Vehicule save(@RequestBody final Vehicule vehicule) {

        return getOne(String.valueOf(vehiculeRepository.save(vehicule).getId()));
    }

    @PutMapping("")
    public Vehicule update(@RequestBody final Vehicule vehicule) {

        return getOne(String.valueOf(vehiculeRepository.save(vehicule).getId()));
    }

    @GetMapping("/{id}")
    public Vehicule getOne(@PathVariable(required = true) String id) {

        return vehiculeRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Vehicule vehicule = vehiculeRepository.findById(Long.parseLong(id));
        vehiculeRepository.delete(vehicule);
        vehiculeRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return vehiculeRepository.count();
    }

    @GetMapping(value = "/carburant/{carburant}")
    public List<Vehicule> findByCarburant(@PathVariable(required = true) String carburant) {

        return vehiculeRepository.findByCarburantLike(Carburant.valueOf(carburant.toUpperCase()));
    }

    @GetMapping(value = "/type-vehicule/{typeVehicule}")
    public List<Vehicule> findByTypeVehicule(@PathVariable(required = true) String typeVehicule) {

        return vehiculeRepository.findByTypeVehicule_Type(typeVehicule);
    }

    @GetMapping(value = "/matricule/{matricule}")
    public boolean existMatricule(@PathVariable(required = true) String matricule) {

        return vehiculeRepository.existsByMatricule(matricule);
    }
}
