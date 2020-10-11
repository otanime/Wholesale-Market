package ma.sic.mg.ballance.controllers;

import ma.sic.mg.ballance.entities.Pesage;
import ma.sic.mg.ballance.entities.Recu;
import ma.sic.mg.ballance.entities.Reglement;
import ma.sic.mg.ballance.entities.Status;
import ma.sic.mg.ballance.repositiries.PesageRepository;
import ma.sic.mg.ballance.repositiries.RecuRepository;
import ma.sic.mg.ballance.repositiries.ReglementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/pesages")
@CrossOrigin(origins = "http://localhost:4200")
public class PesageController {

    @Autowired
    PesageRepository pesageRepository;

    @Autowired
    RecuRepository recuRepository;

    @Autowired
    ReglementRepository reglementRepository;

    @GetMapping("")
    public List<Pesage> findAll() {

        return pesageRepository.findAll();
    }

    @PostMapping(value = "")
    public Pesage save(@RequestBody final Pesage pesage) {

        Pesage myPesage = getOne(String.valueOf(pesageRepository.save(pesage).getId()));

        Recu recu = new Recu();
        recu.setPesage(myPesage);

        Reglement reglement = new Reglement();
        reglement.setRecu(recuRepository.save(recu));
        reglement.setStatut(Status.INVALIDE);
        reglementRepository.save(reglement);

        return myPesage;
    }

    @PutMapping("")
    public Pesage update(@RequestBody final Pesage pesage) {

        return getOne(String.valueOf(pesageRepository.save(pesage).getId()));
    }

    @GetMapping("/{id}")
    public Pesage getOne(@PathVariable(required = true) String id) {

        return pesageRepository.findById(Long.parseLong(id));
    }

    @GetMapping("/{id}/recu")
    public Recu getRecu(@PathVariable(required = true) String id) {

        return pesageRepository.findById(Long.parseLong(id)).getRecu();
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        Pesage pesage = pesageRepository.findById(Long.parseLong(id));
        pesageRepository.delete(pesage);
        pesageRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return pesageRepository.count();
    }
}
