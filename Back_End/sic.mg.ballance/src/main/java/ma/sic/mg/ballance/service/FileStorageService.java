package ma.sic.mg.ballance.service;

import ma.sic.mg.ballance.entities.Pesage;
import ma.sic.mg.ballance.entities.FilePjPesage;
import ma.sic.mg.ballance.repositiries.FileRepository;
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

    public FilePjPesage store(MultipartFile file, Pesage pesage) throws IOException {

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        FilePjPesage fileInfo = new FilePjPesage();

        fileInfo.setName(fileName);
        fileInfo.setType(file.getContentType());
        fileInfo.setData(file.getBytes());
        fileInfo.setPesage(pesage);


        return fileInfoRepository.save(fileInfo);
    }

    public FilePjPesage getFile(String id) {

        return fileInfoRepository.findById(Long.parseLong(id));
    }

    public Stream<FilePjPesage> getAllFilesByPesage(String id) {

        return fileInfoRepository.findByPesage_Id(Long.parseLong(id)).stream();
    }

    public void delete(String id){


        FilePjPesage FilePjPesage = fileInfoRepository.findById(Long.parseLong(id));
        fileInfoRepository.delete(FilePjPesage);
        fileInfoRepository.flush();
    }

    public void  deleteByPesage(Pesage pesage){

    	pesage.getFiles().forEach(FilePjPesage -> {

            fileInfoRepository.delete(FilePjPesage);
            fileInfoRepository.flush();

        });


    }

}
