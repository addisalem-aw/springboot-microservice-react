package com.ecommerce_microservices.user_service.controller;

import com.ecommerce_microservices.user_service.model.User;
import com.ecommerce_microservices.user_service.service.UserService;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import jakarta.annotation.PostConstruct;


@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostConstruct
    public void init() {
    System.out.println(">>> UserController loaded <<<");
    }


    @PostMapping("/user")
    public User createUser(@RequestBody User user) {
        System.out.println("Received register request: " + user);
        return userService.createUser(user);
    }
    @GetMapping()
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/{username}")
    public User getUser(@PathVariable String username) {
        return userService.getUserByUsername(username);
    }

    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable String id) {
        userService.deleteUser(id);
    }
}
