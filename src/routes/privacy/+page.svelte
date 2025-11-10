<!-- src/routes/privacy/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | OAuth Token Inspector</title>
  <meta name="description" content="Learn how OAuth Token Inspector protects your JWTs with 100% client-side processing. No data collection, no tracking, no server transmission." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Privacy Policy | OAuth Token Inspector" />
  <meta property="og:description" content="Zero data collection. Your tokens never leave your browser. Fully open-source and auditable." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Privacy Policy" />
  <meta name="twitter:description" content="No data collected. No tracking. 100% client-side JWT inspection." />
  <meta name="author" content="Axelbase" />
  <link rel="canonical" href="{base}/privacy" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 10, 2025</p>

    <h2>1. Introduction</h2>
    <p>Welcome to the <strong>OAuth Token Inspector</strong>, a **100% client-side**, open-source web tool developed by <strong>Axelbase</strong>. This Privacy Policy explains how we handle your information when you use our JWT inspection utility. We are **committed to absolute privacy** — <em>your tokens never leave your browser</em>. No data is collected, stored, or transmitted. This policy ensures full transparency and trust in a security-sensitive environment.</p>

    <h2>2. Information We Do Not Collect</h2>
    <p>The OAuth Token Inspector operates **entirely in your browser**. We do **not** collect:</p>
    <ul>
      <li><strong>Personal Data</strong>: No names, emails, IP addresses, or device identifiers.</li>
      <li><strong>Token Content</strong>: Any JWT you paste is processed locally using vanilla JavaScript — **never sent to any server**.</li>
      <li><strong>Usage Analytics</strong>: No tracking, cookies, localStorage, or telemetry. No Google Analytics, Mixpanel, or similar tools.</li>
      <li><strong>Session Data</strong>: The app is **stateless** — page reloads reset everything.</li>
    </ul>
    <p>Because decoding happens via <code>atob()</code> and <code>JSON.parse()</code> in your browser, **we have zero access** to your input.</p>

    <h2>3. How the Tool Works</h2>
    <p>When you use the OAuth Token Inspector:</p>
    <ul>
      <li><strong>Local Processing</strong>: JWT is split, Base64URL-decoded, and parsed using <code>jwt.js</code> — all in memory.</li>
      <li><strong>No Network Calls</strong>: Only external request is Bootstrap 5.3.3 CDN (CSS/JS). No API endpoints, no logging.</li>
      <li><strong>Copy & Export</strong>: Uses <code>navigator.clipboard</code> — — stays on your device.</li>
      <li><strong>Static Build</strong>: Output from <code>npm run build</code> is pure HTML/JS/CSS — deployable offline.</li>
    </ul>
    <p>This design guarantees **complete data isolation** — ideal for inspecting production, sandbox, or internal tokens.</p>

    <h2>4. Third-Party Services</h2>
    <p>The only external dependency is **Bootstrap CDN** (<code>cdn.jsdelivr.net</code>) for styling and dark mode. This CDN does **not** track users or set cookies in this context. No ads, no analytics, no trackers. All core logic is bundled locally via Vite.</p>

    <h2>5. Cookies and Tracking</h2>
    <p><strong>No cookies are used.</strong> No localStorage persistence. No fingerprinting. Your session ends when you close the tab. The tool is **fully stateless** and **privacy-by-design**.</p>

    <h2>6. Data Security</h2>
    <p>While we don’t handle data, we recommend:</p>
    <ul>
      <li>Use HTTPS (GitHub Pages enforces it)</li>
      <li>Avoid pasting highly sensitive live tokens</li>
      <li>Clear browser cache if needed</li>
    </ul>
    <p>Security of your device and network is your responsibility.</p>

    <h2>7. Children's Privacy</h2>
    <p>This tool is not directed at children under 13. We do not knowingly collect data from minors.</p>

    <h2>8. International Compliance</h2>
    <p>Since **no data is collected**, we comply by default with <strong>GDPR</strong>, <strong>POPIA</strong>, <strong>CCPA</strong>, and global privacy laws.</p>

    <h2>9. Changes to This Policy</h2>
    <p>Updates will be posted here with a new effective date. Last updated: **November 10, 2025**.</p>

    <h2>10. Contact</h2>
    <p>Questions? Open an issue on <a href="https://github.com/axelbase/oauth-token-inspector" target="_blank" rel="noopener">GitHub</a> or reach out to <strong>Axelbase</strong> on X.</p>

    <p class="italic-note">Your privacy is non-negotiable. <strong>No data in = no data out.</strong> Use with confidence.</p>
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
  .prose h1, .prose h2 { color: var(--accent-secondary); }
  .prose h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
  .prose h2 { margin-top: 2.5rem; border-bottom: 1px solid var(--secondary-bg); padding-bottom: 0.5rem; }
  .prose p { color: var(--text-primary); }
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-primary); }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>