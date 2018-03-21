package edu.learn.rest;

import edu.learn.jpa.entities.Wiki;
import edu.learn.jpa.repos.WikiRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/wiki")
public class WikiRest {

    @Autowired
    private WikiRepo wikiRepo;

    @RequestMapping("/hello")
    @ResponseBody
    private String home() {
        return "Hello World!";
    }

    @RequestMapping("/list")
    @ResponseBody
    private List<Wiki> wikiList() {
        return (List<Wiki>) wikiRepo.findAll();
    }

    @RequestMapping(path = "/search/{text}")
    @ResponseBody
    private List<Wiki> searchWiki(@PathVariable String text) {
        PageRequest pageRequest = PageRequest.of(1,10);
        return wikiRepo.findByTitleContainingIgnoreCase(text,pageRequest).stream().collect(Collectors.toList());
    }

    @RequestMapping(path = "/search/page/{text}")
    @ResponseBody
    private Page<Wiki> searchWikiByPage(@PathVariable String text) {
        PageRequest pageRequest = PageRequest.of(1,10);
        return wikiRepo.findByTitleContainingIgnoreCase(text,pageRequest);
    }
}
