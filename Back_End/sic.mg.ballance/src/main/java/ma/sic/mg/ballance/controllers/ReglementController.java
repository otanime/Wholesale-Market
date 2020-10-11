package ma.sic.mg.ballance.controllers;

import ma.sic.mg.ballance.entities.Pesage;
import ma.sic.mg.ballance.entities.Reglement;
import ma.sic.mg.ballance.entities.Recu;
import ma.sic.mg.ballance.entities.Status;
import ma.sic.mg.ballance.repositiries.PesageRepository;
import ma.sic.mg.ballance.repositiries.ReglementRepository;
import ma.sic.mg.ballance.repositiries.RecuRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/reglements")
@CrossOrigin(origins = "http://localhost:4200")
public class ReglementController {

    @Autowired
    ReglementRepository reglementRepository;

    @Autowired
    PesageRepository pesageRepository;

    @Autowired
    RecuRepository recuRepository;

    @GetMapping("")
    public List<Reglement> findAll() {

        return reglementRepository.findAll();
    }

    @PutMapping("")
    public Reglement update(@RequestBody final Reglement reglement) {

        Reglement oldReglement = getOne(String.valueOf(reglement.getId()));

        reglement.setFiles(oldReglement.getFiles());
        reglement.setRecu(oldReglement.getRecu());

        reglement.setStatut(Status.VALIDE);

        return getOne(String.valueOf(reglementRepository.save(reglement).getId()));
    }

    @GetMapping("/{id}")
    public Reglement getOne(@PathVariable(required = true) String id) {

        return reglementRepository.findById(Long.parseLong(id));
    }

    @GetMapping("/{id}/pesage")
    public Pesage getPesageByReglement(@PathVariable(required = true) String id) {

        return pesageRepository.findByRecu_Reglement_Id(Long.parseLong(id));
    }

}
