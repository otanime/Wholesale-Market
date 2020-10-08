package ma.sic.mg.ballance.controllers;

import ma.sic.mg.ballance.entities.FilePjPesage;
import ma.sic.mg.ballance.entities.Pesage;
import ma.sic.mg.ballance.message.ResponseFile;
import ma.sic.mg.ballance.message.ResponseMessage;
import ma.sic.mg.ballance.repositiries.PesageRepository;
import ma.sic.mg.ballance.service.FileStorageService;
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
@RequestMapping("api/pesages")
@CrossOrigin(origins = "http://localhost:4200")
public class FileController {

    @Autowired
    private FileStorageService storageService;
    @Autowired
    PesageRepository pesageRepository;

    @PostMapping("/{pesageID}/file")
    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable String pesageID) {

        String message = "";

        Pesage pesage = pesageRepository.findById(Long.parseLong(pesageID));

        try {
            storageService.store(file, pesage);

            message = "Bien ajouter";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

    @GetMapping("/{pesageID}/file")
    public ResponseEntity<List<ResponseFile>> getAllFile(@PathVariable String pesageID) {

        double  MEGABYTE = 0.000001;

        List<ResponseFile> files = storageService.getAllFilesByPesage(pesageID).map(file -> {

            String fileDownloadUri = ServletUriComponentsBuilder
                    .fromCurrentContextPath()
                    .path("/api/pesages/file/")
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
        FilePjPesage fileDB = storageService.getFile(id);

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

    @DeleteMapping(value = "{pesageID}/file")
    public ResponseEntity<ResponseMessage> deleteAll(@PathVariable String pesageID) {

        String message = "";

        try {
            Pesage pesage = pesageRepository.findById(Long.parseLong(pesageID));
            storageService.deleteByPesage(pesage);

            message = "Bien supprimer";
            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

        } catch (Exception e) {
            message = "Un probleme est survenu pendant l'operation";
            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
        }

    }

}
