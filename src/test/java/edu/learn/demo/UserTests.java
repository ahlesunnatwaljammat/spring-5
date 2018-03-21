package edu.learn.demo;

import edu.learn.jpa.entities.User;
import org.assertj.core.api.Assertions;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpEntity;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.reactive.server.WebTestClient;
import org.springframework.web.reactive.function.BodyInserters;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = WebEnvironment.RANDOM_PORT)
public class UserTests {

    @Autowired
    private WebTestClient webClient;

    @Autowired
    private TestRestTemplate restTemplate;

	@Test
	public void user_list() {
	    this.webClient.get().uri("/api/user/hello").exchange().expectStatus().isOk().expectBody(String.class).isEqualTo("Hello World!");
	}

    @Test
    public void login() {
        this.webClient.post()
                .uri("/api/user/login")
                .contentType(MediaType.APPLICATION_JSON)
                .accept(MediaType.APPLICATION_JSON)
                .body(BodyInserters.fromObject(new User("nabbasi","x")))
                .exchange()
                .expectStatus().isOk().expectBody(User.class);
    }

    public void login_test_template(){
        HttpEntity<User> request = new HttpEntity<>(new User("nabbasi","x"));
        ResponseEntity<User> user = this.restTemplate.postForEntity("/api/user/login", request, User.class);
        Assert.assertEquals("nabbasi", user.getBody().getUsername());
    }
}
