package ma.sic.mg.evenement.controllers;

import ma.sic.mg.evenement.entities.Evenement;
import ma.sic.mg.evenement.entities.FilePj;
import ma.sic.mg.evenement.message.ResponseFile;
import ma.sic.mg.evenement.message.ResponseMessage;
import ma.sic.mg.evenement.repositiries.EvenementRepository;
import ma.sic.mg.evenement.service.FileStorageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("api/evenements")
@CrossOrigin(origins = "http://localhost:4200")
public class FileController {

    @Autowired
    private FileStorageService storageService;
    @Autowired
    EvenementRepository evenementRepository;

    @PostMapping("/{evenementID}/file")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable String evenementID) {

        String message = "";

        Evenement evenement = evenementRepository.findById(Long.parseLong(evenementID));

        try {
            storageService.store(file, evenement);

            message = "Bien ajouter";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

    @GetMapping("/{evenementID}/file")
    public ResponseEntity<List<ResponseFile>> getAllFile(@PathVariable String evenementID) {

        double  MEGABYTE = 0.000001;

        List<ResponseFile> files = storageService.getAllFilesByEvenement(evenementID).map(file -> {

            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/evenements/file/")
                    .path(Long.toString(file.getId()))
                    .toUriString();

            return new ResponseFile(
                    file.getId(),
                    file.getName(),
                    fileDownloadUri,
                    file.getType(),
                    file.getData().length * MEGABYTE);

        }).collect(Collectors.toList());

        return ResponseEntity.status(HttpStatus.OK).body(files);
    }

    @GetMapping("/file/{id}")
    public ResponseEntity<byte[]> getFile(@PathVariable String id) {
        FilePj fileDB = storageService.getFile(id);

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + fileDB.getName() + "\"")
                .body(fileDB.getData());
    }

    @DeleteMapping(value = "/file/{id}")
    public ResponseEntity<ResponseMessage> delete(@PathVariable(required = true) String id) {

        String message = "";

        try {
            storageService.delete(id);

            message = "Bien supprimer";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }
    }

    @DeleteMapping(value = "{evenementID}/file")
    public ResponseEntity<ResponseMessage> deleteAll(@PathVariable String evenementID) {

        String message = "";

        try {
            Evenement evenement = evenementRepository.findById(Long.parseLong(evenementID));
            storageService.deleteByEvenement(evenement);

            message = "Bien supprimer";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

}
