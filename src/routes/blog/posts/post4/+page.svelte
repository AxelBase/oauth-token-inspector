<!-- src/routes/blog/posts/post4/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>How to Detect Expired or Tampered Tokens | Blog</title>
  <meta name="description" content="Learn how to use OAuth Token Inspector to detect expired tokens, validate claims, and spot tampering using visual cues and signature inspection." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="How to Detect Expired or Tampered Tokens | Blog" />
  <meta property="og:description" content="Use color-coded status, tooltips, and raw signature display to ensure token integrity." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Detect Expired & Tampered Tokens" />
  <meta name="twitter:description" content="Visual validation tools for JWT security." />
  <meta name="author" content="Axelbase" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>How to Detect Expired or Tampered Tokens</p>
  </div>

  <article class="prose">
    <h1>How to Detect Expired or Tampered Tokens</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>Token validation is a critical step in OAuth and OpenID Connect flows. A single expired or tampered token can lead to authentication failures, security breaches, or unauthorized access. The <strong>OAuth Token Inspector</strong> provides visual, real-time feedback to help developers catch issues early — all within the browser, with no backend required.</p>

    <h2>Understanding Token Expiration</h2>
    <p>The <code>exp</code> (expiration) claim defines the moment a token becomes invalid. It is a Unix timestamp in seconds. The OAuth Token Inspector compares this value against the current system time and displays a color-coded badge:</p>

    <ul>
      <li><strong>Valid (Green):</strong> <code>exp > now</code> — token is active.</li>
      <li><strong>Expired (Red):</strong> <code>exp ≤ now</code> — token is no longer valid.</li>
      <li><strong>No exp claim (Yellow):</strong> Token lacks <code>exp</code> — risky; may be accepted indefinitely.</li>
    </ul>

    <p>This instant feedback helps you identify why an API call fails with <code>401 Unauthorized</code> or <code>invalid_token</code>.</p>

    <h3>Clock Skew Considerations</h3>
    <p>Servers may allow a small grace period (e.g., 5 minutes) for clock drift. Always test with realistic time offsets. The Inspector uses <code>Date.now()</code> for accuracy, but you should validate server-side with tolerance.</p>

    <h2>Spotting Tampered Tokens</h2>
    <p>While the tool does not cryptographically verify signatures, it helps detect tampering through visual inspection:</p>

    <ul>
      <li><strong>Signature Display:</strong> The raw Base64URL-encoded signature is shown in full. Compare it with a known-good token.</li>
      <li><strong>Header/Payload Mismatch:</strong> If <code>alg</code> says <code>RS256</code> but you expect <code>HS256</code>, investigate.</li>
      <li><strong>Unexpected Claims:</strong> Look for injected fields like <code>admin: true</code> not issued by your IdP.</li>
    </ul>

    <h3>Common Tampering Techniques</h3>
    <p>Attackers may:</p>
    <ul>
      <li>Change <code>sub</code> to impersonate users</li>
      <li>Set <code>exp</code> to a future date</li>
      <li>Use <code>alg: none</code> to bypass signature checks</li>
    </ul>

    <p>Use the Inspector during penetration testing to simulate these attacks safely.</p>

    <h2>Best Practices for Token Validation</h2>
    <ol>
      <li>Always validate <code>exp</code>, <code>nbf</code>, and <code>iat</code></li>
      <li>Enforce <code>aud</code> (audience) matching</li>
      <li>Verify <code>iss</code> against trusted issuers</li>
      <li>Check <code>alg</code> is expected and not <code>none</code></li>
      <li>Use short-lived access tokens + refresh rotation</li>
    </ol>

    <h2>FAQ</h2>
    <details>
      <summary>Why is my token showing as expired?</summary>
      <p>Check system clock. If <code>exp</code> is in the past, request a new token via refresh grant.</p>
    </details>
    <details>
      <summary>Can I trust the signature display?</summary>
      <p>Yes for comparison, but cryptographic verification requires the secret/public key.</p>
    </details>
    <details>
      <summary>Should I reject tokens without <code>exp</code>?</summary>
      <p>Yes. Infinite-lifetime tokens are a security anti-pattern.</p>
    </details>

    <p class="italic-note">Catch issues before they reach production. Validate early, validate often.</p>
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
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; transition: transform 0.2s; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>