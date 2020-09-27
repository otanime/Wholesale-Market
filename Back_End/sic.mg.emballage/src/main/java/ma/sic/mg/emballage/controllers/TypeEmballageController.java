package ma.sic.mg.emballage.controllers;

import ma.sic.mg.emballage.entities.TypeEmballage;
import ma.sic.mg.emballage.repositiries.TypeEmballageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/type-emballages")
@CrossOrigin(origins = "http://localhost:4200")
public class TypeEmballageController {


    @Autowired
    TypeEmballageRepository typeEmballageRepository;

    @GetMapping("")
    public List<TypeEmballage> findAll() {

        return typeEmballageRepository.findAll();
    }

    @PostMapping(value = "")
    public TypeEmballage save(@RequestBody final TypeEmballage typeEmballage) {

        return getOne(String.valueOf(typeEmballageRepository.save(typeEmballage).getId()));
    }

    @PutMapping("")
    public TypeEmballage update(@RequestBody final TypeEmballage typeEmballage) {

        return getOne(String.valueOf(typeEmballageRepository.save(typeEmballage).getId()));
    }

    @GetMapping("/{id}")
    public TypeEmballage getOne(@PathVariable(required = true) String id) {

        return typeEmballageRepository.findById(Long.parseLong(id));
    }

    @DeleteMapping(value = "/{id}")
    public void delete(@PathVariable(required = true) String id) {

        TypeEmballage typeEmballage = typeEmballageRepository.findById(Long.parseLong(id));
        typeEmballageRepository.delete(typeEmballage);
        typeEmballageRepository.flush();
    }

    @GetMapping(value = "/count")
    public long count() {

        return typeEmballageRepository.count();
    }
}
