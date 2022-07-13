package com.projetodev.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.projetodev.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long>{
	
}