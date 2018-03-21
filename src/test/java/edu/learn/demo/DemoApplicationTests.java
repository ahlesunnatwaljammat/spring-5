package edu.learn.demo;

import edu.learn.jpa.entities.Wiki;
import edu.learn.jpa.repos.WikiRepo;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;

import java.util.List;
import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RunWith(SpringRunner.class)
@SpringBootTest
public class DemoApplicationTests {

	@Autowired
	private WikiRepo wikiRepo;

	@Test
    @Transactional(readOnly = true)
	public void contextLoads() {
		try (Stream<Wiki> stream = this.wikiRepo.findByTitleContainingIgnoreCase("a")){
		    List<Wiki> wikis = stream.filter(wiki -> wiki.getTitle() != null)
            .filter(wiki -> wiki.getTitle().equalsIgnoreCase("hand")).collect(Collectors.toList());

			wikis.forEach(wiki -> {
                Assert.assertNotNull(wiki);
			});
		}

		System.out.println("=====================================");
		CompletableFuture<List<Wiki>> wikiCompletableFuture = this.wikiRepo.findOneByContentContaining("hand");
		wikiCompletableFuture.thenApply(wiki -> {
            Assert.assertEquals("hand",wiki.get(0).getTitle());
            return wiki;
        });
	}

}
