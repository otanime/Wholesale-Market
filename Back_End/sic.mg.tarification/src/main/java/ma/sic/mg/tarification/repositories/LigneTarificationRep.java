package ma.sic.mg.tarification.repositories;

import org.springframework.data.jpa.repository.JpaRepository;


import ma.sic.mg.tarification.entities.LigneTarifPK;
import ma.sic.mg.tarification.entities.LigneTarification;

public interface LigneTarificationRep extends JpaRepository<LigneTarification,LigneTarifPK>  {
	

}
