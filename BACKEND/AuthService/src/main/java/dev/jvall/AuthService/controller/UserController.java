package dev.jvall.AuthService.controller;

import dev.jvall.AuthService.model.User;
import dev.jvall.AuthService.service.UserService;
import dev.jvall.AuthService.util.JwtGeneratorInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.crossstore.ChangeSetPersister;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
@RestController
@RequestMapping("api/v1/user")
public class UserController {
    @Autowired
    private UserService userService;
    @Autowired
    private JwtGeneratorInterface jwtGenerator;

    @PostMapping("/register")
    public ResponseEntity<?> postUser(@RequestBody User user){
        try{
            userService.saveUser(user);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        } catch (Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        try {
            if(user.getUserName() == null || user.getPassword() == null) {
                throw new ChangeSetPersister.NotFoundException();
            }
            User userData = userService.getUserByNameAndPassword(user.getUserName(), user.getPassword());
            if(userData == null){
                throw new ChangeSetPersister.NotFoundException();
            }
            return new ResponseEntity<>(jwtGenerator.generateToken(user), HttpStatus.OK);
        } catch (ChangeSetPersister.NotFoundException e) {
            return new ResponseEntity<>(e.getMessage(), HttpStatus.CONFLICT);
        }
    }
}