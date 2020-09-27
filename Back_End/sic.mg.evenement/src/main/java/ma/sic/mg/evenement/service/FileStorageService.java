package ma.sic.mg.evenement.service;

import ma.sic.mg.evenement.entities.Evenement;
import ma.sic.mg.evenement.entities.FilePj;
import ma.sic.mg.evenement.repositiries.FileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.stream.Stream;

@Service
public class FileStorageService {

    @Autowired
    private FileRepository fileInfoRepository;

    public FilePj store(MultipartFile file, Evenement evenement) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FilePj fileInfo = new FilePj();

        fileInfo.setName(fileName);
        fileInfo.setType(file.getContentType());
        fileInfo.setData(file.getBytes());

        fileInfo.setEvenement(evenement);

        return fileInfoRepository.save(fileInfo);
    }

    public FilePj getFile(String id) {

        return fileInfoRepository.findById(Long.parseLong(id));
    }

    public Stream<FilePj> getAllFilesByEvenement(String id) {

        return fileInfoRepository.findByEvenement_Id(Long.parseLong(id)).stream();
    }

    public void delete(String id){


        FilePj filePj = fileInfoRepository.findById(Long.parseLong(id));
        fileInfoRepository.delete(filePj);
        fileInfoRepository.flush();
    }

    public void  deleteByEvenement(Evenement evenement){

        evenement.getFiles().forEach(filePj -> {

            fileInfoRepository.delete(filePj);
            fileInfoRepository.flush();

        });


    }

}
