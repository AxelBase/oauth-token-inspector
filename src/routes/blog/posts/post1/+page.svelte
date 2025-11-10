<!-- src/routes/blog/posts/post1/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Introducing OAuth Token Inspector | Blog</title>
  <meta name="description" content="Discover the OAuth Token Inspector — a secure, client-side JWT decoder that runs entirely in your browser. No data leaves your device." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Introducing OAuth Token Inspector | Blog" />
  <meta property="og:description" content="Discover the OAuth Token Inspector — a secure, client-side JWT decoder that runs entirely in your browser. No data leaves your device." />
  <meta property="og:url" content="{base}/blog/posts/post1" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Introducing OAuth Token Inspector" />
  <meta name="twitter:description" content="A privacy-first JWT inspection tool built with SvelteKit and deployed via GitHub Pages." />
  <meta name="author" content="Axelbase" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Introducing OAuth Token Inspector</p>
  </div>

  <article class="prose">
    <h1>Introducing OAuth Token Inspector</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>In an era where data privacy is paramount, developers need tools they can trust. The <strong>OAuth Token Inspector</strong> is a fully client-side, open-source web utility designed to decode and inspect JSON Web Tokens (JWTs) without ever transmitting sensitive data to external servers. Built with SvelteKit, styled using Bootstrap 5.3.3, and deployed via GitHub Pages, this tool ensures your OAuth access and refresh tokens remain secure during debugging and integration testing.</p>

    <h2>Why a Client-Side JWT Inspector?</h2>
    <p>Traditional online JWT decoders require you to paste tokens into third-party websites — a risky practice that exposes authentication secrets. Even "trusted" services may log inputs, retain data, or be compromised. The OAuth Token Inspector eliminates this risk by performing all decoding and validation directly in your browser. No network requests are made beyond loading the static page and Bootstrap CDN assets.</p>

    <p>Whether you're integrating with Google, Auth0, Azure AD, or a custom OAuth provider, this tool helps you understand token structure, validate claims, and debug expiration issues — all while maintaining full control over your data.</p>

    <h3>Core Features at a Glance</h3>
    <ul>
      <li><strong>Instant Decoding:</strong> Paste any JWT and see Header, Payload, and Signature instantly.</li>
      <li><strong>Expiration Validation:</strong> Color-coded status for <code>exp</code> claim — Valid (green), Expired (red), or No exp claim (yellow).</li>
      <li><strong>Standard Claim Tooltips:</strong> Hover over <code>iss</code>, <code>sub</code>, <code>aud</code>, etc., for RFC 7519 definitions.</li>
      <li><strong>Copy JSON:</strong> One-click export of decoded header and payload for API testing.</li>
      <li><strong>Dark Mode:</strong> Toggle between light and dark themes using Bootstrap’s <code>data-bs-theme</code>.</li>
    </ul>

    <h3>How It Works Under the Hood</h3>
    <p>The tool uses vanilla JavaScript to implement Base64URL decoding and JSON parsing. The <code>jwt.js</code> utility splits the token into three parts, decodes the first two, and displays the raw signature. No external libraries are used for token processing — keeping the bundle lightweight and auditable.</p>

    <p>All functionality aligns with the Software Requirements Specification (SRS), including 10 functional requirements (FR-01 to FR-10) and 7 non-functional requirements (NFR-01 to NFR-07). The application is stateless, responsive, and accessible (WCAG 2.1 AA compliant).</p>

    <h2>FAQ</h2>
    <details>
      <summary>Is it safe to paste production tokens?</summary>
      <p>Yes — nothing leaves your browser. However, avoid pasting tokens with PII. Use test or sandbox tokens when possible.</p>
    </details>
    <details>
      <summary>Does it verify signatures?</summary>
      <p>No. It displays the raw signature for manual verification. Use backend libraries like <code>jsonwebtoken</code> for cryptographic validation.</p>
    </details>
    <details>
      <summary>Can I host my own version?</summary>
      <p>Absolutely. Fork the <a href="https://github.com/Axelbase/oauth-token-inspector" target="_blank" rel="noopener">GitHub repo</a> and deploy in minutes using GitHub Pages.</p>
    </details>

    <p class="italic-note">Join thousands of developers using privacy-first tools. Star us on GitHub and share your feedback!</p>
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
  .prose ul { list-style-type: '→ '; padding-left: 1.5rem; color: var(--text-primary); }
  .prose ul li::marker { color: var(--accent-primary); }
  .prose ul li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; transition: background-color 0.2s ease; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; display: inline-block; transition: transform 0.2s ease; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>