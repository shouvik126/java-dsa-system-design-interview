---
layout: default
title: Back-of-the-Envelope Estimations
permalink: /System-Design/1-introduction-to-system-design-interview/back-of-the-envelope-estimations/
---

# Back-of-the-Envelope Estimations

Back-of-the-envelope estimations in system design interviews represent quick, rough calculations—similar to math you might sketch on a napkin during lunch. While not highly detailed or precise, they provide a reliable ballpark figure. These calculations help you quickly evaluate the feasibility of a proposed setup, estimate its metrics, and identify potential bottlenecks.

---

## Purpose

Back-of-the-envelope estimation is a technique for quickly approximating values and conducting rough calculations via basic arithmetic and high-level assumptions. This approach is highly useful in system design interviews, where candidates must make informed decisions and architectural trade-offs based on these rough numbers.

---

## Why is Estimation Important in System Design Interviews?

When designing a scalable and reliable architecture based on ambiguous requirements, your ability to conduct quick estimations is crucial for several reasons:

*   **Indicates System Scalability**: Demonstrates your understanding of how a platform scales and handles growth.
*   **Validates Proposed Solutions**: Ensures your proposed architecture aligns with requirements and handles the anticipated load.
*   **Identifies Bottlenecks**: Pinpoints potential performance bottlenecks early so you can adjust your design.
*   **Demonstrates Your Thought Process**: Showcases how you make engineering decisions and navigate trade-offs using assumptions and constraints.
*   **Facilitates Effective Communication**: Helps you clearly explain your design choices and their operational costs to the interviewer.
*   **Supports Fast Decision Making**: Reflects your ability to make swift calculations to guide architectural choices.

---

## Estimation Techniques

### 1. Rules of Thumb
Rules of thumb are general guidelines based on experience and observation that provide quick, reasonably accurate estimates. While not exact, they offer valuable baselines in the absence of detailed data. For instance, assuming a user uploads $1$ MB of media daily on a platform provides a baseline for storage capacity planning.

### 2. Approximation
Approximation simplifies complex arithmetic by rounding numbers to values that are easier to calculate. This technique lets you derive ballpark figures quickly. For example, rounding $1,024$ down to $1,000$ when calculating server memory or user limits simplifies mental math while remaining reasonably accurate.

### 3. Breakdown and Aggregation
Deconstructing a large problem into smaller pieces and estimating each individually makes calculations more manageable. You identify key system layers, estimate their respective demands, and sum them up for the final metric. For example, estimating storage for user metadata, files, and chat history separately helps determine the total storage footprint.

### 4. Sanity Check
A sanity check is a quick verification of your estimate to ensure its plausibility. This step catches major miscalculations or misplaced decimal points. For instance, comparing your calculated storage footprint for a messaging app against the known capacity of an existing service like WhatsApp helps validate your results.

---

## Types of Estimations in System Design Interviews

*   **Load Estimation**: Estimating expected request rates (Queries Per Second, or QPS), traffic spikes, and active connection limits.
*   **Storage Estimation**: Projecting the data volume written to disk over a retention period (e.g., $1$ year or $5$ years).
*   **Bandwidth Estimation**: Calculating the network throughput required to handle incoming uploads and outgoing downloads.
*   **Latency Estimation**: Predicting response times and bottlenecks based on network distance and data-path hops.
*   **Resource Estimation**: Estimating hardware requirements, such as the count of virtual servers, CPU cores, or memory footprint.

---

## Process

1.  **Understand the Scope**: Define the scale—active users, read-to-write ratios, and data sizes.
2.  **Use Simple Math**: Keep equations basic so you do not get stuck on arithmetic details during the interview.
3.  **Round Numbers for Simplicity**: Convert values to powers of ten or easy multiples to speed up the process.
4.  **Validate Logically**: Ensure the resulting figures are realistic given the scale of the problem.

---

## Practical Examples

### 1. Load Estimation
Suppose you need to design a social platform with $100$ million Daily Active Users (DAU) who publish $10$ posts daily on average.

*   **Daily Posts**: $100\text{ million DAU} \times 10\text{ posts/user} = 1\text{ billion posts/day}$
*   **Average Write QPS**: $1\text{ billion posts} / 86,400\text{ seconds/day} \approx 11,574\text{ requests/second}$
*   **Peak QPS**: $\approx 11,574 \times 2 \approx 23,000\text{ requests/second}$

### 2. Storage Estimation
Consider a photo app with $500$ million users uploading $2$ photos per user daily on average. The average photo size is $2$ MB.

*   **Daily Storage Requirement**: $500\text{ million users} \times 2\text{ uploads/day} \times 2\text{ MB/photo} = 2,000,000,000\text{ MB/day} = 2\text{ TB/day}$

### 3. Bandwidth Estimation
For a streaming app serving $10$ million active users streaming $1080\text{p}$ video at an average bitrate of $4$ Mbps.

*   **Total Outgoing Bandwidth**: $10\text{ million users} \times 4\text{ Mbps} = 40,000,000\text{ Mbps} = 40\text{ Tbps}$

### 4. Latency Estimation
An API service queries three backend databases sequentially, taking $50$ ms, $100$ ms, and $200$ ms respectively.

*   **Sequential Latency**: $50\text{ ms} + 100\text{ ms} + 200\text{ ms} = 350\text{ ms}$
*   **Parallel Latency (if concurrent)**: $\max(50\text{ ms}, 100\text{ ms}, 200\text{ ms}) = 200\text{ ms}$

### 5. Resource Estimation
A service receives $10,000$ requests per second. Each request consumes $10$ ms of CPU thread time.

*   **Total CPU Time Required Per Second**: $10,000\text{ requests/sec} \times 10\text{ ms/request} = 100,000\text{ ms/sec}$
*   **Required CPU Cores**: $100,000\text{ ms/sec} / 1,000\text{ ms per core-sec} = 100\text{ cores}$

---

## Case Studies in Estimation

### 1. Messaging Service (e.g., WhatsApp-like)
When planning infrastructure for a chat system, evaluate these elements:
*   **User Base**: Define the Daily Active Users (DAU).
*   **Message Frequency**: Average number of messages sent per user each day.
*   **Payload Size**: Average message size (text payload vs. media files).
*   **Storage Pool**: Total space needed for message archives based on retention policies and redundancy factors.
*   **Bandwidth Capacity**: Network requirements to move message payloads dynamically.

### 2. Video Streaming Platform (e.g., Netflix-like)
When building high-capacity content delivery pipelines, estimate:
*   **Active Viewers**: Total platform users and concurrent peak viewers.
*   **Video Bitrates**: Bandwidth footprint per stream across resolutions (SD, HD, 4K).
*   **Storage Footprint**: Total space required to hold source videos, transcoded assets, and redundant CDN replicas.
*   **Network Capacity**: Total egress bandwidth needed to feed streams during peak hours.

---

## Tips for Successful Estimation in Interviews

### 1. Deconstruct the Problem
Divide complex systems into distinct layers (e.g., ingress, processing, caching, storage) to estimate requirements piece-by-piece before summing them.

### 2. State Your Assumptions Clearly
If certain variables are missing, declare reasonable assumptions (e.g., standard request sizes or read/write ratios). Stating your values aloud lets the interviewer align with your reasoning.

### 3. Know Your Latency Numbers (Reference Sheet)
Familiarize yourself with typical execution speeds for common hardware operations:

| Operation | Latency |
| :--- | :--- |
| L1 cache reference | $0.5$ ns |
| Branch mispredict | $5$ ns |
| L2 cache reference | $7$ ns |
| Mutex lock/unlock | $100$ ns |
| Main memory reference | $100$ ns |
| Compress 1 KB with Zippy | $10,000$ ns ($10\ \mu$s) |
| Send 2 KB over 1 Gbps network | $20,000$ ns ($20\ \mu$s) |
| Read 1 MB sequentially from memory | $250,000$ ns ($250\ \mu$s) |
| Round trip within same data center | $500,000$ ns ($500\ \mu$s) |
| Disk seek | $10,000,000$ ns ($10$ ms) |
| Read 1 MB sequentially from network | $10,000,000$ ns ($10$ ms) |
| Read 1 MB sequentially from disk | $30,000,000$ ns ($30$ ms) |
| Send packet CA $\rightarrow$ Netherlands $\rightarrow$ CA | $150,000,000$ ns ($150$ ms) |

### 4. Leverage Past Experience
Draw parallels to known platforms or past architectures you have worked on to establish your base metrics.

### 5. Be Ready to Adjust
If the interviewer challenges your baseline or introduces constraints, adapt your equations on the fly. This shows flexibility and critical reasoning.

### 6. Ask Clarifying Questions
If the scale is too vague, verify with the interviewer. Confirming users and request rates upfront avoids compounding calculation errors.

### 7. Think Out Loud
Always verbalize your calculations. Walking the interviewer through your math allows them to understand your reasoning and correct minor errors.

---

## Conclusion

Back-of-the-envelope estimations demonstrate your ability to size up a system's requirements and validate its architectural boundaries. Mastering this skill proves you can bridge theoretical concepts with realistic system execution requirements.
