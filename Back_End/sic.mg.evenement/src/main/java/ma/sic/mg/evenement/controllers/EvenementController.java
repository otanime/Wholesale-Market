package ma.sic.mg.evenement.controllers;

import ma.sic.mg.evenement.entities.Evenement;
import ma.sic.mg.evenement.entities.Status;
import ma.sic.mg.evenement.repositiries.EvenementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/evenements")
@CrossOrigin(origins = "http://localhost:4200")
public class EvenementController {


    @Autowired
    EvenementRepository evenementRepository;

    @GetMapping("")
    public List<Evenement> findAll() {

        return evenementRepository.findAll();
    }

    @PostMapping(value = "")
    public Evenement save(@RequestBody final Evenement evenement) {

        evenement.setStatus(Status.EN_COURS);
        return getOne(String.valueOf(evenementRepository.save(evenement).getId()));
    }

    @PutMapping("")
    public Evenement update(@RequestBody final Evenement evenement) {

        return getOne(String.valueOf(evenementRepository.save(evenement).getId()));
    }

    @PutMapping("/annulation")
    public Evenement annuller(@RequestBody final Evenement evenement) {

        Evenement ev = getOne(String.valueOf(evenement.getId()));
        ev.setStatus(Status.ANNULEE);

        return getOne(String.valueOf(evenementRepository.save(ev).getId()));
    }

    @PutMapping("/confirmation")
    public Evenement confirmer(@RequestBody final Evenement evenement) {

        Evenement ev = getOne(String.valueOf(evenement.getId()));
        ev.setStatus(Status.CONFIMER);

        return getOne(String.valueOf(evenementRepository.save(ev).getId()));
    }

    @GetMapping("/{id}")
    public Evenement getOne(@PathVariable(required = true) String id) {

        return evenementRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Evenement evenement = evenementRepository.findById(Long.parseLong(id));
        evenementRepository.delete(evenement);
        evenementRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return evenementRepository.count();
    }

//    @GetMapping(value = "/conducteur/{cin}")
//    public List<Evenement> findByConducteurCin(@PathVariable(required = true) String cin) {
//
//        return evenementRepository.findByConducteurCin(cin);
//    }
//
//    @GetMapping(value = "/Vehicule/{matricule}")
//    public List<Evenement> findByMatriculeVehicule(@PathVariable(required = true) String matricule) {
//
//        return evenementRepository.findByMatriculeVehicule(matricule);
//    }
//
//    @GetMapping(value = "/type-evenement/{typeEvenement}")
//    public List<Evenement> findByTypeEvenement(@PathVariable(required = true) String typeEvenement) {
//
//        return evenementRepository.findByTypeEvenement_LibelleContains(typeEvenement);
//    }
//
//    @GetMapping(value = "/status/{status}")
//    public List<Evenement> findByStatus(@PathVariable(required = true) String status) {
//
//        return evenementRepository.findByStatus(Status.valueOf(status));
//    }
}
