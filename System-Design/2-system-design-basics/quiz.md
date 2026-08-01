---
layout: default
title: System Design Basics Quiz (2.1 - 2.19)
permalink: /System-Design/2-system-design-basics/quiz/
prev_title: "Checksum"
prev_url: "/System-Design/2-system-design-basics/2.19-checksum/"
---

# System Design Basics Quiz (Modules 2.1 - 2.19)

Test and validate your fundamental system design knowledge with **35 FAANG/MAANG-level interview questions** covering modules 2.1 to 2.19.

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
    topic: "2.1 System Design Basics",
    question: "In a FAANG system design interview, what is the primary objective of defining Non-Functional Requirements (NFRs) before drafting an architecture diagram?",
    options: {
      A: "To select the specific programming language and framework version to write microservices.",
      B: "To establish numeric constraints (SLA, latency targets, throughput QPS, availability level) that drive database selection, caching strategy, and partitioning trade-offs.",
      C: "To prove to the interviewer that you know how to configure Nginx load balancers.",
      D: "To eliminate the need for load balancers and caching layers."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. High-level system design interviews focus on distributed architecture and trade-offs, not specific code framework choices.",
      B: "Option B is correct! Defining Non-Functional Requirements (e.g. 100,000 write QPS, 99.999% SLA, <50ms p99 latency) establishes the engineering boundaries that dictate whether you need SQL vs NoSQL, caching topologies, and replication models.",
      C: "Option C is incorrect. NFRs provide system metrics, not configuration snippets.",
      D: "Option D is incorrect. High scale NFRs usually highlight the necessity of caching and load balancing."
    }
  },
  {
    id: 2,
    topic: "2.2 Key Characteristics of Distributed Systems",
    question: "A high-availability cloud platform promises 'Five Nines' (99.999%) availability in its Service Level Agreement (SLA). What is the maximum allowable unplanned downtime per year for this system?",
    options: {
      A: "Approximately 8.76 hours per year.",
      B: "Approximately 52.6 minutes per year.",
      C: "Approximately 5.26 minutes per year.",
      D: "Approximately 31.5 seconds per year."
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. 8.76 hours per year corresponds to 99% availability (Two Nines).",
      B: "Option B is incorrect. 52.6 minutes per year corresponds to 99.9% availability (Three Nines).",
      C: "Option C is correct! 99.999% availability allows only 0.001% downtime per year: 365 days * 24h * 60m * 0.00001 = 5.26 minutes per year (or ~0.86 seconds per day).",
      D: "Option D is incorrect. 31.5 seconds per year corresponds to 99.9999% (Six Nines)."
    }
  },
  {
    id: 3,
    topic: "2.2 Key Characteristics of Distributed Systems",
    question: "During a traffic spike, a payment backend scales out horizontally by adding 20 stateless API servers behind a load balancer. What fundamental distributed system characteristic is being leveraged?",
    options: {
      A: "Vertical Scalability (Scaling Up)",
      B: "Horizontal Scalability (Scaling Out)",
      C: "Data Normalization",
      D: "Strict Serializability"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Vertical scalability means replacing existing hardware with a larger machine (more CPU/RAM on a single server).",
      B: "Option B is correct! Horizontal scalability (scaling out) adds more compute nodes to the pool to distribute load seamlessly, which is essential for cloud-native architectures.",
      C: "Option C is incorrect. Data normalization is a relational database schema design technique.",
      D: "Option D is incorrect. Serializability is a database isolation level."
    }
  },
  {
    id: 4,
    topic: "2.3 Load Balancing",
    question: "A microservices application routes traffic based on HTTP request paths (e.g., `/api/v1/checkout` -> Service A, `/api/v1/media` -> Service B) and inspects HTTP session cookies for sticky routing. At which OSI layer must this load balancer operate?",
    options: {
      A: "Layer 3 (Network Layer - IP)",
      B: "Layer 4 (Transport Layer - TCP/UDP)",
      C: "Layer 7 (Application Layer - HTTP/HTTPS)",
      D: "Layer 2 (Data Link Layer - MAC)"
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. Layer 3 operates on IP packet headers without understanding ports or protocols.",
      B: "Option B is incorrect. Layer 4 routes packets based on IP and TCP/UDP ports without parsing HTTP paths or cookies.",
      C: "Option C is correct! Layer 7 load balancers inspect application-level data such as URL paths, HTTP headers, and cookies to make intelligent routing decisions.",
      D: "Option D is incorrect. Layer 2 routes network frames based on physical MAC addresses."
    }
  },
  {
    id: 5,
    topic: "2.3 Load Balancing",
    question: "What is the primary advantage of a Layer 4 (L4) load balancer compared to a Layer 7 (L7) load balancer?",
    options: {
      A: "L4 load balancers support HTTP header rewrites and SSL decryption.",
      B: "L4 load balancers process packets significantly faster with lower CPU and memory overhead because they do not decrypt or parse application payloads.",
      C: "L4 load balancers perform content-aware web application firewall (WAF) filtering.",
      D: "L4 load balancers eliminate the need for health checks."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. SSL decryption and HTTP header rewrites require Layer 7 inspection.",
      B: "Option B is correct! Because Layer 4 load balancers only examine transport layer IP and TCP packet headers without parsing HTTP payloads, they achieve extreme packet forwarding throughput with minimal CPU overhead.",
      C: "Option C is incorrect. WAF inspection requires Layer 7 application payload parsing.",
      D: "Option D is incorrect. Both L4 and L7 load balancers perform server health checks."
    }
  },
  {
    id: 6,
    topic: "2.4 Load Balancing Algorithms",
    question: "You have a cluster of backend servers where Node A has 64 GB RAM (Weight = 3) and Node B has 16 GB RAM (Weight = 1). Which load balancing algorithm distributes incoming requests in proportion to server capacity?",
    options: {
      A: "Simple Round Robin",
      B: "Weighted Round Robin",
      C: "IP Hash",
      D: "Least Response Time"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Simple Round Robin sends an equal 1:1 ratio of requests regardless of server specs.",
      B: "Option B is correct! Weighted Round Robin assigns numeric weight values to servers according to hardware capacity, ensuring Node A receives 3x more requests than Node B.",
      C: "Option C is incorrect. IP Hash maps client IP address hashes to servers, ignoring hardware capacity differences.",
      D: "Option D is incorrect. Least Response Time directs requests to nodes with lowest response latency, not fixed capacity weights."
    }
  },
  {
    id: 7,
    topic: "2.4 Load Balancing Algorithms",
    question: "An e-commerce platform uses a distributed in-memory session cache stored locally on individual web servers. Which load balancing algorithm ensures requests from the same user IP consistently hit the exact same server instance?",
    options: {
      A: "Least Connections Algorithm",
      B: "IP Hash (Source IP Hashing)",
      C: "Random Selection with Power of Two Choices",
      D: "Weighted Fair Queueing"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Least Connections routes traffic to the server with fewest active connections, causing user requests to bounce between servers.",
      B: "Option B is correct! IP Hash hashes the client's IP address to map them to a deterministic server, providing session affinity (sticky routing) so repeat requests hit the same server.",
      C: "Option C is incorrect. Power of Two Choices randomizes selection to balance queue depth.",
      D: "Option D is incorrect. Weighted Fair Queueing manages network packet bandwidth queues."
    }
  },
  {
    id: 8,
    topic: "2.5 Caching",
    question: "A high-traffic news site experiences a scenario where a popular cache key expires (TTL = 0), and 50,000 concurrent client requests simultaneously miss the cache and hit the database at the exact same instant, crashing the DB. What is this phenomenon called?",
    options: {
      A: "Cache Penetration",
      B: "Cache Stampede (Thundering Herd Problem)",
      C: "Cache Avalanche",
      D: "Cache Breakdown via Malicious Key Injection"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Cache Penetration happens when requests query non-existent keys that are never in cache or DB.",
      B: "Option B is correct! Cache Stampede (Thundering Herd) occurs when a hot cache key expires, triggering massive concurrent database read queries to recalculate the same key simultaneously.",
      C: "Option C is incorrect. Cache Avalanche occurs when many different cache keys expire at the exact same time due to identical TTL settings.",
      D: "Option D is incorrect. Breakdown via malicious keys refers to penetration."
    }
  },
  {
    id: 9,
    topic: "2.5 Caching",
    question: "Which cache eviction algorithm tracks both how RECENTLY and how FREQUENTLY items are requested, removing items that have been accessed fewest times overall over a time window?",
    options: {
      A: "LRU (Least Recently Used)",
      B: "LFU (Least Frequently Used)",
      C: "FIFO (First In First Out)",
      D: "RR (Random Replacement)"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. LRU evicts items based solely on timestamp of last access, regardless of total historical read count.",
      B: "Option B is correct! LFU maintains a counter of access frequency for each item in the cache and evicts items with the lowest access count when capacity is reached.",
      C: "Option C is incorrect. FIFO evicts items in strict order of insertion time.",
      D: "Option D is incorrect. RR selects random items for eviction."
    }
  },
  {
    id: 10,
    topic: "2.6 Data Partitioning",
    question: "A social media platform partitions its PostgreSQL database horizontally by `user_id`. Celebrity accounts (e.g. 100M followers) create massive read/write spikes on specific database shards while standard user shards remain idle. What is this architectural issue?",
    options: {
      A: "Vertical Partition Isolation",
      B: "Hotspotting (Celebrity / Hot Key Problem)",
      C: "Deadlocking via Foreign Keys",
      D: "Schema Drift"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Vertical partitioning splits tables by columns, not rows.",
      B: "Option B is correct! Hotspotting (Hot Key Problem) happens when a single partition receives a disproportionate volume of traffic due to high-activity entities (celebrities, viral posts), nullifying the benefits of horizontal sharding.",
      C: "Option C is incorrect. Foreign key deadlocks involve transaction lock ordering.",
      D: "Option D is incorrect. Schema drift refers to mismatched table schemas across nodes."
    }
  },
  {
    id: 11,
    topic: "2.6 Data Partitioning",
    question: "What is the key difference between Horizontal Partitioning (Sharding) and Vertical Partitioning?",
    options: {
      A: "Horizontal partitioning splits a table by columns into smaller tables; Vertical partitioning splits a table by rows across nodes.",
      B: "Horizontal partitioning splits a table by rows (distributing rows across multiple servers); Vertical partitioning splits a table by columns (grouping related columns into separate tables).",
      C: "Horizontal partitioning is only available in NoSQL; Vertical partitioning is only available in SQL.",
      D: "Horizontal partitioning removes indexes; Vertical partitioning adds foreign keys."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. It reverses the definitions of horizontal and vertical partitioning.",
      B: "Option B is correct! Horizontal partitioning (sharding) divides table rows across multiple database servers sharing the same schema. Vertical partitioning divides table columns (e.g., separating user profile info from heavy text bio) into separate tables or databases.",
      C: "Option C is incorrect. Both techniques are used across SQL and NoSQL ecosystems.",
      D: "Option D is incorrect. Partitioning does not disable indexing."
    }
  },
  {
    id: 12,
    topic: "2.7 Indexes",
    question: "Why do relational database engines (like MySQL InnoDB and PostgreSQL) use **B+ Trees** rather than standard Binary Search Trees (BST) or Hash Indexes for primary table indexing?",
    options: {
      A: "B+ Trees store all actual data in root nodes for instantaneous access.",
      B: "B+ Trees have high fan-out (reducing tree height to 3-4 levels) and store data sequentially in leaf node linked lists, optimizing range queries and disk block I/O.",
      C: "Hash indexes cannot perform exact key lookups.",
      D: "BSTs require zero disk seeks."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. B+ Trees store data records/pointers exclusively in leaf nodes.",
      B: "Option B is correct! B+ Trees have a high fan-out factor (hundreds of child pointers per node), keeping tree depth small (3-4 disk seeks for millions of rows). Additionally, leaf nodes form a doubly linked list, enabling efficient sequential disk reads for range queries (`WHERE age BETWEEN 20 AND 30`).",
      C: "Option C is incorrect. Hash indexes excel at exact key lookups `O(1)` but cannot perform range queries.",
      D: "Option D is incorrect. Unbalanced BSTs can degenerate to depth `O(N)`, causing huge disk seeking penalties."
    }
  },
  {
    id: 13,
    topic: "2.7 Indexes",
    question: "Adding 10 secondary indexes to a high-throughput SQL database table will have what direct trade-off impact?",
    options: {
      A: "Speeds up SQL INSERT/UPDATE/DELETE queries, but slows down SELECT queries.",
      B: "Speeds up targeted SELECT queries, but drastically slows down INSERT/UPDATE/DELETE writes due to index update overhead and disk writes.",
      C: "Eliminates database deadlock potential.",
      D: "Reduces total storage disk usage."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Indexes slow down write queries because index trees must be re-balanced on every write.",
      B: "Option B is correct! Every secondary index requires the database to update separate B+ Tree structures on every write. While SELECT queries matching indexed columns become faster, write throughput drops significantly (write amplification).",
      C: "Option C is incorrect. Indexes can increase lock contention and deadlocks on index pages.",
      D: "Option D is incorrect. Each secondary index consumes additional disk space."
    }
  },
  {
    id: 14,
    topic: "2.8 Proxies",
    question: "A company places a server in front of their microservices backend to handle SSL/TLS decryption, compression (Gzip/Brotli), CORS policy checks, and IP rate limiting. What type of proxy is this?",
    options: {
      A: "Forward Proxy",
      B: "Reverse Proxy",
      C: "Open Proxy",
      D: "SOCKS5 Client Proxy"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Forward proxies sit in front of client devices to handle outbound web access.",
      B: "Option B is correct! A Reverse Proxy sits in front of web/application servers to handle inbound client requests, providing SSL termination, caching, compression, and security shielding.",
      C: "Option C is incorrect. Open proxies are misconfigured forward proxies accessible to any internet user.",
      D: "Option D is incorrect. SOCKS5 proxies forward arbitrary client network traffic."
    }
  },
  {
    id: 15,
    topic: "2.8 Proxies",
    question: "Which of the following security benefits is uniquely provided by a **Forward Proxy** deployed on an enterprise corporate network?",
    options: {
      A: "Hiding internal web server IP addresses from public internet attackers.",
      B: "Inspecting outbound employee traffic to prevent confidential data exfiltration and block malicious websites.",
      C: "Terminating incoming SSL traffic for public web applications.",
      D: "Distributing inbound database read queries."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Hiding web server IPs is a function of a Reverse Proxy.",
      B: "Option B is correct! A Forward Proxy intercepts outbound traffic originating from internal devices heading to the external internet, allowing enterprise IT security to filter content, enforce egress rules, and prevent data leakage.",
      C: "Option C is incorrect. Terminating incoming SSL for public apps is performed by a Reverse Proxy.",
      D: "Option D is incorrect. DB read distribution is handled by database load balancers."
    }
  },
  {
    id: 16,
    topic: "2.9 Redundancy and Replication",
    question: "In an Active-Passive (Primary-Standby) database replication setup, how is the Passive node utilized during normal operational health?",
    options: {
      A: "It actively processes 50% of write transactions concurrently with the Active node.",
      B: "It remains idle (or serves read-only queries), synchronously/asynchronously replicating data from the Active node, waiting to take over if the Active node fails.",
      C: "It shards incoming data automatically using consistent hashing.",
      D: "It acts as a load balancer for external HTTP traffic."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Processing active write transactions concurrently is Active-Active replication.",
      B: "Option B is correct! In Active-Passive setups, the Passive (Standby) server continuously receives replication logs from the Active leader. It does not accept write traffic until failover is triggered when the Active node dies.",
      C: "Option C is incorrect. Active-passive replication does not shard data; it maintains redundant copies of the same dataset.",
      D: "Option D is incorrect. Database standby nodes do not route HTTP traffic."
    }
  },
  {
    id: 17,
    topic: "2.9 Redundancy and Replication",
    question: "What is a primary engineering challenge of an **Active-Active** multi-master database replication setup across two distant data centers?",
    options: {
      A: "Standby nodes remain unused, wasting 50% of server compute.",
      B: "Concurrent writes to the same record at both master nodes create write conflicts that require complex conflict resolution strategies (LWW, CRDTs).",
      C: "Active-Active setups cannot handle read operations.",
      D: "Active-Active setups require client browsers to store raw SQL tables."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. In Active-Active, both nodes are actively used, eliminating idle compute.",
      B: "Option B is correct! When writes are accepted simultaneously on multiple active master nodes, network latency causes out-of-order write delivery, leading to write conflicts that must be resolved.",
      C: "Option C is incorrect. Active-Active nodes handle both reads and writes.",
      D: "Option D is incorrect. Database replication is transparent to client browser storage."
    }
  },
  {
    id: 18,
    topic: "2.10 SQL vs NoSQL",
    question: "A financial banking platform requires strict adherence to ACID transactions across normalized relational tables. Which storage engine guarantee ensures that multiple concurrent transactions execute without interfering with one another or reading uncommitted data?",
    options: {
      A: "Atomicity",
      B: "Consistency",
      C: "Isolation",
      D: "Durability"
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. Atomicity ensures all-or-nothing completion of transaction steps.",
      B: "Option B is incorrect. Consistency ensures database state transitions satisfy all schema constraints and invariants.",
      C: "Option C is correct! Isolation controls how concurrent transactions see intermediate uncommitted modifications, preventing dirty reads, non-repeatable reads, and phantom reads.",
      D: "Option D is incorrect. Durability guarantees committed transactions survive power outages."
    }
  },
  {
    id: 19,
    topic: "2.10 SQL vs NoSQL",
    question: "A high-scale social network needs to store user social graphs (who follows whom, mutual friend recommendations, multi-hop connection paths). Which database family offers native index-free adjacency for graph traversal queries?",
    options: {
      A: "Relational SQL Database (PostgreSQL)",
      B: "Key-Value Store (Redis)",
      C: "Graph Database (e.g. Neo4j / Amazon Neptune)",
      D: "Wide-Column Store (Cassandra)"
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. Relational SQL requires costly recursive JOIN queries to traverse multi-hop graph connections.",
      B: "Option B is incorrect. Key-Value stores require custom application mapping to handle graph edges.",
      C: "Option C is correct! Graph databases use pointer-based index-free adjacency to traverse complex relationships (nodes and edges) in constant time `O(1)` per hop regardless of total database size.",
      D: "Option D is incorrect. Wide-column stores organize data by column families rather than graph nodes."
    }
  },
  {
    id: 20,
    topic: "2.11 CAP Theorem",
    question: "According to the CAP Theorem, when a network partition (P) occurs between distributed nodes in a system, what choice MUST the system architect make?",
    options: {
      A: "Achieve both Consistency (C) and Availability (A) simultaneously without compromise.",
      B: "Choose between Consistency (CP: refuse stale writes/reads or return errors) OR Availability (AP: accept local reads/writes, sacrificing global consistency).",
      C: "Sacrifice Partition Tolerance (P) by disconnecting physical network cables.",
      D: "Increase network bandwidth to eliminate the laws of physics."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Proven mathematically by Eric Brewer, you cannot achieve both C and A during a network partition.",
      B: "Option B is correct! In the presence of a network partition (P), a distributed system MUST choose between returning an error/blocking to preserve Consistency (CP) OR returning local data to maintain Availability (AP).",
      C: "Option C is incorrect. Network partitions are environmental realities (fiber cuts, switch failures); you cannot simply 'choose' to turn off P.",
      D: "Option D is incorrect. Increased bandwidth reduces latency but cannot eliminate network failures."
    }
  },
  {
    id: 21,
    topic: "2.11 CAP Theorem",
    question: "Which of the following real-world systems is classified as an **AP System** under the CAP Theorem during a cross-region network partition?",
    options: {
      A: "Google Spanner / Bank ATM transaction processor prioritizing strict account balances.",
      B: "Apache Cassandra / Amazon Dynamo configured for high-availability reads/writes with eventual convergence.",
      C: "Single-Leader PostgreSQL database with synchronous replication.",
      D: "ZooKeeper cluster requiring leader quorum for all writes."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Google Spanner and ATMs choose CP (Consistency & Partition Tolerance), rejecting transactions if consistency cannot be guaranteed.",
      B: "Option B is correct! Cassandra/Dynamo are classic AP systems designed to remain available for writes on any node during partitions, accepting eventual consistency reconciliation later.",
      C: "Option C is incorrect. Synchronous primary-replica SQL blocks writes if replicas are disconnected (CP).",
      D: "Option D is incorrect. ZooKeeper is a CP system that halts writes if a quorum majority is lost."
    }
  },
  {
    id: 22,
    topic: "2.12 PACELC Theorem",
    question: "The PACELC theorem extends CAP by addressing system behavior when there is NO network partition. What does the 'ELC' part of PACELC stand for?",
    options: {
      A: "Else: Encryption vs Latency Trade-off",
      B: "Else: Latency (L) vs Consistency (C)",
      C: "Error: Logging vs Compression",
      D: "Eventual: Load vs Capacity"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. ELC does not stand for encryption.",
      B: "Option B is correct! PACELC states: **If there is a Partition (P)**, trade off **Availability (A) vs Consistency (C)**; **Else (E)**, trade off **Latency (L) vs Consistency (C)**.",
      C: "Option C is incorrect. ELC does not relate to error logging.",
      D: "Option D is incorrect. ELC is Latency vs Consistency."
    }
  },
  {
    id: 23,
    topic: "2.12 PACELC Theorem",
    question: "How is **MongoDB** classified under the PACELC theorem when configured with default primary read/write preferences?",
    options: {
      A: "PA/EL (Prioritizes Availability under partition, Latency during normal state)",
      B: "PC/EC (Prioritizes Consistency under partition, and Consistency during normal state)",
      C: "PA/EC (Prioritizes Availability under partition, Consistency during normal state)",
      D: "PC/EL (Prioritizes Consistency under partition, Latency during normal state)"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. MongoDB defaults prioritize consistency, not availability under partition.",
      B: "Option B is correct! MongoDB is classified as **PC/EC**. If a partition occurs, it stops accepting writes on disconnected secondaries (PC); during normal operation, writes route to the primary to maintain consistency (EC).",
      C: "Option C is incorrect. MongoDB does not offer AP availability by default.",
      D: "Option D is incorrect. DynamoDB/Cassandra with strong reads represent PC/EL variants."
    }
  },
  {
    id: 24,
    topic: "2.13 Consistent Hashing",
    question: "In traditional hash sharding (`hash(key) % N`), adding or removing 1 server node from a cluster of $N$ nodes causes what major operational disaster?",
    options: {
      A: "100% of network traffic shifts to node 0.",
      B: "Nearly 100% of all keys remap to different server nodes, causing massive cache misses and database thundering herd crashes.",
      C: "Data becomes permanently corrupted on disk.",
      D: "The hash function enters an infinite loop."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Modulo hashing redistributes keys across all nodes, not just node 0.",
      B: "Option B is correct! Traditional modulo $N$ hashing changes the divisor when $N$ changes. As a result, almost $K/N$ keys move to new locations, invalidating distributed caches globally.",
      C: "Option C is incorrect. Modulo hashing invalidates key locations, but does not physically corrupt storage files.",
      D: "Option D is incorrect. The mathematical modulo calculation executes normally."
    }
  },
  {
    id: 25,
    topic: "2.13 Consistent Hashing",
    question: "How do **Virtual Nodes (Vnodes)** solve the hot spot / non-uniform data distribution problem in a Consistent Hashing ring?",
    options: {
      A: "By creating virtual CPU threads on the physical server.",
      B: "By assigning each physical server node multiple pseudo-random positions (e.g. 100-200 vnodes) across the hash ring, ensuring uniform key distribution and balanced load redistribution during node additions/removals.",
      C: "By encrypting keys before hashing.",
      D: "By storing data in virtual browser cache memory."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Virtual nodes are logical hash ring tokens, not CPU execution threads.",
      B: "Option B is correct! Mapping a physical server to multiple virtual nodes spread randomly around the 364-degree hash ring smooths out hash variance, preventing load imbalance and ensuring that a failing node's traffic is evenly split among remaining nodes.",
      C: "Option C is incorrect. Encryption changes representation but does not solve ring variance.",
      D: "Option D is incorrect. Vnodes exist in server routing tables."
    }
  },
  {
    id: 26,
    topic: "2.14 Long-Polling vs WebSockets vs SSE",
    question: "A financial dashboard app requires streaming real-time stock price updates from the server to thousands of web browsers. Data flows strictly ONE-WAY (Server -> Client). Which lightweight HTTP protocol is ideal for this single-direction streaming scenario?",
    options: {
      A: "WebSockets",
      B: "Server-Sent Events (SSE) over HTTP/2",
      C: "Short Polling every 100ms",
      D: "FTP File Transfer"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. WebSockets provide full-duplex bi-directional communication, which introduces unnecessary connection management complexity for unidirectional server-to-client streaming.",
      B: "Option B is correct! Server-Sent Events (SSE) is a lightweight, standardized HTTP protocol natively supported by browsers that streams unidirectional text data from server to client over a single long-lived HTTP connection.",
      C: "Option C is incorrect. Short polling at 100ms generates immense HTTP request header overhead.",
      D: "Option D is incorrect. FTP is a file transfer protocol, not a live streaming API protocol."
    }
  },
  {
    id: 27,
    topic: "2.14 Long-Polling vs WebSockets vs SSE",
    question: "What is a key difference between **HTTP Long-Polling** and **WebSockets**?",
    options: {
      A: "Long-Polling keeps a single TCP connection open forever for bi-directional communication; WebSockets reconnect on every message.",
      B: "Long-Polling holds an HTTP request open until data is available, responds, and closes the connection (requiring a new HTTP request for the next update); WebSockets upgrade to a persistent bi-directional TCP connection.",
      C: "WebSockets cannot bypass firewall port restrictions.",
      D: "Long-Polling uses binary protocol frames; WebSockets use raw XML."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. It reverses the connection lifecycle of Long-Polling and WebSockets.",
      B: "Option B is correct! Long-polling mimics real-time by hanging an HTTP request until new data arrives, after which the client must immediately open a fresh request. WebSockets establish a single persistent, full-duplex TCP socket channel.",
      C: "Option C is incorrect. WebSockets initiate via standard HTTP ports 80/443, successfully traversing firewalls.",
      D: "Option D is incorrect. WebSockets support binary and UTF-8 text frames."
    }
  },
  {
    id: 28,
    topic: "2.15 Bloom Filters",
    question: "A high-scale URL shortener (e.g. Bitly) uses a **Bloom Filter** to check if a requested short code already exists in a database of 1 Billion records before performing a disk read. What guarantee does a Bloom Filter provide?",
    options: {
      A: "It can guarantee a key DEFINITELY exists, but might give false negatives.",
      B: "It can guarantee a key DEFINITELY DOES NOT exist (Zero False Negatives), but may report a False Positive (claiming a key exists when it does not).",
      C: "It guarantees 100% exact accuracy for both presence and absence.",
      D: "It allows deleting keys in `O(1)` time from standard bit arrays."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Bloom filters NEVER produce false negatives (if it says an item is missing, it is 100% missing).",
      B: "Option B is correct! A Bloom Filter is a space-efficient probabilistic data structure. It guarantees **no false negatives** (if it returns 'not present', the key is definitely not in the DB, saving a costly disk lookup). However, it may return **false positives** (claiming an item exists when it does not).",
      C: "Option C is incorrect. Exact accuracy requires a Hash Set, which consumes gigabytes of RAM.",
      D: "Option D is incorrect. Standard Bloom filters do not support item deletion without counting variants."
    }
  },
  {
    id: 29,
    topic: "2.15 Bloom Filters",
    question: "How does a Bloom Filter maintain extreme memory efficiency (e.g. checking 1 Billion keys in a few megabytes of RAM)?",
    options: {
      A: "By compressing string keys using ZIP archives in memory.",
      B: "By representing items as bit flags in a bit array updated via $k$ independent cryptographic hash functions, without storing the actual key strings.",
      C: "By writing keys to SSD swap space.",
      D: "By storing keys in a B-Tree structure."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. String compression still stores character data.",
      B: "Option B is correct! Bloom filters do not store actual keys or values. They pass a key through $k$ hash functions to turn $k$ specific bit positions to `1` in a shared bit array, storing billions of set membership records in mere megabytes of RAM.",
      C: "Option C is incorrect. Bloom filters operate in RAM.",
      D: "Option D is incorrect. B-Trees store keys and pointers, consuming significant memory."
    }
  },
  {
    id: 30,
    topic: "2.16 Quorum Consensus",
    question: "A distributed datastore uses replication factor $N = 5$. To guarantee **Strong Consistency** (ensuring every read sees the latest write), what mathematical condition must the Read Quorum ($R$) and Write Quorum ($W$) satisfy?",
    options: {
      A: "$R + W \\le N$",
      B: "$R + W > N$",
      C: "$R = 1$ and $W = 1$",
      D: "$R \\times W = N$"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. If $R + W \\le N$, read and write sets may be completely disjoint, allowing stale reads.",
      B: "Option B is correct! The Quorum intersection principle states that if $R + W > N$, the set of nodes read from and the set of nodes written to MUST overlap by at least 1 node containing the latest write timestamp.",
      C: "Option C is incorrect. $R=1, W=1$ with $N=5$ yields $R+W=2 \\le 5$, producing eventual consistency with stale reads.",
      D: "Option D is incorrect. Multiplication is not the quorum formula."
    }
  },
  {
    id: 31,
    topic: "2.16 Quorum Consensus",
    question: "In Apache Cassandra configured with $N=3, W=QUORUM, R=QUORUM$, how many replica nodes must acknowledge a write operation before success is returned to the client?",
    options: {
      A: "1 node",
      B: "2 nodes",
      C: "3 nodes",
      D: "0 nodes"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. 1 node corresponds to $W=1$ (LOCAL_ONE).",
      B: "Option B is correct! For $N=3$, $\\text{QUORUM} = \\lfloor N/2 \\rfloor + 1 = \\lfloor 3/2 \\rfloor + 1 = 2$. Thus, 2 out of 3 replicas must acknowledge the write.",
      C: "Option C is incorrect. 3 nodes corresponds to $W=ALL$.",
      D: "Option D is incorrect. 0 nodes corresponds to asynchronous unacknowledged writes."
    }
  },
  {
    id: 32,
    topic: "2.17 Leader and Follower",
    question: "In a Raft/Paxos consensus cluster of 5 nodes, two leader candidates trigger an election simultaneously after a network split, each securing 2 votes out of 5. What prevents a dangerous 'Split-Brain' scenario?",
    options: {
      A: "Both candidates become leaders simultaneously.",
      B: "Strict Quorum rules require a majority of votes ($N/2 + 1 = 3$ votes out of 5) to win leadership; since neither reached 3, randomized election timeouts trigger a new election round.",
      C: "The load balancer picks a leader at random.",
      D: "The node with the highest IP address automatically wins."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Having two active leaders creates split-brain data corruption.",
      B: "Option B is correct! Consensus algorithms require a strict majority quorum ($N/2 + 1$, which is 3 out of 5) to declare a leader. Split votes result in election timeout resets, guaranteeing only one leader can ever emerge.",
      C: "Option C is incorrect. Load balancers do not manage internal Paxos/Raft leader consensus.",
      D: "Option D is incorrect. IP address hierarchy is not a consensus protocol mechanism."
    }
  },
  {
    id: 33,
    topic: "2.18 Heartbeat",
    question: "A distributed master node uses periodic **Heartbeat** ping signals to detect worker node failures. What is the engineering trade-off of setting the heartbeat ping interval to a very short duration (e.g. 50 milliseconds)?",
    options: {
      A: "Slow failure detection, delaying failover by hours.",
      B: "Fast failure detection, but high risk of **False Positives** (mistakenly marking healthy nodes dead due to transient network congestion or GC pauses) and excessive network traffic.",
      C: "Elimination of all network latency.",
      D: "Automatic disk space cleanup."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Short ping intervals speed up detection, not slow it down.",
      B: "Option B is correct! Setting an aggressive 50ms heartbeat detects true failures fast, but risks false positives—marking a healthy node as dead if a minor network jitter or Java Garbage Collection (GC) pause delays a single ping packet.",
      C: "Option C is incorrect. Heartbeats monitor health; they do not alter network physics.",
      D: "Option D is incorrect. Heartbeats have no relation to disk space cleanup."
    }
  },
  {
    id: 34,
    topic: "2.19 Checksum",
    question: "A distributed file system (e.g. HDFS or AWS S3) stores petabytes of data across thousands of commodity hard drives. Silent bit rot (data corruption on disk) occurs over time. How does the storage system detect and repair corrupted data blocks?",
    options: {
      A: "By re-downloading files from the client browser.",
      B: "By computing cryptographic Checksums (e.g. CRC32/SHA256) upon writing, periodically re-verifying block checksums during background scrub sweeps, and fetching clean replicas when checksum mismatches occur.",
      C: "By rebooting storage servers every night.",
      D: "By disabling disk writing caching."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Storage systems cannot rely on client browsers to repair internal disk corruption.",
      B: "Option B is correct! Distributed file systems append cryptographic checksums (e.g., CRC32 or MD5) to data blocks. Background data scrubbing recalculates block checksums; if a mismatch is detected (bit rot), the corrupted block is replaced using a healthy replica node.",
      C: "Option C is incorrect. Rebooting servers does not repair corrupted disk bits.",
      D: "Option D is incorrect. Disabling cache does not prevent physical storage media bit rot."
    }
  },
  {
    id: 35,
    topic: "2.2 Key Characteristics & Trade-offs Review",
    question: "You are designing a high-throughput logging pipeline that ingests 500,000 log events/sec. Loss of 0.01% of log lines during a catastrophic hardware failure is acceptable, but system downtime is NOT tolerable. Which combination of architectural choices fits best?",
    options: {
      A: "Strong Consistency, Synchronous Disk Writes, Single Master SQL Database.",
      B: "Eventual Consistency, Asynchronous In-Memory Buffering (Kafka), Horizontal NoSQL Partitioning (AP System).",
      C: "ACID Relational Storage, 2-Phase Commit, Zero Caching.",
      D: "Single Server Backup via Tape Drive."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Single master SQL with synchronous writes will bottleneck write throughput and crash during node failures.",
      B: "Option B is correct! Logging ingestion prioritizes high write throughput and continuous availability over absolute zero data loss. An AP system with message queues (Kafka) and NoSQL stores handles 500k writes/sec with high fault tolerance.",
      C: "Option C is incorrect. 2PC and zero caching severely restrict write throughput.",
      D: "Option D is incorrect. Single tape backup cannot handle real-time streaming ingestion."
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
