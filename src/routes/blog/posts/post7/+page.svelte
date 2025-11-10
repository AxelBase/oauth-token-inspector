<!-- src/routes/blog/posts/post7/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Deploying Your Own Token Inspector with GitHub Pages | Blog</title>
  <meta name="description" content="Fork, customize, and deploy your own version of OAuth Token Inspector in under 5 minutes using GitHub Pages and SvelteKit." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Deploy Your Own Token Inspector | Blog" />
  <meta property="og:description" content="Free, open-source, and fully static — host it anywhere." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Deploy in 5 Minutes" />
  <meta name="twitter:description" content="GitHub Pages + SvelteKit = Your own JWT tool." />
  <meta name="author" content="Axelbase" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Deploying Your Own Token Inspector</p>
  </div>

  <article class="prose">
    <h1>Deploying Your Own Token Inspector with GitHub Pages</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>The <strong>OAuth Token Inspector</strong> is open-source and designed for self-hosting. With SvelteKit’s <code>@sveltejs/adapter-static</code> and GitHub Pages, you can have your own secure, client-side JWT decoder live in under 5 minutes — no server, no cost, no maintenance.</p>

    <h2>Why Host Your Own?</h2>
    <ul>
      <li><strong>Full control</strong> — customize branding, add features</li>
      <li><strong>Zero trust</strong> — no third-party analytics or scripts</li>
      <li><strong>Offline use</strong> — download and open <code>index.html</code></li>
      <li><strong>Team sharing</strong> — internal tool for developers</li>
    </ul>

    <h2>Step-by-Step Deployment</h2>

    <h3>1. Fork the Repository</h3>
    <p>Go to: <a href="https://github.com/Axelbase/oauth-token-inspector" target="_blank" rel="noopener">github.com/Axelbase/oauth-token-inspector</a> → Click <strong>Fork</strong>.</p>

    <h3>2. Enable GitHub Pages</h3>
    <ol>
      <li>Go to <strong>Settings</strong> → <strong>Pages</strong></li>
      <li>Source: <code>main</code> branch → <code>/ (root)</code></li>
      <li>Save</li>
    </ol>

    <h3>3. Build & Deploy</h3>
    <p>GitHub Actions auto-deploys on push:</p>
    <pre><code>{`# .github/workflows/deploy.yml
name: Deploy
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./build`}</code></pre>

    <h3>4. Go Live</h3>
    <p>Your site is at: <code>https://your-username.github.io/oauth-token-inspector</code></p>

    <h2>Customization Ideas</h2>
    <ul>
      <li>Add your company logo in <code>+layout.svelte</code></li>
      <li>Change primary color in <code>app.css</code></li>
      <li>Add a "Report Issue" button linking to your repo</li>
      <li>Embed in internal wiki or Notion</li>
    </ul>

    <h2>Local Development</h2>
    <pre><code>{`git clone your-fork
cd oauth-token-inspector
npm install
npm run dev`}</code></pre>

    <h2>FAQ</h2>
    <details>
      <summary>Can I use a custom domain?</summary>
      <p>Yes. Add CNAME in repo root and configure DNS.</p>
    </details>
    <details>
      <summary>Is it free?</summary>
      <p>100% free. GitHub Pages + open-source = $0.</p>
    </details>
    <details>
      <summary>Can I use it offline?</summary>
      <p>Yes. Download the <code>build/</code> folder and open <code>index.html</code>.</p>
    </details>

    <p class="italic-note">Your tool. Your domain. Your rules.</p>
  </article>
</div>

<style>
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 1.5rem; font-size: 0.9rem; color: var(--text-secondary); }
  .breadcrumbs a { color: var(--accent-secondary); }
  .breadcrumbs a:hover { text-decoration: underline; }
  .breadcrumbs p { margin: 0; }
  .prose { line-height: 1.8; }
  .prose .post-meta { color: var(--text-secondary); font-size: 0.9rem; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem; }
  .prose h1, .prose h2, .prose h3 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
  .prose p { color: var(--text-primary); }
  .prose ul, .prose ol { padding-left: 1.5rem; color: var(--text-primary); }
  .prose li::marker { color: var(--accent-primary); }
  .prose li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose pre { background: var(--secondary-bg); padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.85rem; }
  .prose code { font-family: 'Courier New', monospace; }
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; transition: transform 0.2s; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>