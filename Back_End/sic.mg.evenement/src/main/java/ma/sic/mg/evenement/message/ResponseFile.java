package ma.sic.mg.evenement.message;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@NoArgsConstructor
@AllArgsConstructor
@ToString
public class ResponseFile {

    private long id;
    private String name;
    private String url;
    private String type;
    private double size;

}
