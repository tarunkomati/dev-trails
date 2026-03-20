import { useEffect } from 'react'
import './App.css'

const tickerItems = [
  'Rain alerts',
  'Flood checks',
  'Heat and AQI',
  'Traffic slowdowns',
  'Platform outages',
  'Auto claims',
]

const disruptionCards = [
  {
    title: 'Workers can lose pay even when ready to work',
    detail:
      'Rain, flooding, heat, poor air quality, or blocked roads can reduce orders and cut earning hours.',
    accent: 'linear-gradient(135deg, rgba(14, 182, 160, 0.22), rgba(102, 215, 242, 0.04))',
  },
  {
    title: 'Weekly cover fits weekly income',
    detail:
      "Most workers think about this week's fuel, food, and savings. The plan is built around that weekly rhythm.",
    accent: 'linear-gradient(135deg, rgba(242, 169, 59, 0.2), rgba(255, 255, 255, 0.06))',
  },
  {
    title: 'Claims can start automatically',
    detail:
      'If a real disruption hits during active hours, GigShield AI can create the claim and estimate the lost income automatically.',
    accent: 'linear-gradient(135deg, rgba(91, 127, 255, 0.18), rgba(255, 255, 255, 0.04))',
  },
  {
    title: 'Fast support with fraud checks',
    detail:
      'The system checks zone, timing, activity, and device signals before approving payout.',
    accent: 'linear-gradient(135deg, rgba(242, 108, 91, 0.2), rgba(255, 255, 255, 0.04))',
  },
]

const heroProofs = [
  {
    value: 'Weekly',
    label: 'plans built around how gig workers actually earn',
  },
  {
    value: 'Hyperlocal',
    label: 'zone-based disruption detection and risk checks',
  },
  {
    value: 'Automatic',
    label: 'claim initiation when real disruption overlap is verified',
  },
  {
    value: 'Multi-signal',
    label: 'fraud and spoof checks before payout',
  },
]

const flowSteps = [
  {
    id: '01',
    title: 'Add worker details',
    detail:
      'The worker enters zone, shift hours, average earnings, and payout method in a simple mobile flow.',
  },
  {
    id: '02',
    title: 'Estimate weekly risk',
    detail:
      'The system studies weather history, flood exposure, heat, AQI, and route conditions for that zone.',
  },
  {
    id: '03',
    title: 'Suggest the right plan',
    detail:
      "Starter, Standard, or Pro is recommended based on zone risk, working hours, and the worker's earning pattern.",
  },
  {
    id: '04',
    title: 'Watch live disruptions',
    detail:
      'Rain, traffic, local restrictions, and platform outage feeds run in real time during earning hours.',
  },
  {
    id: '05',
    title: 'Start and verify the claim',
    detail:
      'If the disruption matches the worker zone and time, the app checks trust signals, estimates loss, and routes the claim.',
  },
]

const enginePillars = [
  'Risk score',
  'Event check',
  'Fraud check',
  'Loss estimate',
]

const workerHighlights = [
  {
    label: 'Current plan',
    value: 'Standard Shield',
    note: 'INR 79 premium',
  },
  {
    label: 'Expected payout',
    value: 'INR 190',
    note: 'for current event',
  },
  {
    label: 'Claim status',
    value: 'Ready to review',
    note: 'low fraud risk',
  },
]

const workerFeed = [
  {
    time: '5:58 PM',
    title: 'Heavy rain warning issued',
    detail: 'Zone A moved to high-disruption status.',
  },
  {
    time: '6:03 PM',
    title: 'Traffic slowdown detected',
    detail: 'Average route time increased by 31 percent.',
  },
  {
    time: '6:08 PM',
    title: 'Claim created automatically',
    detail: 'Loss preview generated for Rahul shift window.',
  },
]

const adminMetrics = [
  { label: 'Auto-approved', value: '84%' },
  { label: 'Flagged', value: '11%' },
  { label: 'Delayed verify', value: '5%' },
]

const fraudSignals = [
  'Location matches the work zone',
  'Timing matches the worker shift',
  'Device and network stay consistent',
  'Movement looks real, not spoofed',
  'Order activity matches normal behavior',
  'Repeated or linked claims are flagged',
]

const claimRoutes = [
  {
    title: 'Approve',
    detail: 'Used when the disruption, shift overlap, and trust signals all match clearly.',
  },
  {
    title: 'Check again',
    detail: 'Used when the event looks real but one or two signals need a second review.',
  },
  {
    title: 'Manual review',
    detail: 'Used when spoofing, duplicate behavior, or linked fraud patterns appear.',
  },
]

const scenarioMoments = [
  'Rahul works in Zone A from 5 PM to 10 PM',
  'Heavy rain and traffic slowdown hit from 6 PM to 8 PM',
  'His average earning rate is INR 95 per hour',
  'The estimated support amount is INR 190',
]

const plans = [
  {
    tier: 'Starter',
    price: 'INR 49',
    fit: 'For part-time riders with lower weekly exposure',
    coverage: 'Basic alerts, simple disruption cover, weekly summary',
  },
  {
    tier: 'Standard',
    price: 'INR 79',
    fit: 'For regular quick-commerce workers',
    coverage: 'Balanced cover, auto-claim support, stronger weekly protection',
  },
  {
    tier: 'Pro',
    price: 'INR 119',
    fit: 'For full-time workers in higher-risk zones',
    coverage: 'Wider cover window, priority verification, higher support band',
  },
]

function App() {
  useEffect(() => {
    const revealNodes = document.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return
          }

          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    revealNodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app-shell">
      <header
        className="topbar section"
        data-reveal
        style={{ '--reveal-delay': '0ms' }}
      >
        <a className="brand" href="#top" aria-label="GigShield AI home">
          <span className="brand-mark">G</span>
          <span className="brand-copy">
            <strong>GigShield AI</strong>
            <small>Income protection for gig workers</small>
          </span>
        </a>

        <nav className="topnav" aria-label="Primary navigation">
          <a href="#problem">Problem</a>
          <a href="#flow">Flow</a>
          <a href="#dashboards">Dashboards</a>
          <a href="#defense">Fraud Checks</a>
        </nav>

        <a className="nav-cta" href="#plans">
          Coverage Plans
        </a>
      </header>

      <main id="top">
        <section className="hero section">
          <div
            className="hero-copy"
            data-reveal
            style={{ '--reveal-delay': '80ms' }}
          >
            <span className="section-tag">Income protection for gig work</span>

            <h1>
              Protect weekly income
              <span> when outside conditions shut gig work down.</span>
            </h1>

            <p className="hero-text">
              GigShield AI is a weekly income protection platform for gig workers
              whose earnings depend on staying active every day. It is built first
              for delivery and quick-commerce workers, using hyperlocal disruption
              signals to verify impact, estimate lost income, and trigger support
              automatically.
            </p>

            <div className="cta-row">
              <a className="button button-primary" href="#flow">
                Explore how it works
              </a>
              <a className="button button-secondary" href="#scenario">
                View payout example
              </a>
            </div>

            <div className="proof-grid">
              {heroProofs.map((item, index) => (
                <div
                  className="proof-card"
                  data-reveal
                  key={item.value}
                  style={{ '--reveal-delay': `${140 + index * 80}ms` }}
                >
                  <strong>{item.value}</strong>
                  <small>{item.label}</small>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-visual"
            data-reveal
            style={{ '--reveal-delay': '140ms' }}
          >
            <div className="floating-card floating-card-top">
              <span>Live alert</span>
              <strong>Heavy rain in Zone A</strong>
              <small>6:02 PM verified</small>
            </div>

            <div className="phone-frame">
              <div className="phone-notch" aria-hidden="true" />

              <div className="screen-top">
                <div>
                  <span className="micro-label">Worker dashboard</span>
                  <h2>Your weekly cover</h2>
                </div>

                <span className="status-pill">Claim ready</span>
              </div>

              <div className="screen-grid">
                <article className="screen-card hero-score-card">
                  <div>
                    <span className="micro-label">Risk score</span>
                    <strong>74 / 100</strong>
                    <p>Standard Shield recommended for Rahul in Zone A.</p>
                  </div>

                  <div className="signal-dial">
                    <span>Fraud risk</span>
                    <strong>Low</strong>
                  </div>
                </article>

                <article className="screen-card map-card">
                  <span className="micro-label">Disruption overlap</span>
                  <strong>Heavy rain + traffic slowdown</strong>
                  <div className="map-grid" aria-hidden="true">
                    <span className="map-node node-one" />
                    <span className="map-node node-two" />
                    <span className="map-node node-three" />
                    <span className="map-node node-four" />
                  </div>
                </article>

                <article className="screen-card loss-card">
                  <span className="micro-label">Loss estimate</span>
                  <strong>INR 190</strong>
                  <p>INR 95 x 2 disrupted hours x verified severity</p>
                </article>
              </div>

              <div className="timeline-card">
                {workerFeed.map((event) => (
                  <div className="timeline-row" key={event.time}>
                    <span>{event.time}</span>
                    <div>
                      <strong>{event.title}</strong>
                      <p>{event.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="floating-card floating-card-bottom">
              <span>Payout update</span>
              <strong>Ready in minutes</strong>
              <small>after verification checks</small>
            </div>
          </div>
        </section>

        <section className="ticker-section">
          <div className="ticker-track" aria-label="Platform capabilities">
            {tickerItems.map((item) => (
              <span className="ticker-pill" key={item}>
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="section narrative-section" id="problem">
          <div
            className="section-copy"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="section-tag">The problem</span>
            <h2>Gig workers lose income the moment real-world disruption cuts active hours.</h2>
            <p>
              A worker can be fully ready to work and still lose pay because rain,
              traffic, platform downtime, or local restrictions suddenly reduce the
              ability to complete orders. GigShield AI turns that short-term loss
              into a clear, weekly protection product.
            </p>
          </div>

          <div className="problem-grid">
            {disruptionCards.map((card, index) => (
              <article
                className="problem-card"
                data-reveal
                key={card.title}
                style={{
                  '--reveal-delay': `${100 + index * 90}ms`,
                  '--card-accent': card.accent,
                }}
              >
                <h3>{card.title}</h3>
                <p>{card.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section flow-section" id="flow">
          <div
            className="section-copy"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="section-tag">How it works</span>
            <h2>A protection flow designed around how gig workers actually earn.</h2>
            <p>
              The worker adds basic details, gets a weekly plan, stays covered during
              active hours, and sees a claim only when a verified disruption affects
              real earning time.
            </p>
          </div>

          <div className="flow-layout">
            <div className="flow-steps">
              {flowSteps.map((step, index) => (
                <article
                  className="step-card"
                  data-reveal
                  key={step.id}
                  style={{ '--reveal-delay': `${120 + index * 80}ms` }}
                >
                  <span className="step-index">{step.id}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </div>
                </article>
              ))}
            </div>

            <aside
              className="engine-panel"
              data-reveal
              style={{ '--reveal-delay': '180ms' }}
            >
              <span className="section-tag compact">What the system checks</span>
              <div className="engine-list">
                {enginePillars.map((pillar) => (
                  <div className="engine-item" key={pillar}>
                    <span className="engine-marker" aria-hidden="true" />
                    <strong>{pillar}</strong>
                  </div>
                ))}
              </div>

              <div className="metric-stack">
                <div className="metric-card">
                  <span>Built for</span>
                  <strong>Delivery, grocery, and hyperlocal gig workers</strong>
                </div>
                <div className="metric-card">
                  <span>Claim rule</span>
                  <strong>Verified event + worker overlap + multi-signal trust check</strong>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section dashboard-section" id="dashboards">
          <div
            className="section-copy"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="section-tag">In the app</span>
            <h2>Simple for workers. Strong enough for operations.</h2>
            <p>
              Workers can quickly understand their plan, alerts, claim status, and
              payout history. The operations side can monitor risky zones and review
              suspicious claims without slowing down genuine users.
            </p>
          </div>

          <div className="dashboard-grid">
            <article
              className="dashboard-panel"
              data-reveal
              style={{ '--reveal-delay': '120ms' }}
            >
              <div className="panel-heading">
                <div>
                  <span className="section-tag compact">Worker app</span>
                  <h3>See cover, alerts, claim progress, and support amount in one place.</h3>
                </div>
                <span className="status-pill muted">Live alerts on</span>
              </div>

              <div className="worker-layout">
                <div className="worker-ring">
                  <span>Protected earnings</span>
                  <strong>INR 4,850</strong>
                  <small>weekly total</small>
                </div>

                <div className="worker-highlights">
                  {workerHighlights.map((item) => (
                    <div className="highlight-card" key={item.label}>
                      <span>{item.label}</span>
                      <strong>{item.value}</strong>
                      <small>{item.note}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="activity-feed">
                {workerFeed.map((event) => (
                  <div className="feed-row" key={`${event.time}-${event.title}`}>
                    <span>{event.time}</span>
                    <div>
                      <strong>{event.title}</strong>
                      <p>{event.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </article>

            <article
              className="dashboard-panel admin-panel"
              data-reveal
              style={{ '--reveal-delay': '200ms' }}
            >
              <div className="panel-heading">
                <div>
                  <span className="section-tag compact">Operations view</span>
                  <h3>Track risky zones, claim routing, and suspicious activity.</h3>
                </div>
                <span className="status-pill warm">Risk pulse active</span>
              </div>

              <div className="admin-heatmap">
                <div className="heatmap-shell" aria-hidden="true">
                  <span className="heat-spot heat-spot-a" />
                  <span className="heat-spot heat-spot-b" />
                  <span className="heat-spot heat-spot-c" />
                  <span className="heat-spot heat-spot-d" />
                </div>
                <div className="heatmap-copy">
                  <strong>Zone A disruption cluster</strong>
                  <p>Rain + slowdown + moderate spoof watch</p>
                </div>
              </div>

              <div className="admin-metrics">
                {adminMetrics.map((metric) => (
                  <div className="admin-metric" key={metric.label}>
                    <span>{metric.label}</span>
                    <strong>{metric.value}</strong>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="section defense-section" id="defense">
          <div
            className="section-copy"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="section-tag">Fraud protection</span>
            <h2>Automatic when genuine. Controlled when suspicious.</h2>
            <p>
              A worker should get fast help, but the system also has to block fake
              claims. GigShield AI checks multiple trust signals before payout so
              genuine workers are supported and suspicious behavior is flagged early.
            </p>
          </div>

          <div className="defense-layout">
            <div className="signal-grid">
              {fraudSignals.map((signal, index) => (
                <div
                  className="signal-card"
                  data-reveal
                  key={signal}
                  style={{ '--reveal-delay': `${120 + index * 70}ms` }}
                >
                  <span className="signal-index">{`0${index + 1}`}</span>
                  <strong>{signal}</strong>
                </div>
              ))}
            </div>

            <div className="route-panel">
              {claimRoutes.map((route, index) => (
                <article
                  className="route-card"
                  data-reveal
                  key={route.title}
                  style={{ '--reveal-delay': `${160 + index * 90}ms` }}
                >
                  <h3>{route.title}</h3>
                  <p>{route.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section scenario-section" id="scenario">
          <div
            className="section-copy"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="section-tag">Example payout</span>
            <h2>One disruption, one verified payout path.</h2>
            <p>
              Rahul is on a 5 PM to 10 PM shift in Zone A. Heavy rain begins at 6 PM,
              traffic slows sharply, and two earning hours are lost. The app matches
              the event to his shift, verifies the claim, and estimates support.
            </p>
          </div>

          <div className="scenario-grid">
            <article
              className="scenario-card"
              data-reveal
              style={{ '--reveal-delay': '120ms' }}
            >
              {scenarioMoments.map((moment) => (
                <div className="scenario-row" key={moment}>
                  <span className="scenario-dot" aria-hidden="true" />
                  <p>{moment}</p>
                </div>
              ))}
            </article>

            <article
              className="formula-card"
              data-reveal
              style={{ '--reveal-delay': '180ms' }}
            >
              <span className="section-tag compact">Loss formula</span>
              <strong>INR 95 x 2 disrupted hours = INR 190</strong>
              <p>
                The calculation stays simple and transparent so workers can easily
                understand how the support amount is estimated.
              </p>
            </article>
          </div>
        </section>

        <section className="section plans-section" id="plans">
          <div
            className="section-copy"
            data-reveal
            style={{ '--reveal-delay': '40ms' }}
          >
            <span className="section-tag">Weekly plans</span>
            <h2>Plans designed for gig work, not annual insurance.</h2>
            <p>
              The pricing stays weekly because workers usually think in weekly cash
              flow, not long annual contracts.
            </p>
          </div>

          <div className="plan-grid">
            {plans.map((plan, index) => (
              <article
                className={`plan-card ${index === 1 ? 'featured' : ''}`}
                data-reveal
                key={plan.tier}
                style={{ '--reveal-delay': `${120 + index * 90}ms` }}
              >
                <span className="plan-tier">{plan.tier}</span>
                <strong>{plan.price}</strong>
                <p>{plan.fit}</p>
                <small>{plan.coverage}</small>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer
        className="section footer-panel"
        data-reveal
        style={{ '--reveal-delay': '80ms' }}
      >
        <div>
          <span className="section-tag">Quick summary</span>
          <h2>GigShield AI turns short-term disruption into clear, weekly income protection for gig workers.</h2>
        </div>

        <a className="button button-primary" href="#top">
          Back to top
        </a>
      </footer>
    </div>
  )
}

export default App
