package ma.sic.mg.conducteur.controllers;

import ma.sic.mg.conducteur.entities.Conducteur;
import ma.sic.mg.conducteur.repositories.ConducteurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("api/conducteurs")
public class ConducteurContoller {

    @Autowired
    ConducteurRepository conducteurRepository;

    @GetMapping("")
    public List<Conducteur> findAll() {

        return conducteurRepository.findAll();
    }

    @PostMapping(value = "")
    public Conducteur save(@RequestBody final Conducteur typeVehicule) {

        return getOne(String.valueOf(conducteurRepository.save(typeVehicule).getId()));
    }

    @PutMapping("")
    public Conducteur update(@RequestBody final Conducteur typeVehicule) {

        return getOne(String.valueOf(conducteurRepository.save(typeVehicule).getId()));
    }

    @GetMapping("/{id}")
    public Conducteur getOne(@PathVariable(required = true) String id) {

        return conducteurRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Conducteur typeVehicule = conducteurRepository.findById(Long.parseLong(id));
        conducteurRepository.delete(typeVehicule);
        conducteurRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return conducteurRepository.count();
    }

    @GetMapping(value = "/tel/{tel}")
    public Conducteur findByTel(@PathVariable(required = true) String tel) {

        return conducteurRepository.findByTel(tel);
    }

    @GetMapping(value = "/cin/{cin}")
    public Conducteur findByCin(@PathVariable(required = true) String cin) {

        return conducteurRepository.findByCIN(cin);
    }

}
