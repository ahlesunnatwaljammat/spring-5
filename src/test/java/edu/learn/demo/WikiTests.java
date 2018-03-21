package edu.learn.demo;

import edu.learn.jpa.entities.Wiki;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
public class WikiTests {

	@Autowired
	private WebTestClient webClient;

	@Autowired
	private TestRestTemplate restTemplate;

	@Test
	public void wiki_list_by_rest_template() {
		Wiki[] wiki = this.restTemplate.getForObject("/api/wiki/list", Wiki[].class);
		Assert.assertTrue(wiki.length > 0);

		ResponseEntity<Wiki[]> responseEntity = this.restTemplate.getForEntity("/api/wiki/list", Wiki[].class);
		Assert.assertTrue(responseEntity.getBody().length > 0);
	}

	@Test
	public void wiki_list_by_webclient() {
		this.webClient.get().uri("/api/wiki/list").accept(MediaType.APPLICATION_JSON)
				.exchange().expectStatus().isOk().expectBodyList(Wiki.class);
	}

}
