package edu.learn.rest;

import edu.learn.jpa.entities.Wiki;
import edu.learn.jpa.repos.WikiRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/wiki")
public class WikiRest {

    @Autowired
    private WikiRepo wikiRepo;

    @RequestMapping("/hello")
    @ResponseBody
    String home() {
        return "Hello World!";
    }

    @RequestMapping("/list")
    @ResponseBody
    List<Wiki> wikiList() {
        return (List<Wiki>) wikiRepo.findAll();
    }
}
