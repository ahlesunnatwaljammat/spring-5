package edu.learn.demo;

import edu.learn.jpa.entities.User;
import edu.learn.jpa.entities.Wiki;
import edu.learn.jpa.repos.UserRepo;
import edu.learn.jpa.repos.WikiRepo;
import edu.learn.utils.WordUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import java.net.URLDecoder;

@SpringBootApplication
@ComponentScan(basePackages = {"edu.learn.rest","edu.learn.config"})
@EntityScan(basePackages = {"edu.learn.jpa.entities"})
@EnableJpaRepositories(basePackages = {"edu.learn.jpa.repos"})
public class DemoApplication {

    private static final Logger log = LoggerFactory.getLogger(DemoApplication.class);

    @Bean
    public CommandLineRunner addWikiSampleData(WikiRepo wikiRepo){
        return (args -> {
            // save a couple of customers
            for(String verb : WordUtils.randomVerbs()){
                wikiRepo.save(new Wiki(verb,"This is content for " + verb));
            }

            // fetch all wiki
            log.info("Wiki found with findAll():");
            log.info("-------------------------------");
            for (Wiki wiki : wikiRepo.findAll()) {
                log.info(wiki.toString());
            }
            log.info("");

            // fetch all containing s
            log.info("Wiki found with findByTitleContains():");
            log.info("-------------------------------");
            for (Wiki wiki : wikiRepo.findByTitleContains("e", PageRequest.of(1,10))) {
                log.info(wiki.toString());
            }
            log.info("");
        });
    }

    @Bean
    public CommandLineRunner addUsers(UserRepo userRepo){
        return (args -> {
            userRepo.save(new User("nabbasi","x"));
            userRepo.save(new User("fabbasi","x"));

            // fetch all wiki
            log.info("User found with findAll():");
            log.info("-------------------------------");
            for (User user : userRepo.findAll()) {
                log.info(user.toString());
            }
            log.info("");

            log.info("Login user");
            log.info("-------------------------------");
            User user = userRepo.login("nabbasi","x");
            log.info(user.toString());
        });
    }

	public static void main(String[] args) {
		SpringApplication.run(DemoApplication.class, args);
	}
}
