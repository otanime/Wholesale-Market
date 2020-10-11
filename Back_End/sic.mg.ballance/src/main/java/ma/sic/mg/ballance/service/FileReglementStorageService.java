package ma.sic.mg.ballance.service;

import ma.sic.mg.ballance.entities.FilePjReglement;
import ma.sic.mg.ballance.entities.Reglement;
import ma.sic.mg.ballance.repositiries.FileReglementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

@Service
public class FileReglementStorageService {

    @Autowired
    private FileReglementRepository fileInfoRepository;

    public FilePjReglement store(MultipartFile file, Reglement reglement) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FilePjReglement fileInfo = new FilePjReglement();

        fileInfo.setName(fileName);
        fileInfo.setType(file.getContentType());
        fileInfo.setData(file.getBytes());
        fileInfo.setReglement(reglement);


        return fileInfoRepository.save(fileInfo);
    }

    public FilePjReglement getFile(String id) {

        return fileInfoRepository.findById(Long.parseLong(id));
    }

    public Stream<FilePjReglement> getAllFilesByReglement(String id) {

        return fileInfoRepository.findByReglement_Id(Long.parseLong(id)).stream();
    }

    public void delete(String id){


        FilePjReglement FilePjReglement = fileInfoRepository.findById(Long.parseLong(id));
        fileInfoRepository.delete(FilePjReglement);
        fileInfoRepository.flush();
    }

    public void  deleteByReglement(Reglement reglement){

    	reglement.getFiles().forEach(FilePjReglement -> {

            fileInfoRepository.delete(FilePjReglement);
            fileInfoRepository.flush();

        });


    }

}
