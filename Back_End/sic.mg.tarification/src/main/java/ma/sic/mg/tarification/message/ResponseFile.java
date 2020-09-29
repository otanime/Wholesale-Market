package ma.sic.mg.tarification.message;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ResponseFile {

    private int id;
    private String name;
    private String url;
    private String type;
    private double size;

}
