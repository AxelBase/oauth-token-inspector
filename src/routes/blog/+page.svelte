<!-- src/routes/blog/+page.svelte -->
<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'Introducing OAuth Token Inspector',
      description: 'A secure, client-side utility to decode and inspect JWTs without sending data to any server.'
    },
    {
      href: '/blog/posts/post2',
      title: 'Why You Should Never Paste Tokens Online',
      description: 'The risks of using public JWT decoders and how this tool keeps your secrets safe.'
    },
    {
      href: '/blog/posts/post3',
      title: 'Understanding JWT Structure: Header, Payload, Signature',
      description: 'Break down the three parts of a JWT and what each claim means in practice.'
    },
    {
      href: '/blog/posts/post4',
      title: 'How to Detect Expired or Tampered Tokens',
      description: 'Use the built-in expiration checker and signature display to validate token integrity.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Copying Decoded JSON for API Debugging',
      description: 'Learn how to extract header and payload JSON for Postman, curl, or code snippets.'
    },
    {
      href: '/blog/posts/post6',
      title: 'Dark Mode & Accessibility: Built for Developers',
      description: 'Responsive design, keyboard navigation, and screen reader support in a static tool.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Deploying Your Own Token Inspector with GitHub Pages',
      description: 'Step-by-step guide to fork, customize, and host your own version in under 5 minutes.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | OAuth Token Inspector</title>
  <meta name="description" content="Learn how to safely inspect OAuth JWTs, understand token claims, and deploy your own secure decoder. Client-side, open-source, and privacy-first." />
  <meta name="robots" content="index, follow" />
  <meta property="og:title" content="JWT Blog: OAuth Token Inspector" />
  <meta property="og:description" content="Deep dives, best practices, and tutorials for the OAuth Token Inspector — a 100% client-side JWT decoder." />
  <meta property="og:url" content="{base}/blog" />
  <meta property="og:type" content="website" />
  <link rel="canonical" href="{base}/blog" />
</svelte:head>

<div class="post-layout fade-in">
  <header class="blog-header">
    <h1>JWT Blog: OAuth Token Inspector</h1>
    <p class="subtitle">
      Deep dives, best practices, and tutorials for the <strong>OAuth Token Inspector</strong> — a <em>100% client-side</em> JWT decoder.<br />
      No data leaves your browser. Built with SvelteKit, Bootstrap, and deployed via GitHub Pages.<br />
      <a href="https://github.com/MrAAndersen123/oauth-token-inspector" target="_blank" rel="noopener noreferrer">View on GitHub</a>.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="post-card">
        <div class="card-body">
          <h2 class="post-title">{post.title}</h2>
          <p class="post-description">{post.description}</p>
          <span class="read-more">Read Article →</span>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  :global(.post-layout) {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 1rem 4rem;
  }

  .blog-header {
    text-align: center;
    margin-bottom: 3rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1.5rem;
  }

  .blog-header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.75rem;
    color: var(--accent-secondary);
  }

  .subtitle {
    font-size: 1rem;
    color: var(--text-secondary);
    line-height: 1.8;
    max-width: 680px;
    margin: 0 auto;
  }

  .subtitle a {
    color: var(--accent-primary);
    text-decoration: underline;
  }

  .subtitle a:hover {
    text-decoration: none;
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .post-card {
    background: var(--card-bg);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    overflow: hidden;
    transition: all 0.2s ease;
    text-decoration: none;
    display: block;
    height: 100%;
  }

  .post-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0,0,0,0.12);
    border-color: var(--accent-primary);
  }

  .card-body {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .post-title {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--accent-secondary);
    margin: 0 0 0.75rem 0;
    line-height: 1.4;
  }

  .post-description {
    color: var(--text-secondary);
    font-size: 0.95rem;
    line-height: 1.6;
    flex-grow: 1;
    margin: 0 0 1rem 0;
  }

  .read-more {
    color: var(--accent-primary);
    font-weight: 600;
    font-size: 0.9rem;
    align-self: flex-start;
    transition: transform 0.2s ease;
  }

  .post-card:hover .read-more {
    transform: translateX(6px);
  }

  /* Responsive */
  @media (max-width: 640px) {
    .posts-grid {
      grid-template-columns: 1fr;
    }
  }
</style>