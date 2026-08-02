---
layout: default
title: Introduction to System Design Interview Quiz
permalink: /System-Design/1-introduction-to-system-design-interview/quiz/
prev_title: "Things to Avoid During System Design Interview"
prev_url: "/System-Design/1-introduction-to-system-design-interview/1.4-things-to-avoid-during-system-design-interview/"
---

# Introduction to System Design Interview Quiz (Modules 1.1 - 1.4)

Test and validate your core system design interview fundamentals with **18 FAANG/MAANG-level questions** covering modules 1.1 to 1.4.

---

<!-- Quiz Dashboard -->
<div class="quiz-dashboard">
  <div class="dash-stat">
    <span class="dash-label">Score</span>
    <span class="dash-value" id="quiz-score">0 / 18</span>
  </div>
  <div class="dash-stat">
    <span class="dash-label">Progress</span>
    <span class="dash-value" id="quiz-progress">0 / 18 Answered</span>
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
    topic: "1.1 Why System Design Interview",
    question: "Why do top-tier tech companies (Google, Meta, Amazon, Apple, Netflix) heavily emphasize System Design Interviews (SDIs) for Senior and Staff engineering roles?",
    options: {
      A: "To evaluate if the candidate has memorized specific syntax of popular frameworks like Spring Boot or React.",
      B: "Because SDIs assess how candidates handle ambiguous, open-ended architectural problems, evaluate trade-offs, and scale systems end-to-end under real-world constraints.",
      C: "To test whether a candidate can write bug-free LeetCode hard algorithms under high pressure.",
      D: "Because SDIs are completely standardized with exactly one fixed solution for every problem."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. System design interviews evaluate high-level architecture and trade-off decisions, not language syntax memory.",
      B: "Option B is correct! System design problems are unscripted and open-ended. Interviewers grade candidates on how effectively they clarify requirements, drive architectural decisions, navigate trade-offs (e.g. latency vs throughput, consistency vs availability), and design scalable systems.",
      C: "Option C is incorrect. Algorithmic coding interviews evaluate LeetCode algorithms, whereas SDIs evaluate distributed system design.",
      D: "Option D is incorrect. System design questions intentionally have NO single standard or correct solution."
    }
  },
  {
    id: 2,
    topic: "1.1 Why System Design Interview",
    question: "What is the primary reason candidate performance in System Design Interviews directly determines the engineering job level (e.g., L4 vs L5/L6) and offer package?",
    options: {
      A: "Because system design performance proves the candidate's capability to take technical ownership of large-scale, complex distributed infrastructure without supervision.",
      B: "Because SDIs are graded purely based on the number of boxes drawn on the whiteboard.",
      C: "Because only candidate speed in drawing database schemas determines level.",
      D: "Because coding interview scores are ignored completely by hiring committees."
    },
    correct: "A",
    explanations: {
      A: "Option A is correct! Senior (L5) and Staff (L6+) engineers are expected to design, scale, and maintain complex multi-region architecture independently. SDI performance directly reflects technical maturity and scope of impact.",
      B: "Option B is incorrect. Drawing boxes without justifying trade-offs, scaling limits, or failure modes yields a poor rating.",
      C: "Option C is incorrect. Schema design is only a small sub-part of the overall design evaluation.",
      D: "Option D is incorrect. Coding, system design, and behavioral scores are all evaluated holistically by hiring committees."
    }
  },
  {
    id: 3,
    topic: "1.1 Why System Design Interview",
    question: "How should a candidate structure a standard 45-minute System Design Interview session?",
    options: {
      A: "Spend 40 minutes drawing a detailed microservices diagram immediately without asking questions.",
      B: "Follow a structured approach: Requirements Clarification (3-5m), Back-of-the-Envelope Estimation (3-5m), High-Level Architecture & APIs (10-15m), Detailed Subsystem Deep-Dive (15m), and Bottlenecks/Failover (5m).",
      C: "Wait silently for the interviewer to dictate every step and component of the design.",
      D: "Write production Java code for database ORM mapping models."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Jumping directly into drawing components without scoping functional and non-functional requirements leads to invalid designs.",
      B: "Option B is correct! A disciplined, step-by-step structure demonstrates engineering leadership: scope requirements -> estimate scale -> define APIs/schemas -> draw high-level architecture -> deep dive into bottleneck components.",
      C: "Option C is incorrect. SDIs require the candidate to lead the conversation proactively rather than waiting for instructions.",
      D: "Option D is incorrect. Writing full production code is not expected in high-level system design interviews."
    }
  },
  {
    id: 4,
    topic: "1.1 Why System Design Interview",
    question: "If a system design prompt asks: 'Design YouTube', what should be your immediate first step upon hearing the prompt?",
    options: {
      A: "Immediately draw an AWS CloudFront CDN box and a Cassandra database on the board.",
      B: "Ask targeted clarifying questions to narrow down the functional scope (e.g. video upload vs search vs recommendation feed) and scale constraints.",
      C: "State that designing YouTube is impossible in 45 minutes and request a simpler question.",
      D: "Write a detailed SQL query for video comment threads."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Selecting technologies prior to knowing whether you are designing video ingestion, search, or streaming is a major red flag.",
      B: "Option B is correct! System design prompts like 'Design YouTube' are deliberately vague. You must ask questions to establish what specific subset of features (upload, streaming, search) to focus on within the 45-minute limit.",
      C: "Option C is incorrect. Asking to change the problem demonstrates a lack of problem-solving adaptability.",
      D: "Option D is incorrect. Writing detailed SQL queries at step 1 skips requirement scoping."
    }
  },
  {
    id: 5,
    topic: "1.2 Functional vs Non-Functional Requirements",
    question: "Which of the following belongs strictly to the **Functional Requirements** section when designing a URL Shortener (like Bitly)?",
    options: {
      A: "The system should achieve 99.99% uptime availability.",
      B: "Given a long URL, the service should generate a unique, short alias (e.g. `http://tiny.url/xyz123`).",
      C: "URL redirection p99 latency must be under 10 milliseconds.",
      D: "The system must handle 10,000 requests per second with horizontal scalability."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Availability targets (99.99%) are Non-Functional Requirements.",
      B: "Option B is correct! Functional Requirements define **what the system does** (features and user capabilities), such as generating short aliases from long URLs and redirecting clients.",
      C: "Option C is incorrect. Latency metrics (p99 < 10ms) are Non-Functional Requirements.",
      D: "Option D is incorrect. Throughput (10k QPS) and scalability are Non-Functional Requirements."
    }
  },
  {
    id: 6,
    topic: "1.2 Functional vs Non-Functional Requirements",
    question: "When defining **Non-Functional Requirements (NFRs)** for a global financial payment system (like Stripe or PayPal), which set of characteristics MUST take absolute precedence?",
    options: {
      A: "Low storage cost, eventual consistency, and eventual data loss tolerance.",
      B: "Strong Consistency (ACID), zero financial data loss (Durability), high security (PCI-DSS compliance), and High Availability.",
      C: "Unconstrained latency, single-node storage, and soft state replication.",
      D: "Maximum write throughput regardless of duplicate transactions."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Financial payment systems cannot tolerate eventual data loss or weak consistency.",
      B: "Option B is correct! For financial platforms, Non-Functional Requirements demand strict ACID transactions, zero data loss durability, high availability, and security compliance.",
      C: "Option C is incorrect. Unconstrained latency and single-node bottlenecks fail corporate SLAs.",
      D: "Option D is incorrect. Duplicate monetary transactions violate fundamental payment system invariants."
    }
  },
  {
    id: 7,
    topic: "1.2 Functional vs Non-Functional Requirements",
    question: "What is the key difference between **Latency** and **Throughput** in system design non-functional metrics?",
    options: {
      A: "Latency is the number of requests processed per second; Throughput is the time taken for a single request.",
      B: "Latency is the time taken to process a single request (e.g. 50ms); Throughput is the volume of requests the system handles per unit time (e.g. 100,000 QPS).",
      C: "Latency and Throughput are identical measurements of network packet loss.",
      D: "Latency measures CPU core count, while Throughput measures disk size."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. It reverses the definitions of Latency and Throughput.",
      B: "Option B is correct! Latency measures delay/duration for an individual operation (response time), while Throughput measures total capacity or processing volume over time (QPS or bytes/sec).",
      C: "Option C is incorrect. Latency and Throughput measure different performance dimensions.",
      D: "Option D is incorrect. They measure system response time and transaction capacity, not hardware specs."
    }
  },
  {
    id: 8,
    topic: "1.2 Functional vs Non-Functional Requirements",
    question: "A candidate specifies a Non-Functional Requirement: 'The system must be 100% available with 0 milliseconds latency globally.' How will an experienced interviewer view this statement?",
    options: {
      A: "As an impressive engineering target that shows high ambition.",
      B: "As an unrealistic red flag, because network laws of physics (speed of light propagation) and physical infrastructure constraints make 0ms latency and 100% availability impossible.",
      C: "As a standard requirement for all microservices.",
      D: "As a requirement that can be trivially achieved using AWS Lambda."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Claiming impossible numbers shows a lack of real-world distributed systems understanding.",
      B: "Option B is correct! Real-world systems operate under physical limits. Fiber-optic network round trips cross-continent take ~70-100ms minimum, and hardware/network failures prevent 100.000% availability. Candidates must state realistic SLAs (e.g. 99.99% uptime, <100ms p99 latency).",
      C: "Option C is incorrect. No production microservice operates at 0ms latency.",
      D: "Option D is incorrect. AWS Lambda introduces cold starts and network latency."
    }
  },
  {
    id: 9,
    topic: "1.3 Back-of-the-Envelope Estimations",
    question: "Your system receives **10 Million active write requests per day**. What is the average Queries Per Second (QPS)?",
    options: {
      A: "Approximately 116 QPS",
      B: "Approximately 1,160 QPS",
      C: "Approximately 11,600 QPS",
      D: "Approximately 116,000 QPS"
    },
    correct: "A",
    explanations: {
      A: "Option A is correct! There are 86,400 seconds in a day (round to 90,000 for mental math). $\\frac{10,000,000}{86,400} \\approx 115.7 \\approx 116 \\text{ QPS}$. (Useful tip: 1 Million requests/day $\\approx$ 12 QPS).",
      B: "Option B is incorrect. 1,160 QPS corresponds to 100 Million requests per day.",
      C: "Option C is incorrect. 11,600 QPS corresponds to 1 Billion requests per day.",
      D: "Option D is incorrect. 116,000 QPS corresponds to 10 Billion requests per day."
    }
  },
  {
    id: 10,
    topic: "1.3 Back-of-the-Envelope Estimations",
    question: "If your system has an **average write QPS of 500 QPS**, and traffic typically spikes by a factor of 2x during peak hours, what **Peak QPS** capacity must you provision for?",
    options: {
      A: "500 QPS",
      B: "1,000 QPS",
      C: "5,000 QPS",
      D: "50,000 QPS"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Provisioning for average QPS leads to outage during peak traffic spikes.",
      B: "Option B is correct! Peak QPS = Average QPS $\\times$ Peak Factor = $500 \\times 2 = 1,000 \\text{ QPS}$. In system design, systems must be architected to handle Peak QPS headroom seamlessly.",
      C: "Option C is incorrect. 5,000 QPS represents a 10x multiplier.",
      D: "Option D is incorrect. 50,000 QPS represents a 100x multiplier."
    }
  },
  {
    id: 11,
    topic: "1.3 Back-of-the-Envelope Estimations",
    question: "In system design storage estimations, what is the exact relationship between Bytes, Gigabytes (GB), Terabytes (TB), and Petabytes (PB) in power-of-two powers?",
    options: {
      A: "$1 \\text{ GB} = 10^3 \\text{ Bytes}$, $1 \\text{ TB} = 10^6 \\text{ Bytes}$, $1 \\text{ PB} = 10^9 \\text{ Bytes}$",
      B: "$1 \\text{ GB} = 2^{30} \\text{ Bytes} (\\sim 10^9)$, $1 \\text{ TB} = 2^{40} \\text{ Bytes} (\\sim 10^{12})$, $1 \\text{ PB} = 2^{50} \\text{ Bytes} (\\sim 10^{15})$",
      C: "$1 \\text{ GB} = 10^{12} \\text{ Bytes}$, $1 \\text{ TB} = 10^{15} \\text{ Bytes}$",
      D: "$1 \\text{ PB} = 10^6 \\text{ Bytes}$"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. $10^3$ bytes is a Kilobyte, not a Gigabyte.",
      B: "Option B is correct! In computer science estimations: $1 \\text{ KB} = 2^{10} \\approx 10^3 \\text{ Bytes}$, $1 \\text{ MB} = 2^{20} \\approx 10^6 \\text{ Bytes}$, $1 \\text{ GB} = 2^{30} \\approx 10^9 \\text{ Bytes}$, $1 \\text{ TB} = 2^{40} \\approx 10^{12} \\text{ Bytes}$, and $1 \\text{ PB} = 2^{50} \\approx 10^{15} \\text{ Bytes}$.",
      C: "Option C is incorrect. $10^{12}$ bytes is a Terabyte, not a Gigabyte.",
      D: "Option D is incorrect. $10^6$ bytes is a Megabyte."
    }
  },
  {
    id: 12,
    topic: "1.3 Back-of-the-Envelope Estimations",
    question: "A photo-sharing service receives **500,000 new photo uploads per day**. Each photo averages **2 MB** in size. How much storage capacity is required to store 1 year of photo uploads (excluding replication)?",
    options: {
      A: "Approximately 3.65 Terabytes (TB)",
      B: "Approximately 365 Terabytes (TB)",
      C: "Approximately 36.5 Petabytes (PB)",
      D: "Approximately 3.65 Gigabytes (GB)"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. 3.65 TB is off by a factor of 100.",
      B: "Option B is correct! Daily Storage = $500,000 \\text{ photos} \\times 2 \\text{ MB} = 1,000,000 \\text{ MB} = 1 \\text{ TB/day}$. Yearly Storage = $1 \\text{ TB/day} \\times 365 \\text{ days} = 365 \\text{ TB}$. Quick mental math is a key skill evaluated in back-of-the-envelope estimations.",
      C: "Option C is incorrect. 36.5 PB is off by 100x.",
      D: "Option D is incorrect. 3.65 GB is far too low."
    }
  },
  {
    id: 13,
    topic: "1.3 Back-of-the-Envelope Estimations",
    question: "If your web application generates **100 Megabytes per second (100 MB/s)** of outgoing video bandwidth, what is the required network bandwidth in **bits per second**?",
    options: {
      A: "100 Mbps (Megabits per second)",
      B: "800 Mbps (Megabits per second) or 0.8 Gbps",
      C: "8,000 Mbps or 8 Gbps",
      D: "10 Mbps"
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. 1 Byte = 8 bits, so 100 MB/s is NOT 100 Mbps.",
      B: "Option B is correct! Network bandwidth from ISPs and cloud providers is measured in bits (b), while storage is measured in Bytes (B). $100 \\text{ MB/s} \\times 8 \\text{ bits/Byte} = 800 \\text{ Mbps}$ (or 0.8 Gbps).",
      C: "Option C is incorrect. 8,000 Mbps corresponds to 1,000 MB/s.",
      D: "Option D is incorrect."
    }
  },
  {
    id: 14,
    topic: "1.3 Back-of-the-Envelope Estimations",
    question: "Comparing order-of-magnitude hardware latency numbers, how much faster is reading data sequentially from **L1 Cache / RAM** compared to reading over a **Cross-Continent Network Round Trip (WAN)**?",
    options: {
      A: "RAM is roughly 2 times faster than WAN.",
      B: "RAM (~10-100 nanoseconds) is roughly 100,000 to 1,000,000 times faster than a WAN round trip (~150 milliseconds).",
      C: "WAN network reads are faster than RAM reads.",
      D: "They have identical access latency."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. 2x is far too small a difference across physical hardware domains.",
      B: "Option B is correct! L1 cache (~0.5 ns) and Main Memory RAM (~100 ns) operate in nanoseconds. A cross-continent WAN packet round trip (~150 ms = 150,000,000 ns) is over 1,000,000 times slower due to speed-of-light optical fiber limits. This latency gap justifies caching strategies.",
      C: "Option C is incorrect. Network transit is orders of magnitude slower than local CPU memory access.",
      D: "Option D is incorrect."
    }
  },
  {
    id: 15,
    topic: "1.4 Things to Avoid During System Design Interview",
    question: "What is the mistake known as **'Silent Design'** during a system design interview?",
    options: {
      A: "Designing an audio streaming platform without sound.",
      B: "Standing quietly at the whiteboard for 10-15 minutes drawing diagrams without explaining your thought process, architectural choices, or trade-offs aloud.",
      C: "Refusing to write SQL code.",
      D: "Using dark theme in your code editor."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. 'Silent design' is a communication anti-pattern, not an audio domain term.",
      B: "Option B is correct! System design interviews are collaborative discussions. Working silently prevents the interviewer from understanding your architectural rationale, trade-off evaluations, and engineering assumptions.",
      C: "Option C is incorrect. SQL code is rarely written line-by-line in high-level SDIs.",
      D: "Option D is incorrect. Editor themes are irrelevant."
    }
  },
  {
    id: 16,
    topic: "1.4 Things to Avoid During System Design Interview",
    question: "A candidate is asked to design a basic URL shortener and immediately suggests deploying Kafka, Cassandra, Redis Cluster, Elasticsearch, Kubernetes, and gRPC. What critical mistake is being committed?",
    options: {
      A: "Under-engineering the system.",
      B: "Over-Engineering & Buzzword Driven Design (introducing unnecessary complex technologies before establishing simpler baseline architecture).",
      C: "Selecting incorrect database drivers.",
      D: "Failing to write unit tests."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Introducing 6 high-complexity technologies for a simple URL shortener is the opposite of under-engineering.",
      B: "Option B is correct! Over-engineering and throwing high-complexity technologies at a simple problem without justification is a major red flag. Candidates should start with a clean baseline architecture and introduce complex components only when scale/requirements demand it.",
      C: "Option C is incorrect. Database drivers are low-level implementation details.",
      D: "Option D is incorrect. Unit tests are not written during high-level design sessions."
    }
  },
  {
    id: 17,
    topic: "1.4 Things to Avoid During System Design Interview",
    question: "During a design interview, the interviewer intervenes and asks: 'What happens to your single database master node if the underlying disk fails?' How should you react?",
    options: {
      A: "Ignore the question completely and continue talking about your frontend React components.",
      B: "Argue that disks never fail in modern cloud environments like AWS.",
      C: "Treat it as a constructive hint/probe: acknowledge the Single Point of Failure (SPOF), discuss primary-replica failover, and incorporate redundancy into the design.",
      D: "Restart your design from scratch."
    },
    correct: "C",
    explanations: {
      A: "Option A is incorrect. Ignoring interviewer questions signals poor collaboration and communication skills.",
      B: "Option B is incorrect. Hardware failures occur frequently at scale in cloud datacenters.",
      C: "Option C is correct! Interviewer prompts are intended to guide candidates toward identifying bottlenecks and SPOFs. Proactively incorporating their feedback into failover and replication strategies demonstrates adaptability.",
      D: "Option D is incorrect. You should refine the bottlenecked layer, not restart the entire design."
    }
  },
  {
    id: 18,
    topic: "1.4 Things to Avoid During System Design Interview",
    question: "Why is **Premature Technology Lock-in** (e.g. stating 'We MUST use MongoDB' in the first 2 minutes of the interview) considered a major flaw?",
    options: {
      A: "Because MongoDB is not open source.",
      B: "Because prescribing a specific database before establishing data access patterns, ACID transactional needs, read/write ratios, and scale requirements demonstrates poor architectural methodology.",
      C: "Because interviewers only accept PostgreSQL.",
      D: "Because technology names cannot be mentioned in interviews."
    },
    correct: "B",
    explanations: {
      A: "Option A is incorrect. Licensing is not the architectural issue here.",
      B: "Option B is correct! Experienced engineers define data requirements, access patterns (key-value vs graph vs relational), and ACID constraints FIRST before picking a database technology family. Technology lock-in without justification demonstrates dogma over engineering reasoning.",
      C: "Option C is incorrect. Interviewers evaluate trade-off reasoning, not bias toward a single vendor.",
      D: "Option D is incorrect. Tech names are fine once justified by requirement trade-offs."
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
