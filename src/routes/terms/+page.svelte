<!-- src/routes/terms/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms and Conditions | OAuth Token Inspector</title>
  <meta name="description" content="Review the terms of use for OAuth Token Inspector — a free, open-source, client-side JWT inspection tool with no warranties." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="Terms and Conditions | OAuth Token Inspector" />
  <meta property="og:description" content="Free to use, modify, and distribute under MIT license. No liability for misuse." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="OAuth Token Inspector" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Terms of Use" />
  <meta name="twitter:description" content="Open-source MIT license. Use at your own risk." />
  <meta name="author" content="Axelbase" />
  <link rel="canonical" href="{base}/terms" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms and Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms and Conditions</h1>
    <p class="post-meta">Last Updated: November 10, 2025</p>

    <h2>1. Acceptance of Terms</h2>
    <p>By accessing or using the <strong>OAuth Token Inspector</strong> ("the Tool"), you agree to these Terms and Conditions. The Tool is provided **as-is** by <strong>Axelbase</strong> in South Africa under the **MIT License**. If you do not agree, do not use the Tool.</p>

    <h2>2. Description of Service</h2>
    <p>The OAuth Token Inspector is a **client-side web application** that decodes and displays JSON Web Tokens (JWTs) locally in your browser. It does **not** verify signatures cryptographically, store data, or transmit information to any server. It is intended for **development, debugging, and educational purposes only**.</p>

    <h2>3. License to Use</h2>
    <p>You are granted a **non-exclusive, royalty-free, worldwide license** to:</p>
    <ul>
      <li>Use the Tool for personal or commercial purposes</li>
      <li>Fork, modify, and redistribute under the <strong>MIT License</strong></li>
      <li>Host your own version (e.g., GitHub Pages, internal servers)</li>
    </ul>
    <p>You must retain the original copyright notice in all copies.</p>

    <h2>4. Prohibited Uses</h2>
    <p>You may **not**:</p>
    <ul>
      <li>Use the Tool to inspect tokens containing sensitive PII without proper safeguards</li>
      <li>Claim the Tool verifies signatures (it only displays them)</li>
      <li>Remove or obscure attribution in modified versions</li>
      <li>Use in violation of applicable laws</li>
    </ul>

    <h2>5. No Warranty</h2>
    <p>The Tool is provided **"AS IS"** without warranties of any kind, including:</p>
    <ul>
      <li>Accuracy of decoded data</li>
      <li>Security of your environment</li>
      <li>Fitness for a particular purpose</li>
    </ul>
    <p><strong>Use at your own risk.</strong> We are not liable for any damages arising from use.</p>

    <h2>6. Limitation of Liability</h2>
    <p>In no event shall <strong>Axelbase</strong> be liable for:</p>
    <ul>
      <li>Data breaches due to token exposure</li>
      <li>Loss of access from expired tokens</li>
      <li>Indirect, incidental, or consequential damages</li>
    </ul>
    <p>Maximum liability is limited to **ZAR 0.00**.</p>

    <h2>7. Intellectual Property</h2>
    <p>The source code is © 2025 <strong>Axelbase</strong>, licensed under MIT. The name “OAuth Token Inspector” is not trademarked but should not be used to mislead.</p>

    <h2>8. Termination</h2>
    <p>We may terminate access at any time without notice if these terms are violated.</p>

    <h2>9. Governing Law</h2>
    <p>These terms are governed by the laws of **South Africa**. Disputes shall be resolved in **Cape Town** courts.</p>

    <h2>10. Changes to Terms</h2>
    <p>We may update these terms. Continued use constitutes acceptance. Check this page periodically.</p>

    <h2>11. Contact</h2>
    <p>Report issues via <a href="https://github.com/axelbase/oauth-token-inspector" target="_blank" rel="noopener">GitHub</a> or contact <strong>Axelbase</strong> on X.</p>

    <p class="italic-note"><strong>Free. Open. Secure.</strong> Use responsibly. Contribute freely.</p>
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