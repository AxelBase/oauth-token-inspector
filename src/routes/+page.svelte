<!-- src/routes/+page.svelte -->
<script>
  import TokenInput from '$lib/components/TokenInput.svelte';
  import HeaderSection from '$lib/components/HeaderSection.svelte';
  import PayloadSection from '$lib/components/PayloadSection.svelte';
  import SignatureSection from '$lib/components/SignatureSection.svelte';
  import ThemeToggle from '$lib/components/ThemeToggle.svelte';

  let token = '';
  let header = {};
  let payload = {};
  let signature = '';
  let error = '';

  function handleParse(result) {
    ({ header, payload, signature } = result);
  }

  function handleClear() {
    header = {};
    payload = {};
    signature = '';
  }
</script>

<div class="inspector-container">
  <br/>
  <div class="d-flex justify-content-between align-items-center mb-4" style="margin-left: 20px;">
    <h1>OAuth Token Inspector</h1>
  </div>

  <br/>

  <div class="alert alert-info" role="alert">
    <strong>Warning:</strong> Do not paste production tokens with sensitive data.
  </div>

  <br/>

  <TokenInput bind:token {error} onParse={handleParse} onClear={handleClear} />

  {#if header || payload || signature}
    <div class="accordion">
      <HeaderSection {header} />
      <PayloadSection {payload} />
      <SignatureSection {signature} />
    </div>
  {/if}
</div>

<div class="text-content-container">
  <!-- ==================== ABOUT ==================== -->
  <section id="about" class="content-section">
    <h2 class="mb-3">About</h2>
    <p>
      <strong>The OAuth Token Inspector</strong> was born from a real-world developer pain point: <em>understanding JWTs without exposing secrets</em>. Whether you're debugging an authentication flow, validating claims in a CI/CD pipeline, or onboarding new team members to OAuth 2.0, manually decoding and interpreting JSON Web Tokens is slow, error-prone, and risky—especially when sensitive data is involved. This tool eliminates that friction with a <strong>100% client-side, privacy-first approach</strong>.
    </p>
    <p>
      Built by <strong>Axelbase</strong>, the inspector runs entirely in your browser using lightweight JavaScript—no server, no API calls, no logging. Every token you paste is processed locally via <code>atob()</code> and <code>JSON.parse()</code>, then rendered in a clean, collapsible Bootstrap interface. <em>Your data never leaves your device</em>. This design ensures compliance with <strong>GDPR</strong>, <strong>POPIA</strong>, and enterprise security policies while maintaining maximum usability.
    </p>
    <p>
      <strong>Designed for security engineers, backend developers, DevOps teams, and technical writers</strong>, the tool supports all standard JWT formats (JWS, JWE preview coming soon). It displays the <code>header</code>, <code>payload</code>, and raw <code>signature</code> in separate, expandable sections. Each includes <strong>Copy JSON</strong> buttons that export perfectly formatted, indented JSON—ideal for Postman, curl, logging, or documentation. The interface supports dark mode, responsive layouts, and keyboard navigation, making it accessible across devices.
    </p>
    <p>
      Open-source under the <strong>MIT License</strong>, the project is fully forkable and deployable via GitHub Pages, Netlify, or Vercel. You can customize colors, add corporate branding, or embed it in internal wikis. <em>No build tools required for basic use—just open and go</em>. For advanced users, the modular SvelteKit architecture allows extension: add signature verification, JWE decryption, or integration with identity providers. Every component is documented, tested, and auditable.
    </p>
    <p>
      <strong>More than a decoder—it’s a trust layer</strong>. In an era of supply chain attacks and data breaches, this tool gives you confidence that token inspection is safe, transparent, and under your control. It’s not just about reading claims—it’s about <em>doing it responsibly</em>.
    </p>
  </section>

  <!-- ==================== HOW TO USE ==================== -->
  <section id="how-to-use" class="content-section">
    <h2 class="mb-3">How to Use</h2>
    <p>
      <strong>OAuth Token Inspector</strong> is designed for instant, secure JWT analysis. Follow these steps to decode, inspect, and export token data in seconds—ideal for developers, security analysts, and support teams troubleshooting authentication issues.
    </p>

    <p>
      <strong>Step 1: Paste Your JWT</strong><br />
      Copy any JSON Web Token (access token, ID token, refresh token) and paste it into the large input field. The tool accepts compact (dot-separated) or JSON-formatted tokens. As soon as you paste, the inspector <em>automatically detects and parses</em> the token—no button required. Invalid formats trigger a clear error message with guidance.
    </p>

<p>
  <strong>Step 2: Explore Decoded Sections</strong><br />
  Once parsed, three collapsible <strong>accordion panels</strong> appear:
</p>
<ul>
  <li><strong>Header</strong>: Shows <code>alg</code>, <code>typ</code>, <code>kid</code>, and custom fields. Use <strong>Copy JSON</strong> to export.</li>
  <li><strong>Payload</strong>: Displays claims like <code>sub</code>, <code>iss</code>, <code>exp</code>, <code>scope</code>, and <code>aud</code>. Timestamps are humanized (e.g., “Expires in 23m”).</li>
  <li><strong>Signature</strong>: Raw Base64URL string. <em>Note: cryptographic verification is not performed</em>—this is a decoder, not a validator.</li>
</ul>
<p>
  Click panel headers to expand/collapse. All data is syntax-highlighted and responsive.
</p>
    <p>
      <strong>Step 3: Copy Data for Debugging</strong><br />
      Each section includes a <strong>Copy JSON</strong> button. Click to copy the decoded object as pretty-printed JSON. Use this in:
      </p>
      <ul>
        <li>Postman environment variables.</li>
        <li>curl commands.</li>
        <li>Frontend logs.</li>
        <li>Documentation or runbooks.</li>
      </ul>
      <p>
      The clipboard API ensures zero friction.
    </p>

    <p>
      <strong>Step 4: Clear and Start Over</strong><br />
      Click the <strong>Clear</strong> button to reset the input and results. This wipes all local memory—perfect for switching between sandbox and staging tokens.
    </p>

    <p>
      <strong>Pro Tips</strong>:
            </p>
      <ul>
        <li>Use <strong>dark mode</strong> (top-right toggle) for late-night debugging</li>
        <li>Deploy your own version via GitHub Pages for internal use</li>
        <li>Never paste production tokens with PII—use sandbox environments</li>
      </ul>
      <p>
      The entire workflow is <em>stateless, offline-capable, and zero-install</em>.
    </p>
  </section>

  <!-- ==================== FAQ ==================== -->
  <section id="faq" class="content-section">
    <h2 class="mb-3">FAQ</h2>

    <p>
      <strong>1. Is my token data sent to a server?</strong><br />
      <strong>No.</strong> All parsing happens in your browser using <code>atob()</code> and <code>JSON.parse()</code>. No network requests are made except to load Bootstrap from CDN. Your token <em>never leaves your device</em>.
    </p>

    <p>
      <strong>2. Does it verify the JWT signature?</strong><br />
      No. This is a <em>decoder</em>, not a verifier. It displays the signature but does not check cryptographic validity. Use libraries like <code>jose</code> or backend services for verification.
    </p>

    <p>
      <strong>3. Can I use it with JWE (encrypted) tokens?</strong><br />
      Not yet. JWE support is planned for v2. Currently, only JWS (signed) tokens are supported. Encrypted payloads will show as opaque strings.
    </p>

    <p>
      <strong>4. Why can’t I paste a JSON object directly?</strong><br />
      The tool expects the <em>compact JWT format</em> (three Base64URL parts separated by dots). JSON objects are not valid JWTs. Encode your claims properly using your auth provider.
    </p>

    <p>
      <strong>5. How do I deploy my own version?</strong><br />
      Fork the <a href="https://github.com/MrAAndersen123/oauth-token-inspector" target="_blank" rel="noopener">GitHub repo</a>, enable GitHub Pages, or deploy via Netlify/Vercel. The <code>build/</code> folder is fully static. See the <em>Deploying Your Own</em> blog post for details.
    </p>

    <p>
      <strong>6. Is it safe for sensitive environments?</strong><br />
      Yes. No cookies, no localStorage, no analytics. The app is stateless and can run from a USB drive. Ideal for air-gapped or high-security environments.
    </p>

    <p>
      <strong>7. Can I contribute or request features?</strong><br />
      Absolutely. Open an issue or PR on GitHub. Popular requests: JWE support, signature verification, export to CSV, theme customization.
    </p>

    <p>
      <strong>8. Why is the signature shown as raw text?</strong><br />
      To help you copy it for backend verification. Most JWT libraries require the full compact string (header.payload.signature) to validate.
    </p>

    <p>
      <strong>9. Does it work offline?</strong><br />
      Yes. Download the <code>build/</code> folder and open <code>index.html</code> in any browser. No internet required after initial load.
    </p>

    <p>
      <strong>10. Who built this and why?</strong><br />
      Created by <strong>Axelbase</strong>, to solve daily OAuth debugging pain. Released open-source to help the community inspect tokens <em>safely and transparently</em>.
    </p>
  </section>
</div>

<style>
  .inspector-container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }
  .text-content-container {
    max-width: 800px;
    margin: 3rem auto;
    padding: 0 1rem;
  }
  .content-section {
    margin-bottom: 3rem;
  }
  .content-section h2 {
    color: var(--accent-secondary);
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 0.5rem;
  }
  .content-section p {
    line-height: 1.8;
    margin-bottom: 1.2rem;
  }
  .content-section ul {
    padding-left: 1.5rem;
    margin-bottom: 1.2rem;
  }
  .content-section li {
    margin-bottom: 0.5rem;
  }
  .content-section code {
    background: var(--secondary-bg);
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
  }
  .alert {
    max-width: 900px;
    margin: 0 auto;
  }
</style>