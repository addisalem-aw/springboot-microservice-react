package com.ecommerce_microservices.user_service.repository;

import com.ecommerce_microservices.user_service.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends MongoRepository<User, String> {
    // You can add custom queries here if needed, for example:
    User findByUsername(String username);
}
