---
layout: default
title: System Design Guide
permalink: /System-Design/
next_title: "Why System Design Interview"
next_url: "/System-Design/1-introduction-to-system-design-interview/1.1-why-system-design-interview/"
---

# System Design Interview Preparation

Evaluating scalability, reliability, and architectural trade-offs under pressure is the primary focus of System Design interviews. This guide consolidates the fundamental principles utilized daily by senior backend and systems engineers—ranging from load balancing and caching strategies to database partitioning and microservices.

Here, you will learn a structured methodology to navigate open-ended architectural questions, weigh design alternatives objectively, and communicate your decisions like a lead architect. Backed by practical case studies, intuitive diagrams, and comprehensive conceptual frameworks, this resource will equip you with the skills and confidence to architect complex, high-availability systems from scratch.

---

## 🗺️ Core System Design Syllabus

To help you prepare systematically, the content is organized into key focus areas:

### 1. Introduction to System Design Interview
*   [Why System Design Interview](./1-introduction-to-system-design-interview/1.1-why-system-design-interview.md)
*   [Functional vs. Non-functional Requirements](./1-introduction-to-system-design-interview/1.2-functional-vs-non-functional-requirements.md)
*   [Back-of-the-Envelope Estimations](./1-introduction-to-system-design-interview/1.3-back-of-the-envelope-estimations.md)
*   [Things to Avoid During System Design Interview](./1-introduction-to-system-design-interview/1.4-things-to-avoid-during-system-design-interview.md)
*    Quiz

### 2. System Design Basics
*   [System Design Basics](./2-system-design-basics/2.1-system-design-basics.md)
*   [Key Characteristics of Distributed Systems](./2-system-design-basics/2.2-key-characteristics-of-distributed-systems.md)
*   [Load Balancing](./2-system-design-basics/2.3-load-balancing.md)
*   [Load Balancing Algorithms](./2-system-design-basics/2.4-load-balancing-algorithms.md)
*   [Caching](./2-system-design-basics/2.5-caching.md)
*   [Data Partitioning](./2-system-design-basics/2.6-data-partitioning.md)
*   [Indexes](./2-system-design-basics/2.7-indexes.md)
*   [Proxies](./2-system-design-basics/2.8-proxies.md)
*   [Redundancy and Replication](./2-system-design-basics/2.9-redundancy-and-replication.md)
*   [SQL vs. NoSQL](./2-system-design-basics/2.10-sql-vs-nosql.md)
*   [CAP Theorem](./2-system-design-basics/2.11-cap-theorem.md)
*   [PACELC Theorem](./2-system-design-basics/2.12-pacelec-theorem.md)
*   [Consistent Hashing](./2-system-design-basics/2.13-consistent-hashing.md)
*   [Long-Polling vs WebSockets vs Server-Sent Events](./2-system-design-basics/2.14-long-polling-vs-webSockets-vs-server-sent-events.md)
*   [Bloom Filters](./2-system-design-basics/2.15-bloom-filters.md)
*   [Quorum](./2-system-design-basics/2.16-quorum.md)
*   [Leader and Follower](./2-system-design-basics/2.17-leader-and-follower.md)
*   [Heartbeat](./2-system-design-basics/2.18-heartbeat.md)
*   [Checksum](./2-system-design-basics/2.19-checksum.md)
*    Quiz

### 3. System Design Trade-offs
*   [Importance of Discussing Trade-offs](./3-system-design-trade-offs/3.1-Importance-of-discussing-trade-offs.md)
*   [Strong vs. Eventual Consistency](./3-system-design-trade-offs/3.2-strong-vs-eventual-consistency.md)
*   [Latency vs. Throughput](./3-system-design-trade-offs/3.3-latency-vs-throughput.md)
*   [Horizontal vs. Vertical Scaling](./3-system-design-trade-offs/3.4-horizontal-vs-vertical-scaling.md)
*   [ACID vs. BASE Properties in Databases](./3-system-design-trade-offs/3.5-acid-vs-base-properties-in-databases.md)
*   [Read-Through vs. Write-Through Cache](./3-system-design-trade-offs/3.6-read-through-vs-write-through-cache.md)
*   [Batch Processing vs. Stream Processing](./3-system-design-trade-offs/3.7-batch-processing-vs-stream-processing.md)
*   [Load Balancer vs. API Gateway](./3-system-design-trade-offs/3.8-load-balancer-vs-api-gateway.md)
*   [API Gateway vs. Direct Service Exposure](./3-system-design-trade-offs/3.9-api-gateway-vs-direct-service-exposure.md)
*   [Proxy vs. Reverse Proxy](./3-system-design-trade-offs/3.10-proxy-vs-reverse-proxy.md)
*   [API Gateway vs. Reverse Proxy](./3-system-design-trade-offs/3.11-api-gateway-vs-reverse-proxy.md)
*   [SQL vs. NoSQL](./3-system-design-trade-offs/3.12-sql-vs-nosql.md)
*   [Normalization vs. Denormalization](./3-system-design-trade-offs/3.13-normalization-vs-denormalization.md)
*   [Primary-Replica vs. Peer-to-Peer Replication](./3-system-design-trade-offs/3.14-primary-replica-vs-peer-to-peer-replication.md)
*   [Data Compression vs. Data Deduplication](./3-system-design-trade-offs/3.15-data-compression-vs-data-deduplication.md)
*   [Server-Side Caching vs. Client-Side Caching](./3-system-design-trade-offs/3.16-server-side-caching-vs-client-side-caching.md)
*   [REST vs. RPC](./3-system-design-trade-offs/3.17-rest-vs-rpc.md)
*   [Synchronous vs. Asynchronous Communication](./3-system-design-trade-offs/3.18-synchronous-vs-asynchronous-communication.md)
*   [Push vs. Pull Architecture](./3-system-design-trade-offs/3.19-push-vs-pull-architecture.md)
*   [Polling vs. Long-Polling vs. WebSockets vs. Webhooks](./3-system-design-trade-offs/3.20-polling-vs-long-polling-vs-websockets-vs-webhooks.md)
*   [CDN Usage vs. Direct Server Serving](./3-system-design-trade-offs/3.21-cdn-usage-vs-direct-server-serving.md)
*   [Serverless Architecture vs. Traditional Server-Based](./3-system-design-trade-offs/3.22-serverless-architecture-vs-traditional-server-based.md)
*   [Stateful vs. Stateless Architecture](./3-system-design-trade-offs/3.23-stateful-vs-stateless-architecture.md)
*   [Token Bucket vs. Leaky Bucket](./3-system-design-trade-offs/3.24-token-bucket-vs-leaky-bucket.md)
*   [Read-Heavy vs. Write-Heavy System](./3-system-design-trade-offs/3.25-read-heavy-vs-write-heavy-system.md)
*   [Quiz](./3-system-design-trade-offs/quiz.md)

### 4. System Design Problems
*   [System Design Interviews: A Step-by-Step Guide](./4-system-design-problems/4.1-system-design-interviews-a-step-by-step-guide.md)
*   [System Design Master Template](./4-system-design-problems/4.2-system-design-master-template.md)

---

## 🛠️ Step-by-Step System Design Interview Framework

When handed an open-ended design prompt in an interview, follow this structured approach:

```mermaid
graph TD
    A[1. Clarify Requirements & Scope] --> B[2. Back-of-the-Envelope Estimation]
    B --> C[3. High-Level Design]
    C --> D[4. Deep Dive Into Core Components]
    D --> E[5. Identify Bottlenecks & Trade-offs]
```

1.  **Clarify Requirements**: Understand the functional requirements (what the system does) and non-functional requirements (scalability, latency, availability, consistency).
2.  **Back-of-the-Envelope Estimation**: Estimate DAU (Daily Active Users), QPS (Queries Per Second), storage requirements, and bandwidth requirements.
3.  **High-Level Design**: Draw block diagrams of the main components (Clients, Load Balancers, Web Servers, Database, Cache, File Storage).
4.  **Deep Dive**: Focus on specific components requested by the interviewer (e.g., database schema design, caching layer optimization, scaling a specific service).
5.  **Identify Bottlenecks**: Discuss failure points, monitoring, rate limiting, security, and single points of failure (SPOFs).
