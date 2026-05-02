import './style.css';

type FeedSection = {
  title: string;
  items: string[];
};

const appElement = document.querySelector<HTMLDivElement>('#app');

if (!appElement) {
  throw new Error('App container not found.');
}

const app = appElement;

const feedSections: FeedSection[] = [
  {
    title: 'Today',
    items: [
      'A pinned note or current update can live here as the first item.',
      'Short status lines work well when the site needs to feel active without much design overhead.',
      'This area could become a front-page digest of current work, reading, and recent posts.',
    ],
  },
  {
    title: 'Featured Posts',
    items: [
      'Mock article title for a longer technical write-up or project retrospective.',
      'Another link slot for an essay, devlog, or something worth keeping near the top.',
      'A strong middle section helps define whether the homepage should be more like a feed or an archive.',
      'This text-first layout is intentionally simple so content hierarchy is easier to judge.',
    ],
  },
  {
    title: 'Projects',
    items: [
      'A compact list of selected projects can sit here instead of large cards.',
      'Each line can later link to a detail page, GitHub repo, demo, or note.',
      'This section can stay short if the homepage should feel more like writing than portfolio.',
    ],
  },
  {
    title: 'Writing',
    items: [
      'A place for essays, reading notes, build logs, and unfinished thoughts.',
      'The Oracle-style layout makes dense lists readable without requiring many visual components.',
      'This format is useful if you want the blog to grow incrementally over time.',
    ],
  },
];

function renderFeed() {
  return feedSections
    .map(
      (section) => `
        <section class="feed-section">
          <h2>${section.title}</h2>
          <ul class="feed-list">
            ${section.items.map((item) => `<li><a href="#">${item}</a></li>`).join('')}
          </ul>
        </section>
      `,
    )
    .join('');
}

function renderShell() {
  app.innerHTML = `
    <div class="site-shell">
      <header class="masthead">
        <div class="utility-row">
          <a href="#" class="utility-link">Home</a>
          <a href="#" class="utility-link">Archive</a>
          <a href="#" class="utility-link">About</a>
          <a href="#" class="utility-link">Contact</a>
        </div>
        <div class="brand-row">
          <p class="brand-mark">JAEHYEOK.LOG</p>
          <p class="brand-subtitle">PERSONAL BLOG · NOTES · PROJECTS</p>
        </div>
      </header>

      <main class="page-frame">
        <aside class="sidebar">
          <section class="sidebar-box">
            <h2>Sections</h2>
            <ul class="sidebar-list">
              <li><a href="#">Today</a></li>
              <li><a href="#">Featured Posts</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Writing</a></li>
            </ul>
          </section>

          <section class="sidebar-box">
            <h2>About</h2>
            <ul class="sidebar-list">
              <li><a href="#">Short bio</a></li>
              <li><a href="#">Now page</a></li>
              <li><a href="#">Links</a></li>
            </ul>
          </section>

          <section class="sidebar-box">
            <h2>Meta</h2>
            <ul class="sidebar-list">
              <li><a href="#">RSS</a></li>
              <li><a href="#">GitHub</a></li>
              <li><a href="#">Email</a></li>
            </ul>
          </section>
        </aside>

        <section class="content-panel">
          ${renderFeed()}
        </section>
      </main>

      <footer class="footer">
        <p>Copyright © Mock blog layout study. All rights reserved.</p>
        <p><a href="#">Contact</a> <a href="#">Notes</a> <a href="#">Privacy</a></p>
      </footer>
    </div>
  `;
}

renderShell();
