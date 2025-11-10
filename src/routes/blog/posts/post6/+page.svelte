<!-- src/routes/blog/posts/post6/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Dark Mode & Accessibility: Built for Developers | Blog</title>
  <meta name="description" content="Explore how OAuth Token Inspector supports dark mode, keyboard navigation, and screen readers — all in a static, client-side tool." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Dark Mode & Accessibility | Blog" />
  <meta property="og:description" content="A developer tool that respects your eyes and accessibility needs." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Dark Mode + Accessibility" />
  <meta name="twitter:description" content="Usable by everyone, everywhere." />
  <meta name="author" content="Axelbase" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Dark Mode & Accessibility</p>
  </div>

  <article class="prose">
    <h1>Dark Mode & Accessibility: Built for Developers</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>Developer tools should be fast, secure, and <em>usable</em>. The <strong>OAuth Token Inspector</strong> was designed with modern workflows in mind: late-night debugging sessions, keyboard-only navigation, and screen reader compatibility — all in a lightweight, static package.</p>

    <h2>Seamless Dark Mode</h2>
    <p>Click the sun/moon toggle in the header to switch between light and dark themes. Powered by Bootstrap’s <code>data-bs-theme</code> attribute:</p>

    <ul>
      <li><strong>Instant switching</strong> — no page reload</li>
      <li><strong>Respects system preference</strong> via <code>prefers-color-scheme</code></li>
      <li><strong>Full Bootstrap integration</strong> — cards, buttons, alerts adapt automatically</li>
    </ul>

    <p>Reduce eye strain during long OAuth integration sessions.</p>

    <h3>Under the Hood</h3>
    <p>The toggle sets <code>document.documentElement.setAttribute('data-bs-theme', 'dark')</code>. All colors use CSS variables, ensuring consistency across components.</p>

    <h2>Accessibility First (WCAG 2.1 AA)</h2>
    <p>Every interactive element is:</p>
    <ul>
      <li><strong>Keyboard navigable</strong> — Tab to textarea, Parse, Clear, Copy, Theme</li>
      <li><strong>Focus visible</strong> — Bootstrap’s <code>:focus</code> styles</li>
      <li><strong>Screen reader friendly</strong> — ARIA labels, proper heading hierarchy</li>
      <li><strong>High contrast</strong> — passes Lighthouse audits in both themes</li>
    </ul>

    <h3>Tested With</h3>
    <ul>
      <li>NVDA (Windows)</li>
      <li>VoiceOver (macOS)</li>
      <li>ChromeVox</li>
      <li>Android TalkBack</li>
    </ul>

    <h2>Responsive Design</h2>
    <p>Works on:</p>
    <ul>
      <li>Desktop (≥1920px)</li>
      <li>Tablet</li>
      <li>Mobile (≥320px)</li>
    </ul>

    <p>Paste tokens on your phone, toggle theme, copy JSON — all with touch-friendly controls.</p>

    <h2>Why This Matters</h2>
    <p>Inclusive tools improve productivity for <em>all</em> developers. A tool that works at 2 AM with dark mode and voice control is a tool that gets used.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Does dark mode persist?</summary>
      <p>No — stateless design. Refreshes to system preference. Matches SRS NFR-03.</p>
    </details>
    <details>
      <summary>Can I force light mode?</summary>
      <p>Yes. Click the toggle or disable <code>prefers-color-scheme</code> in dev tools.</p>
    </details>
    <details>
      <summary>Is it printable?</summary>
      <p>Yes. Print styles remove backgrounds, keep text readable.</p>
    </details>

    <p class="italic-note">Code in comfort. Build inclusively.</p>
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
  .prose ul { padding-left: 1.5rem; color: var(--text-primary); }
  .prose li::marker { color: var(--accent-primary); }
  .prose li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; transition: transform 0.2s; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>