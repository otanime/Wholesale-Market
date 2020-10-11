package ma.sic.mg.ballance.controllers;

import ma.sic.mg.ballance.entities.FilePjReglement;
import ma.sic.mg.ballance.entities.Reglement;
import ma.sic.mg.ballance.message.ResponseFile;
import ma.sic.mg.ballance.message.ResponseMessage;
import ma.sic.mg.ballance.repositiries.ReglementRepository;
import ma.sic.mg.ballance.service.FileReglementStorageService;
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
@RequestMapping("api/reglements")
@CrossOrigin(origins = "http://localhost:4200")
public class FileReglementController {

    @Autowired
    private FileReglementStorageService storageService;
    @Autowired
    ReglementRepository reglementRepository;

    @PostMapping("/{reglementID}/file")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable String reglementID) {

        String message = "";

        Reglement reglement = reglementRepository.findById(Long.parseLong(reglementID));

        try {
            storageService.store(file, reglement);

            message = "Bien ajouter";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

    @GetMapping("/{reglementID}/file")
    public ResponseEntity<List<ResponseFile>> getAllFile(@PathVariable String reglementID) {

        double  MEGABYTE = 0.000001;

        List<ResponseFile> files = storageService.getAllFilesByReglement(reglementID).map(file -> {

            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/reglements/file/")
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
        FilePjReglement fileDB = storageService.getFile(id);

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

    @DeleteMapping(value = "{reglementID}/file")
    public ResponseEntity<ResponseMessage> deleteAll(@PathVariable String reglementID) {

        String message = "";

        try {
            Reglement reglement = reglementRepository.findById(Long.parseLong(reglementID));
            storageService.deleteByReglement(reglement);

            message = "Bien supprimer";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

}
