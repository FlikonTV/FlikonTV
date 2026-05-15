import './style.css';

const app = document.querySelector('#app');

if (!app) {
  throw new Error('App root not found.');
}

const channels = [
  { name: 'Instagram', handle: '@flikoncreative', status: 'Scheduled', color: '#e879f9' },
  { name: 'TikTok', handle: '@flikontv', status: 'Drafting', color: '#22d3ee' },
  { name: 'LinkedIn', handle: 'Flikon Studios', status: 'Review', color: '#60a5fa' },
];

const queuedPosts = [
  { title: 'Launch teaser reel', channel: 'Instagram + TikTok', time: 'Today · 4:30 PM' },
  { title: 'Founder insight carousel', channel: 'LinkedIn', time: 'Tomorrow · 9:00 AM' },
  { title: 'Community poll', channel: 'Instagram Stories', time: 'Fri · 12:15 PM' },
];

app.innerHTML = `
  <main class="shell">
    <nav class="topbar" aria-label="Primary navigation">
      <a class="brand" href="#" aria-label="Flikon Social home">
        <span class="brand-mark">F</span>
        <span>Flikon Social</span>
      </a>
      <div class="nav-links" aria-label="Product sections">
        <a href="#planner">Planner</a>
        <a href="#analytics">Analytics</a>
        <a href="#inbox">Inbox</a>
      </div>
      <a class="button button-ghost" href="#demo">Book demo</a>
    </nav>

    <section class="hero" aria-labelledby="hero-title">
      <div class="hero-copy">
        <p class="eyebrow">Social media management for growing teams</p>
        <h1 id="hero-title">Plan, publish, and measure every channel from one calm workspace.</h1>
        <p class="hero-text">
          Flikon Social brings your content calendar, approvals, social inbox, and performance reporting together so teams can move faster without losing the brand voice.
        </p>
        <div class="hero-actions">
          <a class="button button-primary" href="#planner">Start planning</a>
          <a class="button button-secondary" href="#analytics">View analytics</a>
        </div>
      </div>

      <aside class="dashboard-card" aria-label="Social media dashboard preview">
        <div class="card-header">
          <div>
            <p class="muted">This week</p>
            <h2>Campaign Control</h2>
          </div>
          <span class="live-pill">Live</span>
        </div>
        <div class="metrics-grid">
          <article>
            <span>Posts ready</span>
            <strong>28</strong>
            <small>+8 from last week</small>
          </article>
          <article>
            <span>Engagement</span>
            <strong>12.4%</strong>
            <small>Across 6 channels</small>
          </article>
          <article>
            <span>Inbox SLA</span>
            <strong>18m</strong>
            <small>Median response</small>
          </article>
        </div>
        <div class="queue" id="planner">
          <div class="section-heading">
            <h3>Publishing queue</h3>
            <button type="button">New post</button>
          </div>
          ${queuedPosts
            .map(
              (post) => `
                <article class="queue-item">
                  <div>
                    <strong>${post.title}</strong>
                    <span>${post.channel}</span>
                  </div>
                  <time>${post.time}</time>
                </article>
              `,
            )
            .join('')}
        </div>
      </aside>
    </section>

    <section class="feature-grid" aria-label="Core product capabilities">
      <article id="analytics">
        <span class="icon">📈</span>
        <h2>Unified analytics</h2>
        <p>Compare content, campaigns, and channels with executive-ready reports that are easy to share.</p>
      </article>
      <article id="inbox">
        <span class="icon">💬</span>
        <h2>Smart inbox</h2>
        <p>Route comments and DMs to the right teammate with saved replies and priority alerts.</p>
      </article>
      <article>
        <span class="icon">✅</span>
        <h2>Approvals built in</h2>
        <p>Keep drafts, feedback, compliance notes, and final sign-off attached to every post.</p>
      </article>
    </section>

    <section class="channels" aria-labelledby="channels-title">
      <div>
        <p class="eyebrow">Connected channels</p>
        <h2 id="channels-title">Keep every profile on schedule.</h2>
      </div>
      <div class="channel-list">
        ${channels
          .map(
            (channel) => `
              <article class="channel-card">
                <span class="channel-dot" style="--dot-color: ${channel.color}"></span>
                <div>
                  <strong>${channel.name}</strong>
                  <small>${channel.handle}</small>
                </div>
                <em>${channel.status}</em>
              </article>
            `,
          )
          .join('')}
      </div>
    </section>
  </main>
`;
