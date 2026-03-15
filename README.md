# GigShield AI  
### Smart weekly income protection for delivery partners

GigShield AI is built for delivery workers whose earnings depend on being active every single day. When something outside their control happens — like heavy rain, flooding, extreme heat, bad air quality, local restrictions, or even a platform outage — their working hours drop, and so does their income.

That is the problem we are trying to solve.

GigShield AI is a **mobile-first, AI-powered income protection platform** designed especially for **grocery and quick-commerce delivery partners**. It offers **weekly plans**, tracks real-world disruption events, checks whether a worker is genuinely affected, and then **automatically initiates claims and simulates instant payouts** for lost income.

---

## The Problem

For delivery partners, even a few lost hours can make a real difference.

A rider may be fully ready to work, but because of sudden rain, waterlogging, traffic blockage, heatwaves, pollution, local shutdowns, or platform downtime, they may not be able to complete deliveries. In those cases, they lose income even though the problem is not their fault.

Most traditional insurance products focus on accidents, health, or vehicle damage. But in this case, the real issue is much simpler and more practical:

> **What happens when a worker loses income because external conditions stop them from working?**

That is where GigShield AI comes in.

---

## Our Idea

GigShield AI gives delivery workers a **weekly income protection plan**.

Once a worker signs up, the platform understands:
- where they usually work
- when they usually work
- how much they typically earn
- how risky their zone is

Using that information, the system calculates a **weekly premium**.

After that, the platform keeps monitoring real-time disruption signals such as:
- weather
- flooding
- heat
- AQI
- traffic conditions
- local closures
- platform outages

If a verified disruption affects a worker during their usual earning hours, the system:
1. detects the disruption
2. checks whether the worker is actually impacted
3. runs fraud validation
4. estimates income loss
5. initiates a claim automatically
6. processes an instant simulated payout

So instead of filling out long forms and waiting, the worker gets a faster and smarter experience.

---

## Why GigShield AI Matters

What makes this solution meaningful is that it is built around the real life of a gig worker.

Delivery workers do not think in terms of annual insurance policies. They think in terms of daily shifts and weekly income. A few hours of disruption can affect food, fuel, savings, and household planning.

That is why our platform is designed to be:

- **weekly**, not yearly
- **mobile-first**, because workers operate through their phones
- **hyperlocal**, because risk changes from one zone to another
- **automatic**, because workers should not struggle with paperwork
- **fair**, because claims are validated before payout
- **fast**, because support delayed is support denied

---

## Target Users

We are focusing on **grocery and quick-commerce delivery partners** such as workers in Blinkit, Zepto, and Instamart-style ecosystems.

We chose this group because:
- they work in clearly defined delivery zones
- their earnings depend on continuous short delivery cycles
- their work is highly affected by weather and road conditions
- their income loss is easy to understand and measure

This makes the problem real, visible, and worth solving.

---

## How the Platform Works

### 1. Worker Onboarding
The worker signs in using a mobile number and enters basic details like:
- work zone
- average working hours
- average weekly earnings
- payout method

### 2. AI-Based Risk Assessment
The system studies the worker’s risk using:
- location
- weather history
- flood risk
- heat levels
- AQI trends
- traffic issues
- work timing
- previous disruption patterns

Based on this, the platform generates a **risk score**.

### 3. Weekly Premium Recommendation
Using the risk score, the worker gets a recommended weekly plan.

For example:
- lower-risk worker → lower weekly premium
- higher-risk worker in a flood-prone area → slightly higher premium

This keeps pricing personalized and practical.

### 4. Real-Time Trigger Monitoring
The platform continuously checks disruption signals from integrated APIs or mock data sources.

These include:
- heavy rain
- flood / waterlogging alerts
- extreme heat
- severe pollution
- traffic slowdown
- local closure / curfew
- app or dispatch outage

### 5. Automatic Claim Initiation
When a verified disruption happens, the system identifies which covered workers are likely affected during that time.

If the worker falls inside that disruption window, the platform automatically creates a claim.

### 6. Fraud Detection
Before payout, the claim goes through validation checks such as:
- location matching
- activity timing check
- duplicate claim prevention
- anomaly detection
- suspicious behavior flagging

This ensures the system stays strong and trustworthy.

### 7. Income Loss Calculation
The platform estimates how much the worker likely lost during the disruption.

A simple model can be:

`Average hourly earnings × lost hours × severity factor`

### 8. Instant Simulated Payout
Once the claim is approved, the platform simulates payout through a payment gateway or sandbox flow and updates the worker dashboard immediately.

---

## Main Features

## AI-Powered Risk Assessment
GigShield AI uses worker and zone-level data to understand how risky a week is likely to be. This helps the platform recommend fair weekly pricing instead of giving the same premium to everyone.

### Includes:
- dynamic weekly premium calculation
- predictive risk scoring
- personalized plan recommendation

---

## Weekly Pricing Model
Our solution is based on a **weekly protection model** because that matches the earning cycle of delivery workers much better than a monthly or yearly policy.

### Sample plans:
- **Starter Plan** – for part-time workers
- **Standard Plan** – for regular delivery workers
- **Pro Plan** – for high-risk or full-time workers

This makes the system more flexible and easier to adopt.

---

## Parametric Automation
GigShield AI uses a **parametric model**, which means claims are triggered by verified real-world events rather than lengthy manual proof collection.

That means:
- if the event happens
- the worker is covered
- the worker is genuinely affected

then the claim can be initiated automatically.

This is one of the strongest parts of the solution.

---

## Fraud Detection
Fast payouts only work when the system can also prevent misuse.

That is why our platform includes:
- anomaly detection
- location validation
- activity validation
- duplicate claim blocking
- suspicious pattern analysis

This makes the platform both worker-friendly and operationally reliable.

---

## Instant Payout Flow
The goal is not just to detect disruption, but to actually support the worker in time.

So once a claim is validated, the system processes an **instant simulated payout** and reflects it in the dashboard.

This creates trust and makes the product feel useful in the real world.

---

## Dashboard Experience

### Worker Dashboard
The worker can see:
- active weekly plan
- premium paid
- recent claims
- payout history
- protected earnings
- disruption alerts

### Admin Dashboard
The admin side can view:
- active policies
- claim volume
- approved / flagged claims
- fraud patterns
- zone risk heatmaps
- payout trends

This makes the system useful not only for workers, but also for operational decision-making.

---

## Example Scenario

Let’s take a simple example.

Rahul is a quick-commerce delivery rider.

- He works in Zone A
- His usual shift is 5 PM to 10 PM
- He has bought a weekly protection plan
- His average earnings are ₹95 per hour

Now suppose:
- heavy rain starts in Zone A at 6 PM
- traffic slows down sharply
- deliveries become difficult for 2 hours

Here’s what GigShield AI does:

1. the system detects the rain trigger
2. it verifies that Rahul’s zone is affected
3. it checks that Rahul is usually active during that time
4. it confirms there is no duplicate or suspicious claim
5. it estimates lost earnings

If Rahul loses 2 working hours, then:

`₹95 × 2 = ₹190`

The system then simulates a payout and updates his dashboard.

This is how the solution works in a real, understandable way.

---

## Technology Stack

### Frontend
- React
- Vite
- Tailwind CSS
- PWA support

### Backend
- FastAPI

### Database
- PostgreSQL
- Redis

### AI / ML
- Python
- pandas
- scikit-learn / XGBoost

### Integrations
- weather API or mock feed
- traffic / closure mock data
- platform activity simulator
- payment sandbox
- map / zone-based services

---

## What Makes Our Solution Different

GigShield AI is not just another insurance form moved online.

What makes it different is the combination of:
- **income-loss focus**
- **weekly pricing**
- **delivery-worker-specific design**
- **hyperlocal disruption tracking**
- **automatic claims**
- **fraud-aware validation**
- **instant payout simulation**

We are not trying to build a broad insurance platform for everything.

We are solving one very specific and important problem:
> helping delivery workers recover from income loss caused by short-term external disruptions.

That clarity is our strength.

---

## Our Vision

We believe protection for gig workers should be:
- simple
- fast
- fair
- transparent
- built around real work patterns

GigShield AI is a step in that direction.

It combines AI, automation, and parametric logic to create a system that feels practical, modern, and useful for the people who need it most.

---

## Final Pitch

**GigShield AI is a hyperlocal, AI-powered, weekly income protection platform for quick-commerce delivery workers that detects real-world disruptions, validates genuine impact, prevents fraud, and simulates instant payout for lost earnings.**

---

## Team Details

**Team Name:** Code Warriors 
**Hackathon:** DEVTrails 2026  
**Project Name:** GigShield AI  
**Team Members:** K Vinay, N Hrutin, CH kusuma , R Nithin

---

## Contact

**Name:** Tarun Komati  
**Project:** GigShield AI
