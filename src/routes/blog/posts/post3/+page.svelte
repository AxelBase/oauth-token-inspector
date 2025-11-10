<!-- src/routes/blog/posts/post3/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Understanding JWT Structure: Header, Payload, Signature | Blog</title>
  <meta name="description" content="Deep dive into the three parts of a JSON Web Token: Header, Payload, and Signature. Learn what each claim means and how to interpret them." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Understanding JWT Structure | Blog" />
  <meta property="og:description" content="Learn the anatomy of a JWT: Header (metadata), Payload (claims), and Signature (integrity)." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="JWT Structure Explained" />
  <meta name="twitter:description" content="Header, Payload, Signature — understand every part of your OAuth token." />
  <meta name="author" content="Axelbase" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Understanding JWT Structure</p>
  </div>

  <article class="prose">
    <h1>Understanding JWT Structure: Header, Payload, Signature</h1>
    <p class="post-meta">Published: November 10, 2025</p>

    <p>A JSON Web Token (JWT) is a compact, URL-safe means of representing claims between parties. Defined in <a href="https://datatracker.ietf.org/doc/html/rfc7519" target="_blank" rel="noopener">RFC 7519</a>, it consists of three Base64URL-encoded parts separated by dots: <code>header.payload.signature</code>. The <strong>OAuth Token Inspector</strong> visually separates and explains each segment to help developers debug authentication flows.</p>

    <h2>1. The Header</h2>
    <p>The header contains metadata about the token type and cryptographic algorithm. Typical fields:</p>
    <ul>
      <li><code>alg</code>: Signing algorithm (<code>RS256</code>, <code>HS256</code>, <code>none</code>)</li>
      <li><code>typ</code>: Media type (<code>"JWT"</code>)</li>
      <li><code>kid</code>: Key ID (for key rotation)</li>
    </ul>
    <p><strong>Example:</strong> "alg": "RS256", "typ": "JWT", "kid": "abc123"</p>

    <h3>Security Note</h3>
    <p>An <code>alg</code> value of <code>none</code> allows signature bypass attacks. Always validate the algorithm server-side.</p>

    <h2>2. The Payload (Claims)</h2>
    <p>The payload contains statements about the user and token metadata. Claims are divided into:</p>

    <h3>Registered Claims (Standard)</h3>
    <ul>
      <li><code>iss</code> (Issuer): Who issued the token</li>
      <li><code>sub</code> (Subject): Who the token identifies</li>
      <li><code>aud</code> (Audience): Intended recipients</li>
      <li><code>exp</code> (Expiration): Unix timestamp</li>
      <li><code>nbf</code> (Not Before): Activation time</li>
      <li><code>iat</code> (Issued At): Creation time</li>
      <li><code>jti</code> (JWT ID): Unique identifier</li>
    </ul>

    <h3>Public & Private Claims</h3>
    <p>Custom claims like <code>role</code>, <code>permissions</code>, or <code>email</code> are common but should avoid sensitive data (JWTs are not encrypted by default).</p>

    <h2>3. The Signature</h2>
    <p>The signature ensures integrity. It is computed as:</p>
    <pre><code>HMACSHA256(base64UrlEncode(header) + "." + base64UrlEncode(payload), secret)</code></pre>
    <p>Or using RSA/ECDSA with a private key. The OAuth Token Inspector displays this raw value for manual verification or comparison.</p>

    <h3>Common Pitfalls</h3>
    <ul>
      <li>Trusting <code>exp</code> without clock sync</li>
      <li>Accepting tokens without <code>aud</code> validation</li>
      <li>Using symmetric keys in client-side code</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Are JWTs encrypted?</summary>
      <p>No. JWS (signed) tokens are encoded, not encrypted. Use JWE for confidentiality.</p>
    </details>
    <details>
      <summary>Can I trust the payload?</summary>
      <p>Never. Always verify the signature and re-fetch user data from your database.</p>
    </details>
    <details>
      <summary>How does the Inspector help?</summary>
      <p>It highlights standard claims with tooltips and validates <code>exp</code> against current time.</p>
    </details>

    <p class="italic-note">Master JWT structure — build more secure applications.</p>
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
  .prose li { padding-left: 0.5rem; margin-bottom: 0.5rem; }
  .prose pre { background: var(--secondary-bg); padding: 1rem; border-radius: 6px; overflow-x: auto; }
  .prose code { font-family: 'Courier New', monospace; background: transparent; }
  .prose details { background: var(--secondary-bg); border: 1px solid var(--border-color); border-radius: 6px; padding: 1rem; margin-bottom: 1rem; }
  .prose details[open] { background-color: var(--card-bg); }
  .prose summary { cursor: pointer; font-weight: 600; color: var(--accent-secondary); list-style: none; }
  .prose summary::-webkit-details-marker { display: none; }
  .prose summary::before { content: '+'; margin-right: 0.75rem; color: var(--accent-primary); font-weight: bold; transition: transform 0.2s; }
  .prose details[open] summary::before { transform: rotate(45deg); }
  .prose details p { margin-top: 1rem; padding-left: 1.5rem; border-left: 2px solid var(--accent-primary); color: var(--text-secondary); }
  .prose .italic-note { font-style: italic; color: var(--text-secondary); text-align: center; margin-top: 3rem; }
</style>