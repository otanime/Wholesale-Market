package ma.sic.mg.tarification.controllers;

import java.io.IOException;
import java.util.stream.Stream;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import ma.sic.mg.tarification.entities.FileDB;
import ma.sic.mg.tarification.entities.Tarification;
import ma.sic.mg.tarification.repositories.FileDBRepository;
import ma.sic.mg.tarification.repositories.TarifRepo;

@Service
public class FileStorageService {

	  @Autowired
	  private FileDBRepository fileDBRepository;
	  @Autowired
	  private TarifRepo tarifRepository;
	  public FileDB store(MultipartFile file, Tarification tarif) throws IOException {

	        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
	        FileDB fileInfo = new FileDB();

	        fileInfo.setName(fileName);
	        fileInfo.setType(file.getContentType());
	        fileInfo.setData(file.getBytes());

	        fileInfo.setTarif(tarif);

	        return fileDBRepository.save(fileInfo);
	    }

	    public FileDB getFile(String id) {

	        return fileDBRepository.findById(Integer.parseInt(id));
	    }

	    public Stream<FileDB> getAllFilesByTarif(String id) {

	        return fileDBRepository.findByTarif(tarifRepository.getOne(Integer.parseInt(id))).stream();
	    }

	    public void delete(String id){


	        FileDB FileDB = fileDBRepository.findById(Integer.parseInt(id));
	        fileDBRepository.delete(FileDB);
	        fileDBRepository.flush();
	    }

	    public void  deleteByTarif(Tarification tarif){

	        tarif.getPj().forEach(FileDB -> {

	        	fileDBRepository.delete(FileDB);
	        	fileDBRepository.flush();

	        });


	    }

}
