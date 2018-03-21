package edu.learn.jpa.repos;

import edu.learn.jpa.entities.Wiki;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.scheduling.annotation.Async;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.stream.Stream;

public interface WikiRepo extends PagingAndSortingRepository<Wiki,Long> {
    Stream<Wiki> findByTitleContainingIgnoreCase(String text);

    @Async
    CompletableFuture<List<Wiki>> findOneByContentContaining(String text);

    @Query("SELECT w FROM Wiki w WHERE LOWER(w.title) LIKE LOWER(CONCAT('%',:text, '%'))")
    Page<Wiki> findByTitleContains(@Param("text") String text, Pageable pageable);

    Page<Wiki> findByTitleContainingIgnoreCase(String text, Pageable pageable);
}
