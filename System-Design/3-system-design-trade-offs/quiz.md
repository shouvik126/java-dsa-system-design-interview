---
layout: default
title: System Design Trade-offs Quiz
permalink: /System-Design/3-system-design-trade-offs/quiz/
prev_title: "Read-Heavy vs. Write-Heavy System"
prev_url: "/System-Design/3-system-design-trade-offs/3.24-read-heavy-vs-write-heavy-system/"
---

# System Design Trade-offs Quiz (Modules 3.1 - 3.24)

Test and reinforce your architectural trade-off knowledge with **35 System Design Interview scenario questions** covering modules 3.1 to 3.21.

---

<!-- Quiz Dashboard -->
<div class="quiz-dashboard">
  <div class="dash-stat">
    <span class="dash-label">Score</span>
    <span class="dash-value" id="quiz-score">0 / 35</span>
  </div>
  <div class="dash-stat">
    <span class="dash-label">Progress</span>
    <span class="dash-value" id="quiz-progress">0 / 35 Answered</span>
  </div>
  <div class="dash-stat">
    <span class="dash-label">Accuracy</span>
    <span class="dash-value" id="quiz-accuracy">0%</span>
  </div>
  <button class="quiz-reset-btn" onclick="resetQuiz()">
    <i class="fas fa-redo-alt"></i> Reset Quiz
  </button>
</div>

<div class="quiz-progress-bar-container">
  <div class="quiz-progress-bar" id="quiz-progress-bar" style="width: 0%;"></div>
</div>

<div id="quiz-container"></div>

<style>
/* Quiz Styling - Compatible with Light & Dark Themes */
.quiz-dashboard {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  align-items: center;
  justify-content: space-between;
  background: var(--bg-secondary, #f8fafc);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 12px;
  padding: 16px 24px;
  margin-bottom: 16px;
}

html.dark-theme .quiz-dashboard {
  background: #1e293b;
  border-color: #334155;
}

.dash-stat {
  display: flex;
  flex-direction: column;
}

.dash-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-muted, #64748b);
  font-weight: 600;
}

.dash-value {
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--text-color, #0f172a);
}

html.dark-theme .dash-value {
  color: #f8fafc;
}

.quiz-reset-btn {
  background: #3b82f6;
  color: #ffffff;
  border: none;
  padding: 10px 18px;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.1s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.quiz-reset-btn:hover {
  background: #2563eb;
  transform: translateY(-1px);
}

.quiz-progress-bar-container {
  width: 100%;
  height: 8px;
  background: var(--border-color, #e2e8f0);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 32px;
}

html.dark-theme .quiz-progress-bar-container {
  background: #334155;
}

.quiz-progress-bar {
  height: 100%;
  background: linear-gradient(90deg, #3b82f6, #10b981);
  transition: width 0.3s ease;
}

.quiz-card {
  background: var(--bg-color, #ffffff);
  border: 1px solid var(--border-color, #e2e8f0);
  border-radius: 12px;
  padding: 24px;
  margin-bottom: 28px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
  transition: border-color 0.2s ease;
}

html.dark-theme .quiz-card {
  background: #0f172a;
  border-color: #1e293b;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.3);
}

.quiz-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.quiz-topic {
  font-size: 0.82rem;
  font-weight: 600;
  color: #2563eb;
  background: rgba(37, 99, 235, 0.1);
  padding: 4px 10px;
  border-radius: 20px;
}

html.dark-theme .quiz-topic {
  color: #60a5fa;
  background: rgba(96, 165, 250, 0.15);
}

.quiz-qnum {
  font-size: 0.85rem;
  color: var(--text-muted, #64748b);
  font-weight: 500;
}

.quiz-question {
  font-size: 1.1rem;
  font-weight: 600;
  margin-top: 6px;
  margin-bottom: 20px;
  color: var(--text-color, #0f172a);
  line-height: 1.5;
}

html.dark-theme .quiz-question {
  color: #f1f5f9;
}

.quiz-options {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.quiz-opt {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  width: 100%;
  text-align: left;
  background: var(--bg-secondary, #f8fafc);
  border: 1.5px solid var(--border-color, #e2e8f0);
  border-radius: 10px;
  padding: 14px 16px;
  font-size: 0.95rem;
  color: var(--text-color, #334155);
  cursor: pointer;
  transition: all 0.2s ease;
}

html.dark-theme .quiz-opt {
  background: #1e293b;
  border-color: #334155;
  color: #cbd5e1;
}

.quiz-opt:hover:not(:disabled) {
  border-color: #3b82f6;
  background: rgba(59, 130, 246, 0.05);
}

html.dark-theme .quiz-opt:hover:not(:disabled) {
  border-color: #60a5fa;
  background: rgba(96, 165, 250, 0.1);
}

.opt-letter {
  font-weight: 700;
  background: var(--border-color, #cbd5e1);
  color: #0f172a;
  width: 26px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  flex-shrink: 0;
  font-size: 0.85rem;
}

html.dark-theme .opt-letter {
  background: #475569;
  color: #f8fafc;
}

.opt-text {
  line-height: 1.45;
  flex-grow: 1;
}

/* Correct Option State */
.quiz-opt.opt-correct {
  background: #dcfce7 !important;
  border-color: #16a34a !important;
  color: #14532d !important;
}

.quiz-opt.opt-correct .opt-letter {
  background: #16a34a !important;
  color: #ffffff !important;
}

html.dark-theme .quiz-opt.opt-correct {
  background: rgba(22, 163, 74, 0.2) !important;
  border-color: #22c55e !important;
  color: #86efac !important;
}

html.dark-theme .quiz-opt.opt-correct .opt-letter {
  background: #22c55e !important;
  color: #0f172a !important;
}

/* Incorrect Option State */
.quiz-opt.opt-incorrect {
  background: #fee2e2 !important;
  border-color: #dc2626 !important;
  color: #7f1d1d !important;
}

.quiz-opt.opt-incorrect .opt-letter {
  background: #dc2626 !important;
  color: #ffffff !important;
}

html.dark-theme .quiz-opt.opt-incorrect {
  background: rgba(220, 38, 38, 0.2) !important;
  border-color: #ef4444 !important;
  color: #fca5a5 !important;
}

html.dark-theme .quiz-opt.opt-incorrect .opt-letter {
  background: #ef4444 !important;
  color: #ffffff !important;
}

/* Explanation Box */
.quiz-explanation {
  margin-top: 18px;
  padding: 16px;
  border-radius: 10px;
  font-size: 0.93rem;
  line-height: 1.55;
  display: none;
}

.quiz-explanation.exp-right {
  background: #f0fdf4;
  border: 1px solid #86efac;
  color: #166534;
}

html.dark-theme .quiz-explanation.exp-right {
  background: rgba(22, 163, 74, 0.15);
  border-color: #22c55e;
  color: #bbf7d0;
}

.quiz-explanation.exp-wrong {
  background: #fef2f2;
  border: 1px solid #fca5a5;
  color: #991b1b;
}

html.dark-theme .quiz-explanation.exp-wrong {
  background: rgba(220, 38, 38, 0.15);
  border-color: #ef4444;
  color: #fecaca;
}

.exp-header {
  font-weight: 700;
  font-size: 1rem;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}

.exp-body {
  margin-top: 6px;
}
</style>

<script>
const quizQuestions = [
  {
    id: 1,
    topic: "3.1 Importance of Discussing Trade-offs",
    question: "During a system design interview, a candidate is asked to build a global payment service and immediately responds: 'We should use DynamoDB because it scales infinitely.' How will a principal engineer evaluation grade this response?",
    options: {
      A: "Positively, because choosing a high-scalability NoSQL database demonstrates awareness of modern cloud standards.",
      B: "Negatively (Red Flag), because prescribing a technology before clarifying ACID requirements, read/write patterns, and consistency trade-offs skips essential architectural analysis.",
      C: "Positively, because DynamoDB provides zero-latency multi-region sync for monetary transactions.",
      D: "Negatively, solely because PostgreSQL is the only database allowed for financial applications."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. System design interviews evaluate architectural reasoning and trade-off analysis, not premature technology selection based on scalability buzzwords.",
      B: "Option B is correct! In system design interviews, prescribing a tech stack before analyzing access patterns, ACID guarantees, and operational trade-offs is a major red flag. There are no silver bullets; every choice involves trade-offs.",
      C: "Option C is incorrect. Multi-region database synchronization introduces network latency and consistency trade-offs (e.g. eventual consistency vs strong consistency), not 'zero-latency'.",
      D: "Option D is incorrect. While SQL databases are popular for finance, NoSQL or hybrid ledgers can be used if designed properly. The flaw was jumping to a technology without evaluating trade-offs."
    }
  },
  {
    id: 2,
    topic: "3.2 Strong vs. Eventual Consistency",
    question: "A banking system processes account balance transfers where a user deposits $100 and immediately checks their balance from a different application instance. The read must ALWAYS reflect the $100 deposit. Which consistency model is strictly required?",
    options: {
      A: "Eventual Consistency, because data converges across replicas within a few seconds.",
      B: "Strong Consistency (Linearizability), ensuring every read receives the most recent write or an error.",
      C: "Causal Consistency, which guarantees non-causal reads are ordered randomly.",
      D: "Weak Consistency without read-after-write guarantees."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Eventual consistency allows stale reads for a period of time, which can show an incorrect bank balance after a deposit.",
      B: "Option B is correct! Financial ledgers require Strong Consistency (Linearizability) so that once a write succeeds, all subsequent reads across all nodes immediately return the updated value.",
      C: "Option C is incorrect. Causal consistency preserves cause-and-effect ordering but does not guarantee instantaneous global linearizability across concurrent operations.",
      D: "Option D is incorrect. Weak consistency provides no time bounds on when writes become visible, risking financial double-spending."
    }
  },
  {
    id: 3,
    topic: "3.2 Strong vs. Eventual Consistency",
    question: "A global social platform displays user follower counts. The team prioritizes low write latency and 99.999% availability over exact real-time accuracy across regions. Which trade-off strategy fits best?",
    options: {
      A: "Strong Consistency using Synchronous 2-Phase Commit across all global regions.",
      B: "Eventual Consistency using Asynchronous Multi-Region Replication and Read Repair / Background Convergence.",
      C: "Strict Serializability with single-leader bottlenecks.",
      D: "Disabling replication entirely to prevent data sync overhead."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Synchronous 2PC across global regions drastically increases write latency and decreases availability (violating CAP availability if WAN links fail).",
      B: "Option B is correct! Follower counts do not require real-time linearizability. Eventual consistency allows ultra-fast local writes, asynchronous background sync, and high availability.",
      C: "Option C is incorrect. Strict serializability forces all transactions into a single sequence globally, creating massive latency bottlenecks.",
      D: "Option D is incorrect. Disabling replication removes fault tolerance and high availability."
    }
  },
  {
    id: 4,
    topic: "3.3 Latency vs. Throughput",
    question: "A video processing system increases its data batch size from 10 MB to 500 MB before sending data down the pipeline. What is the expected impact on Latency and Throughput?",
    options: {
      A: "Latency decreases; Throughput decreases.",
      B: "Latency increases; Throughput increases.",
      C: "Latency decreases; Throughput increases.",
      D: "Latency increases; Throughput decreases."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Accumulating a larger batch takes longer, increasing latency, while batching reduces protocol overhead to increase throughput.",
      B: "Option B is correct! Batching trades individual request latency for higher overall throughput. Accumulating 500MB delays individual items (higher latency), but processes more total bytes per second by amortizing overhead.",
      C: "Option C is incorrect. Waiting to accumulate 500MB cannot decrease latency for the first item in the batch.",
      D: "Option D is incorrect. Batching improves throughput efficiency by reducing per-record network and I/O header overhead."
    }
  },
  {
    id: 5,
    topic: "3.3 Latency vs. Throughput",
    question: "An algorithmic trading platform demands p99 network latency under 1 millisecond. Which architectural optimization directly serves this low-latency goal?",
    options: {
      A: "Aggressive micro-batching of trade orders over 5-second windows.",
      B: "Disabling Nagle's algorithm (TCP_NODELAY) and processing requests immediately item-by-item.",
      C: "Gzip compressing small 100-byte payloads to save bandwidth.",
      D: "Writing all orders to cold archival storage synchronously before processing."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Micro-batching over 5 seconds introduces up to 5,000ms latency, violating the <1ms target.",
      B: "Option B is correct! Setting `TCP_NODELAY` disables TCP buffering (Nagle's algorithm), sending packets immediately to minimize latency at the cost of sending more small packets (slightly lower throughput efficiency).",
      C: "Option C is incorrect. CPU compression overhead on 100-byte payloads adds microsecond latency penalties without bandwidth benefit.",
      D: "Option D is incorrect. Disk I/O synchronous writes introduce several milliseconds of latency."
    }
  },
  {
    id: 6,
    topic: "3.5 ACID vs. BASE Properties in Databases",
    question: "Which database property guarantee ensures that if a multi-step financial transaction fails on step 4 of 5, all previous changes are completely rolled back as if the transaction never occurred?",
    options: {
      A: "Atomicity (ACID)",
      B: "Basic Availability (BASE)",
      C: "Soft State (BASE)",
      D: "Eventually Consistent (BASE)"
    },
    correct: "A",
    explanations: {
      A: "Option A is correct! Atomicity guarantees an 'all-or-nothing' execution. If any operation within a transaction fails, the database rolls back all partial modifications.",
      B: "Option B is incorrect. Basic Availability ensures system availability under faults but does not manage transaction rollbacks.",
      C: "Option C is incorrect. Soft State means data may change over time without explicit user input due to eventual consistency.",
      D: "Option D is incorrect. Eventual consistency is a replication model, not an all-or-nothing transaction rollback guarantee."
    }
  },
  {
    id: 7,
    topic: "3.5 ACID vs. BASE Properties in Databases",
    question: "What does 'Soft State' specifically imply in a distributed BASE-compliant NoSQL database like Apache Cassandra?",
    options: {
      A: "Data is stored in volatile RAM and lost upon server restart.",
      B: "The state of the data can change over time even without active write requests due to background anti-entropy sync.",
      C: "Database schemas can be modified at runtime without locking tables.",
      D: "Transactions are executed in soft memory buffers before flushing to WAL."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Soft State does not mean volatile or unpersisted RAM storage.",
      B: "Option B is correct! Soft State in BASE indicates that replica states continuously evolve and converge in the background (via read-repair, hint handoff, or Merkle trees) even when no new client writes occur.",
      C: "Option C is incorrect. Dynamic schema modification is a NoSQL feature, but not the definition of 'Soft State'.",
      D: "Option D is incorrect. Buffer flushing relates to write-ahead logging (WAL), not the BASE Soft State definition."
    }
  },
  {
    id: 8,
    topic: "3.6 Read-Through vs. Write-Through Cache",
    question: "In a caching architecture, the application queries the cache layer directly. If a cache miss occurs, the CACHE LAYER itself synchronously fetches data from the database, populates itself, and returns the result to the application. What pattern is this?",
    options: {
      A: "Cache-Aside (Lazy Loading)",
      B: "Read-Through Cache",
      C: "Write-Behind (Write-Back) Cache",
      D: "Write-Around Cache"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. In Cache-Aside, the application itself fetches from the DB on a cache miss and writes data to the cache.",
      B: "Option B is correct! In a Read-Through cache, the application treats the cache as the primary store; on a miss, the cache transparently loads missing keys from the underlying database.",
      C: "Option C is incorrect. Write-Behind handles asynchronous writes, not read misses.",
      D: "Option D is incorrect. Write-Around writes directly to DB bypassing cache."
    }
  },
  {
    id: 9,
    topic: "3.6 Read-Through vs. Write-Through Cache",
    question: "What is the primary trade-off of using a Write-Through caching strategy compared to a Write-Back (Write-Behind) caching strategy?",
    options: {
      A: "Write-Through has lower write latency because writes are stored asynchronously.",
      B: "Write-Through has higher write latency due to synchronous DB writes, but guarantees zero data loss on node failure.",
      C: "Write-Through causes stale reads because the cache is updated after 10 minutes.",
      D: "Write-Through bypasses the cache completely on writes."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Write-Back has lower write latency because it writes asynchronously; Write-Through is synchronous.",
      B: "Option B is correct! Write-Through writes to both cache and database synchronously before returning success. This increases write latency but eliminates data loss risks associated with volatile memory crashes in Write-Back.",
      C: "Option C is incorrect. Write-Through ensures cache freshness since updates happen immediately upon write.",
      D: "Option D is incorrect. Writing directly to DB bypassing cache is 'Write-Around'."
    }
  },
  {
    id: 10,
    topic: "3.6 Batch Processing vs. Stream Processing",
    question: "A credit card fraud detection system must flag stolen card activity within 50 milliseconds of transaction execution. Which data processing paradigm is mandatory?",
    options: {
      A: "Batch Processing with MapReduce running hourly jobs.",
      B: "Stream Processing using an event-driven framework like Apache Flink or Kafka Streams.",
      C: "Micro-batching with 15-minute intervals.",
      D: "Nightly ETL pipelines."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Hourly MapReduce batch jobs introduce up to 60 minutes of latency, letting fraudulent charges pass.",
      B: "Option B is correct! Real-time fraud detection requires Stream Processing, where events are evaluated continuously item-by-item with millisecond latencies.",
      C: "Option C is incorrect. 15-minute micro-batching is far too slow for real-time payment blocking (<50ms).",
      D: "Option D is incorrect. Nightly ETL runs long after transactions have completed."
    }
  },
  {
    id: 11,
    topic: "3.7 Batch Processing vs. Stream Processing",
    question: "Which of the following scenarios is BEST suited for Batch Processing rather than Stream Processing?",
    options: {
      A: "Real-time user clickstream tracking for instant live recommendations.",
      B: "Calculating monthly payroll tax deductions across 10 million historical employee records.",
      C: "Monitoring server CPU temperature alerts every second.",
      D: "Live chat messaging delivery."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Real-time recommendation updates rely on low-latency stream processing.",
      B: "Option B is correct! Monthly payroll calculations operate on bounded, static datasets where high throughput and exact completeness are required, making high-efficiency batch processing ideal.",
      C: "Option C is incorrect. Per-second temperature alert triggers require real-time stream processing.",
      D: "Option D is incorrect. Live chat messaging is an interactive stream."
    }
  },
  {
    id: 12,
    topic: "3.7 Load Balancer vs. API Gateway",
    question: "You need a component that handles JWT token verification, API rate limiting per user, request path rewriting (`/v1/users` -> `/userService`), and response transformation. Which component should you choose?",
    options: {
      A: "Layer 4 Network Load Balancer (NLB)",
      B: "API Gateway",
      C: "DNS Round-Robin",
      D: "Hardware Switch"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. L4 Load Balancers operate at IP/TCP layers without understanding HTTP headers, JWT tokens, or paths.",
      B: "Option B is correct! An API Gateway operates at Layer 7 and provides advanced application-level features like authentication, rate limiting, request routing, and payload transformation.",
      C: "Option C is incorrect. DNS Round-Robin only maps domain names to IP addresses.",
      D: "Option D is incorrect. Hardware switches forward Ethernet packets at Layer 2/3."
    }
  },
  {
    id: 13,
    topic: "3.8 Load Balancer vs. API Gateway",
    question: "What is the key functional difference between a Layer 4 (L4) Load Balancer and a Layer 7 (L7) API Gateway?",
    options: {
      A: "L4 inspects HTTP headers and JSON bodies, while L7 only inspects IP addresses.",
      B: "L4 routes traffic based on TCP/UDP packet info with higher speed and lower CPU overhead; L7 inspects HTTP/application content.",
      C: "L4 provides rate-limiting and OAuth authentication, while L7 does not.",
      D: "L4 can only route HTTPS traffic, whereas L7 handles raw TCP."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. It reverses the roles: L7 inspects application headers/payloads, L4 operates on IP/TCP.",
      B: "Option B is correct! L4 load balancers route packets based on transport layer metrics (IP and Port) without parsing HTTP, yielding maximum packet throughput. L7 API Gateways parse HTTP/S payloads for rich routing.",
      C: "Option C is incorrect. L7 gateways handle rate-limiting and OAuth; L4 load balancers cannot parse app tokens.",
      D: "Option D is incorrect. L4 handles raw TCP/UDP, whereas L7 handles application protocols like HTTP/HTTPS."
    }
  },
  {
    id: 14,
    topic: "3.9 API Gateway vs. Direct Service Exposure",
    question: "Exposing 30 internal microservices directly to client mobile applications via public IP addresses (without an API Gateway) introduces which severe architectural downside?",
    options: {
      A: "Reduced network hops for every request.",
      B: "High client-service tight coupling, duplicate security/auth code across services, and exposed internal network topology.",
      C: "Inability to use gRPC internally.",
      D: "Excessive centralization of microservice deployments."
    },
    correct: "B",
    explanations: {
      A: "Option A is a potential minor benefit (1 fewer hop), but far outweighed by security and maintainability risks.",
      B: "Option B is correct! Direct service exposure forces clients to manage 30 distinct endpoints, duplicates authentication and CORS logic across all 30 microservices, and leaks internal infrastructure topology to the public internet.",
      C: "Option C is incorrect. gRPC can be used with or without an API gateway.",
      D: "Option D is incorrect. Direct exposure decentralizes endpoints, creating a fragmented attack surface."
    }
  },
  {
    id: 15,
    topic: "3.10 Proxy vs. Reverse Proxy",
    question: "An IT department routes all outbound web traffic from internal employee workstations through a dedicated gateway to inspect outgoing requests, filter restricted domain names, and mask internal IP addresses. What is this server?",
    options: {
      A: "Forward Proxy",
      B: "Reverse Proxy",
      C: "API Gateway",
      D: "Load Balancer"
    },
    correct: "A",
    explanations: {
      A: "Option A is correct! A Forward Proxy acts on behalf of **clients** (employees) to manage outbound requests to the internet, providing client anonymity, content filtering, and egress security.",
      B: "Option B is incorrect. A Reverse Proxy acts on behalf of **servers** to intercept incoming inbound traffic from the internet.",
      C: "Option C is incorrect. API Gateways manage microservice API traffic rather than employee web browsing.",
      D: "Option D is incorrect. Load balancers distribute inbound server requests."
    }
  },
  {
    id: 16,
    topic: "3.11 API Gateway vs. Reverse Proxy",
    question: "An organization uses Nginx as a reverse proxy for SSL termination and static asset caching. Why might they introduce a dedicated API Gateway (e.g. Kong or Apigee) behind Nginx?",
    options: {
      A: "Because Nginx cannot handle TCP connections.",
      B: "To manage complex application API workflows like developer key management, request quota billing, dynamic policy enforcement, and backend API composition.",
      C: "Because Reverse Proxies cannot perform TLS termination.",
      D: "To eliminate the need for microservices."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Nginx is extremely proficient at TCP load balancing.",
      B: "Option B is correct! Reverse proxies (Nginx/HAProxy) excel at infrastructure networking (SSL, basic routing, byte caching). API Gateways layer on business API features like OAuth token introspection, monetization quotas, dynamic rate-limiting, and developer portals.",
      C: "Option C is incorrect. Nginx is widely used precisely for TLS termination.",
      D: "Option D is incorrect. API Gateways assist microservices, not replace them."
    }
  },
  {
    id: 17,
    topic: "3.11 SQL vs. NoSQL Databases",
    question: "An e-commerce order management system requires multi-table ACID transactions (e.g., deducting inventory, recording order history, charging user wallet) where partial updates must never occur. Which database model is best suited?",
    options: {
      A: "Key-Value NoSQL Store (e.g., Redis)",
      B: "Relational SQL Database (e.g., PostgreSQL)",
      C: "Document NoSQL Database (e.g., MongoDB without multi-doc transactions)",
      D: "Wide-Column Cassandra Store"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Key-value stores lack relational schemas and multi-table ACID transaction safety.",
      B: "Option B is correct! Relational SQL databases provide mature, robust ACID transactions across normalized multi-table schema relations, making them the standard choice for financial/order processing.",
      C: "Option C is incorrect. Basic document stores lack full cross-collection ACID guarantees.",
      D: "Option D is incorrect. Cassandra prioritizes high-throughput writes and horizontal partition scaling over multi-table ACID transactions."
    }
  },
  {
    id: 18,
    topic: "3.11 SQL vs. NoSQL Databases",
    question: "A high-throughput IoT platform collects telemetry data from 500,000 sensors writing 2,000,000 metrics per second worldwide. The schema varies by sensor type and writes heavily outnumber reads. Which database paradigm fits best?",
    options: {
      A: "Relational SQL database with strict foreign key constraints and normalized tables.",
      B: "Wide-Column NoSQL database (e.g., Apache Cassandra / ScyllaDB) with horizontal partition scaling.",
      C: "SQLite single-file embedded database.",
      D: "XML file storage."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Relational SQL databases struggle with multi-million write/sec horizontal scaling and rigid schema changes across varying sensor payloads.",
      B: "Option B is correct! Wide-column NoSQL databases like Cassandra excel at massive horizontal scale, write-heavy ingestion (LSM-trees), dynamic schemas, and peer-to-peer distribution.",
      C: "Option C is incorrect. SQLite cannot handle distributed multi-instance write ingestion.",
      D: "Option D is incorrect. XML file storage lacks queryability and performance."
    }
  },
  {
    id: 19,
    topic: "3.13 Primary-Replica vs. Peer-to-Peer Replication",
    question: "In a Primary-Replica (Single-Leader) database architecture with asynchronous replication, what happens if the Primary leader node crashes before replicating the latest write to any replica?",
    options: {
      A: "The write is automatically recovered from the replica via reverse sync.",
      B: "Failover promotes a replica to leader, but the unreplicated write is lost (Data Loss / Split-Brain risk).",
      C: "The database immediately halts all read operations globally.",
      D: "Replicas automatically reconstruct the write using hash checksums."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Replicas never received the data, so reverse sync cannot recover it.",
      B: "Option B is correct! Under asynchronous primary-replica setup, writes return success once committed to the leader. If the leader fails before async replication completes, promoting a follower results in data loss.",
      C: "Option C is incorrect. Replicas can still serve reads, though reads may be slightly stale.",
      D: "Option D is incorrect. Checksums verify integrity of existing data; they cannot recreate missing records."
    }
  },
  {
    id: 20,
    topic: "3.13 Primary-Replica vs. Peer-to-Peer Replication",
    question: "A Peer-to-Peer (Leaderless / Dynamo-style) multi-region datastore allows clients to write to any node concurrently. What trade-off mechanism must the system implement to resolve conflicting concurrent writes to the same key?",
    options: {
      A: "Single-threaded locks on the client machine.",
      B: "Conflict resolution techniques such as Last-Write-Wins (LWW), Vector Clocks, or Conflict-Free Replicated Data Types (CRDTs).",
      C: "Synchronous global database rebooting.",
      D: "Rejecting all concurrent writes."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Client-side locks cannot enforce synchronization across distributed independent write clients.",
      B: "Option B is correct! Leaderless replication accepts concurrent writes on different nodes, creating write conflicts. Systems use timestamps (LWW), logical clocks (Vector Clocks), or CRDTs to merge or resolve conflicts during reads or background reconciliation.",
      C: "Option C is incorrect. Global rebooting destroys system availability.",
      D: "Option D is incorrect. Leaderless stores prioritize write availability rather than rejecting writes."
    }
  },
  {
    id: 21,
    topic: "3.14 Data Compression vs. Data Deduplication",
    question: "An enterprise cloud backup service stores 50,000 virtual machine disk images. Analysis reveals that 90% of operating system blocks are identical across all virtual machines. Which technique delivers the highest storage reduction for this specific scenario?",
    options: {
      A: "Data Compression (e.g. Gzip/Zstd) applied independently to each VM file.",
      B: "Data Deduplication (Chunk-level hashing and single-instance block storage).",
      C: "Base64 encoding of VM files.",
      D: "RAID 1 disk mirroring."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Gzip compression reduces intra-file bit redundancy within a single VM, but cannot detect identical blocks across 50,000 separate files.",
      B: "Option B is correct! Data Deduplication identifies identical data chunks across different files/disks by content hash, storing duplicate chunks only once. For VM backups with redundant OS files, deduplication achieves massive (10x-50x) storage savings.",
      C: "Option C is incorrect. Base64 encoding increases file size by ~33%.",
      D: "Option D is incorrect. RAID 1 mirrors data, doubling storage consumption."
    }
  },
  {
    id: 22,
    topic: "3.15 Server-Side Caching vs. Client-Side Caching",
    question: "An e-commerce site wants to ensure that static product assets (CSS, JS, product images) load instantly for returning users without generating any HTTP requests to the backend server. Which approach achieves this?",
    options: {
      A: "Server-side Redis cluster caching.",
      B: "Client-side Browser Caching configured with HTTP `Cache-Control: max-age=31536000, immutable` headers.",
      C: "Database read replicas.",
      D: "Write-through caching."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Server-side Redis still requires the browser to make a network request to the backend server.",
      B: "Option B is correct! Client-side browser caching stores static assets locally on the user's device. When properly configured with `Cache-Control` headers, repeat requests are served directly from disk/memory cache without touching the network.",
      C: "Option C is incorrect. Read replicas handle backend DB queries, not client network requests.",
      D: "Option D is incorrect. Write-through cache manages server write operations."
    }
  },
  {
    id: 23,
    topic: "3.15 Server-Side Caching vs. Client-Side Caching",
    question: "What is the primary advantage of Server-Side Caching (e.g. Memcached/Redis) over Client-Side Caching for dynamic user data?",
    options: {
      A: "Server-side caching works offline without internet connectivity.",
      B: "Server-side cache is shared across all application users, allowing one user's cache-populating request to benefit millions of subsequent users.",
      C: "Server-side caching reduces client device RAM consumption.",
      D: "Server-side caching bypasses all database operations permanently."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Server-side caching requires network connectivity to reach the cache servers.",
      B: "Option B is correct! Shared server-side caches (Redis/Memcached) act as a centralized data layer. Once a hot item (e.g., breaking news post) is cached on the server, all connected users benefit from fast cached reads.",
      C: "Option C is incorrect. Client RAM savings are a side effect, but not the core architectural benefit for shared data.",
      D: "Option D is incorrect. Caches expire or miss, requiring database fallbacks."
    }
  },
  {
    id: 24,
    topic: "3.16 REST vs. RPC (gRPC)",
    question: "A high-frequency internal microservices ecosystem requires low serialization latency, compact binary payload formats, and strict typed API contracts defined via Protocol Buffers over HTTP/2. Which communication technology should be used?",
    options: {
      A: "REST with JSON payloads over HTTP/1.1",
      B: "gRPC (RPC framework utilizing Protocol Buffers and HTTP/2)",
      C: "SOAP over XML",
      D: "Webhooks with JSON post bodies"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. REST with JSON uses text serialization and HTTP/1.1 headers, introducing higher latency and payload overhead compared to binary gRPC.",
      B: "Option B is correct! gRPC leverages Protocol Buffers (binary serialization) and HTTP/2 multiplexing, delivering significantly higher performance, lower CPU serialization cost, and strict type safety for internal microservice RPCs.",
      C: "Option C is incorrect. SOAP XML is verbose and slow to parse.",
      D: "Option D is incorrect. Webhooks are asynchronous push notifications, not synchronous IPC."
    }
  },
  {
    id: 25,
    topic: "3.19 Polling vs. Long-Polling vs. WebSockets vs. Webhooks",
    question: "A real-time online collaborative whiteboard app requires full-duplex, bi-directional, ultra-low latency interaction between hundreds of concurrent clients and the server over a single persistent TCP connection. Which technology is required?",
    options: {
      A: "Short Polling every 5 seconds",
      B: "HTTP Long-Polling",
      C: "WebSockets",
      D: "Webhooks"
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. Short polling introduces up to 5s delay and generates massive empty HTTP request overhead.",
      B: "Option B is incorrect. Long-polling is half-duplex and incurs HTTP header overhead on every reconnect cycle.",
      C: "Option C is correct! WebSockets upgrade HTTP to a persistent, full-duplex TCP stream, enabling instantaneous bi-directional message exchange with negligible frame overhead.",
      D: "Option D is incorrect. Webhooks push events server-to-server, not client browser rendering."
    }
  },
  {
    id: 26,
    topic: "3.19 Polling vs. Long-Polling vs. WebSockets vs. Webhooks",
    question: "A payment gateway (e.g. Stripe) needs to inform an external merchant backend server whenever a customer successfully completes a payment asynchronously hours after checkout. What is the standard event-driven pattern?",
    options: {
      A: "Stripe short-polls the merchant server every 2 seconds.",
      B: "The merchant server opens a 24-hour WebSocket connection to Stripe.",
      C: "Stripe sends an asynchronous HTTP POST request to a pre-registered merchant callback URL (Webhook).",
      D: "The merchant server reads Stripe's database directly."
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. Payment gateways do not poll merchant servers.",
      B: "Option B is incorrect. Maintaining persistent WebSockets for rare, async payment events wastes server resources.",
      C: "Option C is correct! Webhooks are event-driven HTTP callbacks. When an event occurs (payment completion), the provider sends an HTTP POST payload to the consumer's registered endpoint.",
      D: "Option D is incorrect. Direct database access violates service encapsulation boundaries."
    }
  },
  {
    id: 27,
    topic: "3.19 Polling vs. Long-Polling vs. WebSockets vs. Webhooks",
    question: "What is the primary operational problem with Short Polling (e.g., client asking `/checkStatus` every 1 second) in a high-scale system?",
    options: {
      A: "It requires persistent open socket handles on the load balancer.",
      B: "Over 90% of requests return 304/empty responses, wasting CPU, network bandwidth, and database connections.",
      C: "It is incompatible with mobile applications.",
      D: "It causes memory leaks on client browsers."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Short polling opens and closes standard HTTP requests; WebSockets hold open persistent handles.",
      B: "Option B is correct! Short polling generates relentless HTTP request/response cycles regardless of whether new data exists. At scale, millions of empty poll requests overwhelm backend servers.",
      C: "Option C is incorrect. Short polling works on mobile, but drains battery.",
      D: "Option D is incorrect. Short polling does not inherently cause memory leaks."
    }
  },
  {
    id: 28,
    topic: "3.20 CDN Usage vs. Direct Server Serving",
    question: "A media streaming platform serves static 4K video segments to millions of users spread across Asia, Europe, and America. Serving all video traffic directly from a central AWS us-east-1 origin server results in high latency for Asian users. How does a Content Delivery Network (CDN) solve this?",
    options: {
      A: "By re-encoding video files into smaller ZIP archives automatically.",
      B: "By caching static video segments at Edge PoPs (Points of Presence) geographically close to end users.",
      C: "By converting HTTP requests into gRPC binary calls.",
      D: "By disabling TLS encryption on video files."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. CDNs store and deliver content; they do not arbitrary ZIP video files.",
      B: "Option B is correct! CDNs deploy Edge Point of Presence (PoP) servers globally. Static video content is cached at edge locations close to users, dramatically reducing latency (RTT) and shielding origin servers from traffic spikes.",
      C: "Option C is incorrect. CDNs serve media via standard HTTP/HTTPS/HLS protocols.",
      D: "Option D is incorrect. CDNs support TLS encryption at the edge."
    }
  },
  {
    id: 29,
    topic: "3.21 Serverless Architecture vs. Traditional Server-Based",
    question: "A startup builds an image processing microservice that runs only 50 times per day on average, but occasionally bursts to 5,000 invocations during marketing campaigns. Idle periods can last for hours. Which deployment model minimizes cost?",
    options: {
      A: "Provisioning a cluster of 4 dedicated AWS EC2 instances running 24/7.",
      B: "Serverless Functions (e.g. AWS Lambda / Cloud Functions) with scale-to-zero pricing.",
      C: "Deploying a dedicated Kubernetes cluster with 3 master nodes.",
      D: "Bare-metal dedicated server rental."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Dedicated EC2 instances bill 24/7 even during hours of complete idle time.",
      B: "Option B is correct! Serverless architecture offers true 'scale-to-zero' billing: you only pay for exact execution milliseconds when functions are invoked, making it extremely cost-effective for sporadic, unpredictable workloads.",
      C: "Option C is incorrect. Running a Kubernetes control plane 24/7 introduces fixed infrastructure costs.",
      D: "Option D is incorrect. Bare-metal servers incur fixed monthly lease costs."
    }
  },
  {
    id: 30,
    topic: "3.21 Serverless Architecture vs. Traditional Server-Based",
    question: "What is a major architectural downside of Serverless Functions (e.g. AWS Lambda) for ultra-low latency, persistent connection applications?",
    options: {
      A: "Serverless functions cannot process JSON data.",
      B: "Cold Start latencies when instantiating new execution containers, stateless execution limits (no local persistent RAM), and execution timeout caps.",
      C: "Inability to scale past 10 total users.",
      D: "Requirement to write all code in C++."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Serverless functions process JSON natively.",
      B: "Option B is correct! Serverless functions suffer from 'cold starts' when scaling up new container runtimes, are strictly stateless (cannot hold persistent in-memory TCP socket pools long-term), and enforce maximum execution timeouts (e.g. 15 mins).",
      C: "Option C is incorrect. Serverless functions scale out to thousands of concurrent executions automatically.",
      D: "Option D is incorrect. Serverless supports Node.js, Java, Python, Go, etc."
    }
  },
  {
    id: 31,
    topic: "3.22 Stateful vs. Stateless Architecture",
    question: "You are designing an auto-scaling REST API layer behind a Round-Robin Load Balancer. To ensure that ANY user request can be handled by ANY backend instance seamlessly, how should user session state be managed?",
    options: {
      A: "Store session data in the local RAM memory of the specific backend instance that logged the user in.",
      B: "Adopt a Stateless architecture where session tokens (JWT) or session IDs are sent with each request, and session data is stored in a centralized shared datastore (e.g. Redis).",
      C: "Enable sticky sessions on the load balancer and disable server autoscaling.",
      D: "Store session data in client browser cookies without encryption."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Storing sessions in server local RAM makes the server stateful; if that instance crashes or autoscales down, user sessions are lost.",
      B: "Option B is correct! In a Stateless service architecture, backend servers hold no client session state in local memory. State is offloaded to a shared cache (Redis) or client tokens (JWT), allowing servers to be added or destroyed dynamically without breaking requests.",
      C: "Option C is incorrect. Sticky sessions degrade load balancing uniformity and complicate autoscaling.",
      D: "Option D is incorrect. Unencrypted sensitive cookies present severe security risks."
    }
  },
  {
    id: 32,
    topic: "3.22 Stateful vs. Stateless Architecture",
    question: "Which of the following application types INHERENTLY requires a Stateful Architecture?",
    options: {
      A: "A public RESTful weather reporting API.",
      B: "A low-latency online multiplayer gaming server maintaining continuous player position state and physics calculations in RAM.",
      C: "A static blog rendering engine.",
      D: "An image resize endpoint."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Weather reporting APIs are read-only stateless operations.",
      B: "Option B is correct! Real-time multiplayer game servers must keep state (player coordinates, velocity, health, world state) in local memory to run 60Hz physics loops without database roundtrip latency.",
      C: "Option C is incorrect. Static blog engines are completely stateless.",
      D: "Option D is incorrect. Image resizing is a pure input-to-output transformation."
    }
  },
  {
    id: 33,
    topic: "3.23 Token Bucket vs. Leaky Bucket",
    question: "An API Rate Limiter must allow applications to process short traffic bursts (e.g. 50 requests arriving at once in 10ms) provided the average request rate over a minute stays under limit. Which algorithm supports bursty traffic?",
    options: {
      A: "Leaky Bucket Algorithm",
      B: "Token Bucket Algorithm",
      C: "Fixed Window Counter Algorithm with hard block",
      D: "Strict FIFO Queue without token refill"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Leaky Bucket enforces a smooth, constant outflow rate, smoothing out bursts rather than permitting immediate burst processing.",
      B: "Option B is correct! Token Bucket allows tokens to accumulate in the bucket up to capacity. As long as tokens are available, sudden burst requests are processed immediately without delay.",
      C: "Option C is incorrect. Fixed window counter causes boundary reset bursts but drops burst traffic when capacity fills within a window.",
      D: "Option D is incorrect. FIFO queue without refill does not implement rate limiting."
    }
  },
  {
    id: 34,
    topic: "3.23 Token Bucket vs. Leaky Bucket",
    question: "A rate limiter protects a legacy backend service that crashes if it receives traffic spikes exceeding exactly 100 requests per second. The outgoing flow to the legacy backend MUST be completely smooth and constant. Which algorithm should be chosen?",
    options: {
      A: "Token Bucket Algorithm",
      B: "Leaky Bucket Algorithm",
      C: "Random Drop Algorithm",
      D: "Round-Robin Dispatching"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Token Bucket permits bursts up to bucket capacity, which would overwhelm the legacy backend.",
      B: "Option B is correct! Leaky Bucket processes incoming requests into a queue and releases them at a strictly fixed, smooth rate (like water leaking from a bucket), protecting fragile downstream systems from traffic spikes.",
      C: "Option C is incorrect. Random drop drops requests unpredictably without enforcing a steady output rate.",
      D: "Option D is incorrect. Round-robin balances across servers but does not limit or smooth traffic rates."
    }
  },
  {
    id: 35,
    topic: "3.24 Read-Heavy vs. Write-Heavy System",
    question: "An IoT monitoring system ingests 3,000,000 log metrics per second. Standard B-Tree indexes on relational databases are causing severe disk random I/O write bottlenecks. Which storage engine data structure trade-off solves high write ingestion?",
    options: {
      A: "B+ Tree Indexes with heavy random write page splitting.",
      B: "LSM-Tree (Log-Structured Merge-tree) utilizing append-only Write-Ahead Logging (WAL) and sequential disk writes.",
      C: "Linear Hash Tables in RAM without persistent disk storage.",
      D: "Unindexed CSV flat files."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. B+ Trees require random I/O updates to disk pages, creating severe write bottlenecks during high ingestion.",
      B: "Option B is correct! Write-heavy databases (e.g. Cassandra, RocksDB, ClickHouse) use LSM-Trees. Writes are appended sequentially to a WAL and memory buffer (MemTable) fast, transforming costly random disk I/O into high-speed sequential disk I/O.",
      C: "Option C is incorrect. Storing 3M metrics/sec solely in volatile RAM without disk WAL risks massive data loss on power failure.",
      D: "Option D is incorrect. Unindexed CSV files cannot be queried efficiently at scale."
    }
  }
];

// State tracking
let userAnswers = {};

function renderQuiz() {
  const container = document.getElementById('quiz-container');
  if (!container) return;

  container.innerHTML = quizQuestions.map((q, idx) => {
    return `
      <div class="quiz-card" id="card-${q.id}">
        <div class="quiz-card-header">
          <span class="quiz-topic">${q.topic}</span>
          <span class="quiz-qnum">Question ${idx + 1} of ${quizQuestions.length}</span>
        </div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options">
          ${Object.keys(q.options).map(optKey => `
            <button class="quiz-opt" id="opt-${q.id}-${optKey}" onclick="handleOptionClick(${q.id}, '${optKey}')">
              <span class="opt-letter">${optKey}</span>
              <span class="opt-text">${q.options[optKey]}</span>
            </button>
          `).join('')}
        </div>
        <div class="quiz-explanation" id="exp-${q.id}"></div>
      </div>
    `;
  }).join('');

  updateDashboard();
}

function handleOptionClick(questionId, selectedOpt) {
  const q = quizQuestions.find(item => item.id === questionId);
  if (!q) return;

  // Record user answer
  userAnswers[questionId] = selectedOpt;

  const isRight = (selectedOpt === q.correct);

  // Update option button styles for this question
  Object.keys(q.options).forEach(optKey => {
    const btn = document.getElementById(`opt-${questionId}-${optKey}`);
    if (!btn) return;

    btn.classList.remove('opt-correct', 'opt-incorrect');

    if (optKey === q.correct) {
      btn.classList.add('opt-correct');
    } else if (optKey === selectedOpt && !isRight) {
      btn.classList.add('opt-incorrect');
    }
  });

  // Render Explanation Box
  const expDiv = document.getElementById(`exp-${questionId}`);
  if (expDiv) {
    expDiv.style.display = 'block';
    expDiv.className = `quiz-explanation ${isRight ? 'exp-right' : 'exp-wrong'}`;

    if (isRight) {
      expDiv.innerHTML = `
        <div class="exp-header">
          <i class="fas fa-check-circle" style="color: #16a34a;"></i> Correct Answer!
        </div>
        <div class="exp-body">
          ${q.explanations[selectedOpt]}
        </div>
      `;
    } else {
      expDiv.innerHTML = `
        <div class="exp-header">
          <i class="fas fa-times-circle" style="color: #dc2626;"></i> Incorrect Choice (Selected: ${selectedOpt})
        </div>
        <div class="exp-body">
          <p style="margin-bottom: 8px;"><strong>Why Option ${selectedOpt} is incorrect:</strong> ${q.explanations[selectedOpt]}</p>
          <p style="margin-top: 8px; margin-bottom: 0;"><strong>Correct Answer (${q.correct}):</strong> ${q.explanations[q.correct]}</p>
        </div>
      `;
    }
  }

  updateDashboard();
}

function updateDashboard() {
  const answeredCount = Object.keys(userAnswers).length;
  let correctCount = 0;

  Object.keys(userAnswers).forEach(qId => {
    const q = quizQuestions.find(item => item.id == qId);
    if (q && userAnswers[qId] === q.correct) {
      correctCount++;
    }
  });

  const total = quizQuestions.length;
  const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
  const progressPercent = Math.round((answeredCount / total) * 100);

  document.getElementById('quiz-score').innerText = `${correctCount} / ${total}`;
  document.getElementById('quiz-progress').innerText = `${answeredCount} / ${total} Answered`;
  document.getElementById('quiz-accuracy').innerText = `${accuracy}%`;
  document.getElementById('quiz-progress-bar').style.width = `${progressPercent}%`;
}

function resetQuiz() {
  userAnswers = {};
  renderQuiz();
}

document.addEventListener('DOMContentLoaded', renderQuiz);
</script>
