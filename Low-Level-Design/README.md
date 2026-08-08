---
layout: default
title: Low-Level Design Guide
permalink: /Low-Level-Design/
---

# Low-Level Design (LLD) & Object-Oriented Design

Low-Level Design (LLD), also known as Object-Oriented Design (OOD), focuses on turning high-level architecture into detailed, executable software components. It defines class diagrams, interface abstractions, design patterns, schema structures, and concrete code implementations for scalable, maintainable systems.

This guide provides a structured roadmap to master Object-Oriented Programming (OOP) fundamentals, SOLID principles, GoF (Gang of Four) Design Patterns, and real-world Low-Level Design interview problems.

---

## 🗺️ Core Low-Level Design Syllabus

To help you prepare systematically, the content is organized into key focus areas:

### 1. Fundamentals & Object-Oriented Principles
*   **Encapsulation, Abstraction, Inheritance, and Polymorphism**
*   **SOLID Principles**:
    *   *Single Responsibility Principle (SRP)*
    *   *Open/Closed Principle (OCP)*
    *   *Liskov Substitution Principle (LSP)*
    *   *Interface Segregation Principle (ISP)*
    *   *Dependency Inversion Principle (DIP)*
*   **DRY (Don't Repeat Yourself) & KISS (Keep It Simple, Stupid)**

### 2. Design Patterns (GoF)
*   **Creational Patterns**: Singleton, Factory Method, Abstract Factory, Builder, Prototype.
*   **Structural Patterns**: Adapter, Decorator, Proxy, Facade, Composite, Flyweight, Bridge.
*   **Behavioral Patterns**: Strategy, Observer, Command, State, Chain of Responsibility, Iterator, Mediator, Template Method.

### 3. Real-World LLD Problem Breakdown
Below is the standard approach to solving LLD problems in software engineering interviews:

1. **Requirement Clarification & Use Cases**: Identify core features, actors, and constraints.
2. **Core Entity Identification**: List primary domain models, attributes, and relationships.
3. **Class Diagrams & Interfaces**: Define relationships (Association, Aggregation, Composition, Inheritance).
4. **Design Pattern Application**: Apply relevant patterns (e.g., Strategy for pricing, Observer for notifications).
5. **Clean Code & Extensibility**: Write modular, testable code handling concurrency and edge cases.

---

## 💡 Top Low-Level Design Interview Questions

*   **Design a Parking Lot** (Multi-floor, vehicle types, pricing strategies, ticket management)
*   **Design an Elevator System** (Dispatcher algorithm, request scheduling, multi-car coordination)
*   **Design a Rate Limiter** (Token Bucket, Leaky Bucket, Sliding Window Counter)
*   **Design an In-Memory Cache / LRU Cache** (HashMap + Doubly Linked List, thread-safe access)
*   **Design a Movie Ticket Booking System (BookMyShow)** (Seat locking, concurrency, payments)
*   **Design a Vending Machine** (State Pattern, inventory control, coin/cash processing)
*   **Design Tic-Tac-Toe / Chess Game** (Board state, move validation, turn management)
