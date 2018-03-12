package edu.learn.demo;

import edu.learn.jpa.entities.Wiki;
import edu.learn.jpa.repos.WikiRepo;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.learn.rest"})
@EntityScan(basePackages = {"edu.learn.jpa.entities"})
@EnableJpaRepositories(basePackages = {"edu.learn.jpa.repos"})
public class DemoApplication {

    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

    @Bean
    public CommandLineRunner addSampleData(WikiRepo wikiRepo){
        return (args -> {
            // save a couple of customers
            wikiRepo.save(new Wiki("This is a wiki one"));
            wikiRepo.save(new Wiki("This is a wiki two"));

            // fetch all customers
            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (Wiki wiki : wikiRepo.findAll()) {
                log.info(wiki.toString());
            }
            log.info("");
        });
    }

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
