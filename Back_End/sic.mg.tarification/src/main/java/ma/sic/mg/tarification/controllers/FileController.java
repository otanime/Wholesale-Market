package ma.sic.mg.tarification.controllers;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import ma.sic.mg.tarification.entities.FileDB;
import ma.sic.mg.tarification.entities.Tarification;
import ma.sic.mg.tarification.message.ResponseFile;
import ma.sic.mg.tarification.message.ResponseMessage;
import ma.sic.mg.tarification.repositories.TarifRepo;

@RestController
@RequestMapping("api/tarifs")
@CrossOrigin(origins = "http://localhost:4200")  
public class FileController {

	  @Autowired
	  private FileStorageService storageService;
	   @Autowired
	    private TarifRepo tarifRepository;

	    @PostMapping("/{idTarif}/file")
	    public ResponseEntity<ResponseMessage> uploadFile(@RequestParam("file") MultipartFile file, @PathVariable String idTarif) {

	        String message = "";

	        Tarification Tarification = tarifRepository.findById(Integer.parseInt(idTarif));

	        try {
	            storageService.store(file, Tarification);

	            message = "Bien ajouter";
	            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

	        } catch (Exception e) {
	            message = "Un probleme est survenu pendant l'operation";
	            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	        }

	    }

	    @GetMapping("/{idTarif}/file")
	    public ResponseEntity<List<ResponseFile>> getAllFile(@PathVariable String idTarif) {

	        double  MEGABYTE = 0.000001;

	        List<ResponseFile> files = storageService.getAllFilesByTarif(idTarif).map(file -> {

	            String fileDownloadUri = ServletUriComponentsBuilder
	                    .fromCurrentContextPath()
	                    .path("/api/tarifs/file/")
	                    .path(Integer.toString(file.getId()))
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
	        FileDB fileDB = storageService.getFile(id);

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

	    @DeleteMapping(value = "{id}/file")
	    public ResponseEntity<ResponseMessage> deleteAll(@PathVariable String idTarif) {

	        String message = "";

	        try {
	            Tarification Tarification = tarifRepository.findById(Integer.parseInt(idTarif));
	            storageService.deleteByTarif(Tarification);

	            message = "Bien supprimer";
	            return ResponseEntity.status(HttpStatus.OK).body(new ResponseMessage(message));

	        } catch (Exception e) {
	            message = "Un probleme est survenu pendant l'operation";
	            return ResponseEntity.status(HttpStatus.EXPECTATION_FAILED).body(new ResponseMessage(message));
	        }

	    }

}
