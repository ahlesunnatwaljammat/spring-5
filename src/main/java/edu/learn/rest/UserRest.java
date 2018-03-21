package edu.learn.rest;

import edu.learn.jpa.entities.User;
import edu.learn.jpa.repos.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
public class UserRest {

    @Autowired
    private UserRepo userRepo;

    @RequestMapping("/hello")
    @ResponseBody
    private String home() {
        return "Hello World!";
    }

    @RequestMapping("/list")
    @ResponseBody
    private List<User> wikiList() {
        return (List<User>) userRepo.findAll();
    }

    @RequestMapping(path = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    private ResponseEntity login(@RequestBody User user) {
        User loggedInUser = this.userRepo.login(user.getUsername(),user.getPassword());

        if(loggedInUser == null){
            return new ResponseEntity<>("Invalid username/password",HttpStatus.BAD_REQUEST);
        } else {
            return new ResponseEntity<>(loggedInUser, HttpStatus.OK);
        }
    }
}
