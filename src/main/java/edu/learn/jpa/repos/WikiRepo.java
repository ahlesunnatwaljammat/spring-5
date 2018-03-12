package edu.learn.jpa.repos;

import edu.learn.jpa.entities.Wiki;
import org.springframework.data.repository.PagingAndSortingRepository;

public interface WikiRepo extends PagingAndSortingRepository<Wiki,Long> {
}
