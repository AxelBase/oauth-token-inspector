<!-- src/routes/blog/posts/post5/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Copying Decoded JSON for API Debugging | Blog</title>
  <meta name="description" content="Learn how to use the Copy JSON buttons in OAuth Token Inspector to extract header and payload data for Postman, curl, and code snippets." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Copying Decoded JSON for API Debugging | Blog" />
  <meta property="og:description" content="One-click export of JWT claims for faster API testing and development." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Copy JWT JSON Easily" />
  <meta name="twitter:description" content="Export header and payload with one click." />
  <meta name="author" content="Axelbase" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Copying Decoded JSON for API Debugging</p>
  </div>

  <article class="prose">
    <h1>Copying Decoded JSON for API Debugging</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>During OAuth integration, you often need to inspect token claims in tools like Postman, curl, or your application code. Manually copying fields from a JWT is error-prone and time-consuming. The <strong>OAuth Token Inspector</strong> includes <strong>Copy JSON</strong> buttons that export the decoded header and payload in perfect, indented JSON — ready to paste anywhere.</p>

    <h2>Why This Feature Matters</h2>
    <p>Developers frequently:</p>
    <ul>
      <li>Paste <code>sub</code> or <code>email</code> into database queries</li>
      <li>Mock API requests with token claims</li>
      <li>Debug scope mismatches (<code>scope</code> vs <code>aud</code>)</li>
      <li>Share redacted token data with team members</li>
    </ul>

    <p>With one click, you get clean, syntax-highlighted JSON — no manual parsing required.</p>

    <h3>How It Works</h3>
    <p>Each section (Header, Payload) has a dedicated <strong>Copy</strong> button:</p>
    <ul>
      <li><strong>Copy Header JSON:</strong> Exports <code>alg</code>, <code>typ</code>, <code>kid</code>, etc.</li>
      <li><strong>Copy Payload JSON:</strong> Exports all claims including <code>iss</code>, <code>sub</code>, <code>exp</code>, custom fields.</li>
    </ul>

    <p>The output uses <code>JSON.stringify(obj, null, 2)</code> — perfect for logs, config files, or documentation.</p>

    <h2>Use Cases in Development</h2>

    <h3>1. Postman Environment Variables</h3>
    <pre><code>{`// Paste payload to extract sub
{
  "sub": "user_123",
  "email": "dev@example.com"
}`}</code></pre>
    <p>Set <code>user_id </code> in Postman.</p>

    <h3>2. curl with Bearer Token</h3>
    <pre><code>{`curl -H "Authorization: Bearer {{token}}" \\
  -H "X-User-ID: {{sub}}" \\
  https://api.example.com/data`}</code></pre>

    <h3>3. Frontend Debugging</h3>
    <p>Log claims in React/Vue/Svelte:</p>
    <pre><code>{`console.log('User:', {{payload}})`}</code></pre>

    <h2>Security Tips When Sharing</h2>
    <ul>
      <li>Redact sensitive fields (<code>email</code>, <code>name</code>) before sharing</li>
      <li>Never copy full production tokens</li>
      <li>Use sandbox environments</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Does it copy the signature?</summary>
      <p>No. Only header and payload JSON — signature is raw text.</p>
    </details>
    <details>
      <summary>Can I copy both at once?</summary>
      <p>Not yet. Use browser dev tools to select both pre blocks if needed.</p>
    </details>
    <details>
      <summary>Is the copied JSON safe?</summary>
      <p>Yes. It’s client-side generated and never transmitted.</p>
    </details>

    <p class="italic-note">Debug faster. Copy smarter. Ship securely.</p>
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
  .prose pre { background: var(--secondary-bg); padding: 1rem; border-radius: 6px; overflow-x: auto; font-size: 0.9rem; }
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