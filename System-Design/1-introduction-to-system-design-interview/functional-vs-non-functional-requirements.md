# Functional vs. Non-Functional Requirements

For system design interviews, grasping the difference between functional and non-functional requirements is essential for demonstrating your ability to design a system that satisfies both its intended actions and its operational qualities.

---

## Functional Requirements

*   **Definition**: These requirements define the specific features and behaviors a system must support. They outline what the system is built to do.
*   **Examples**:
    *   A login system must verify user credentials and grant appropriate access permissions.
    *   An e-commerce catalog must allow users to view items, manage a shopping cart, and check out.
    *   A reporting tool must aggregate records, process metrics, and output documents on schedule.
*   **Importance in Interviews**:
    *   *Demonstrates Core Feature Comprehension*: Proves you understand the fundamental expectations and goals of the target system.
    *   *Foundation for System Architecture*: Functional requirements outline the key API endpoints and data flows that serve as the foundation of your design.

---

## Non-Functional Requirements

*   **Definition**: These specifications define *how* a system executes its functions rather than *what* functions it performs. They outline the overall quality attributes and operational constraints.
*   **Examples**:
    *   *Scalability*: The application should scale gracefully with increases in traffic, user base, or data volume.
    *   *Performance*: The system must process transactions within a target latency threshold (e.g., $< 200$ms).
    *   *Availability*: The platform should target high uptime (e.g., $99.99\%$ availability).
    *   *Security*: Sensitive data must be encrypted at rest and in transit, and protected from unauthorized queries.
*   **Importance in Interviews**:
    *   *Illustrates Architectural Depth*: Displays your familiarity with advanced distributed system engineering concepts.
    *   *Ensures Real-World Suitability*: Reflects your ability to model a system that survives real-world constraints and operational pressures.

---

## Integrating Both in Interviews

*   **Scenario-Based Mapping**: When analyzed with a problem statement, clearly separate the functional goals (what it does) from the non-functional expectations (how it behaves).
*   **The Balancing Act**: Demonstrate your capacity to trade off both categories, showing you can build a solution that satisfies functional needs while remaining performant, secure, and reliable.

---

## Strategies for Handling Requirements in the Interview

1.  **Clarify Prompt Ambiguities**: Start by asking targeted questions to pin down requirements. Interviewers frequently leave the prompt vague to test your initiative in defining the scope.
2.  **Prioritize Key Criteria**: Since you cannot design everything in 45 minutes, identify the core requirements that dictate the system's success.
3.  **Evaluate Architectural Trade-offs**: Discuss how optimizing for one attribute affects another. For instance, optimizing for extreme write throughput (like an LSM-Tree database) may impact read performance.
4.  **Reference Real-World Designs**: Anchor your choices by referencing how industry-standard systems (like Netflix, Airbnb, or Uber) or your past projects address similar trade-offs.
5.  **Maintain Equilibrium**: Avoid over-focusing on one requirement at the expense of others. A balanced, sensible approach is usually the hallmark of a senior engineer.

---

## Conclusion

Ultimately, system design interviews evaluate your approach to problem-solving rather than searching for a single perfect blueprint. Exhibiting a firm control of both functional and non-functional requirements is key to showcasing a comprehensive, well-rounded engineering maturity.
