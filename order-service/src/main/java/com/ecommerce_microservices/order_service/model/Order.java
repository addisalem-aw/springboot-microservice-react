package com.ecommerce_microservices.order_service.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.Data;
import java.util.List;

@Document(collection = "orders") // Specifies MongoDB collection name
@Data // Lombok annotation to generate getters and setters
public class Order {
    @Id
    private String id;
    private String customerId;
    private List<String> productIds;
    private double totalAmount;
}
