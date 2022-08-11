package com.alexm.backend.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;

@Repository
public class ShoppingCartDAOImpl {
    @Autowired
    private EntityManager entityManager;

    //implementation of all methods declared in the interface.
}
