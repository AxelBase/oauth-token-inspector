<script lang="ts">
    import '../app.css';
    import { base } from '$app/paths';
    import { fly } from 'svelte/transition';

    // --- "Buy me a coffee" Logic (from File 1 - BuyMeACoffee + Bitcoin) ---
    let isDropdownOpen = false;

    function toggleDropdown() {
        isDropdownOpen = !isDropdownOpen;
    }
    function closeDropdown() {
        isDropdownOpen = false;
    }

    // Click outside directive
    function clickOutside(node: HTMLElement) {
        const handleClick = (event: MouseEvent) => {
            if (node && !node.contains(event.target as Node)) {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        };
        document.addEventListener('click', handleClick, true);
        return {
            destroy() {
                document.removeEventListener('click', handleClick, true);
            }
        };
    }

    // --- Footer Logic ---
    const currentYear = new Date().getFullYear();
</script>

<header class="navbar-sticky">
    <nav class="navbar-container">
        <div class="navbar-left">
            <a href="{base}/" class="navbar-logo-link" aria-label="AxelBase Home">
                <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-logo" />
            </a>
            <a href="{base}/" class="navbar-brand">AxelBase</a>

            <div class="bmac-container" use:clickOutside on:click_outside={closeDropdown}>
                <button class="bmac-button" on:click={toggleDropdown}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
                    </svg>
                    <span>Buy me a coffee</span>
                </button>

                {#if isDropdownOpen}
                    <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$3</span> One Coffee
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$5</span> Two Coffees
                        </a>
                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown}>
                            <span class="amount">$10</span> Three Coffees
                        </a>

                        <a href="https://buymeacoffee.com/axelbase" target="_blank" rel="noopener" on:click={closeDropdown} class="custom-amount">
                            Custom Amount
                        </a>

                        <a
                            href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
                            on:click={closeDropdown}
                            class="custom-amount"
                        >
                            Buy via Crypto (Bitcoin)
                        </a>
                    </div>
                {/if}
            </div>
        </div>

        <ul class="navbar-links">
            <li><a href="{base}/" class="nav-link">Home</a></li>
            <li><a href="{base}/#about" class="nav-link">About</a></li>
            <li><a href="{base}/#how-to-use" class="nav-link">How to use</a></li>
            <li><a href="{base}/#faq" class="nav-link">FAQ</a></li>
            <li><a href="{base}/blog" class="nav-link">Blog</a></li>
        </ul>
    </nav>
</header>

<main class="content-wrapper">
    <slot />
</main>

<footer class="footer-sticky">
    <div class="footer-container">
        <span class="footer-copyright">
            &copy; AxelBase Markdown to HTML Converter – {currentYear}
        </span>
        <div class="footer-links">
            <a href="{base}/privacy">Privacy Policy</a>
            <a href="{base}/terms">Terms and conditions</a>
        </div>
    </div>
</footer>

<style>
    /* Override/adapt Buy Me a Coffee styles from File 1 to fit File 2's ruby-red theme */
    .bmac-button {
        background-color: var(--color-ruby-red);
        color: var(--color-text-inverted);
        border: none;
        border-radius: 50px;
        padding: 0.5rem 1rem;
        font-weight: 600;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        transition: background-color var(--transition-speed) var(--transition-timing),
            transform 0.2s ease;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        font-size: 0.95rem;
    }

    .bmac-button:hover {
        background-color: var(--color-ruby-dark);
        transform: translateY(-2px);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
    }

    .bmac-button svg {
        width: 20px;
        height: 20px;
    }

    .bmac-dropdown {
        position: absolute;
        top: calc(100% + 10px);
        left: 50%;
        transform: translateX(-50%);
        width: 240px;
        background-color: var(--color-white);
        border-radius: 16px;
        box-shadow: 0 12px 32px rgba(183, 28, 28, 0.15);
        overflow: hidden;
        border: 1px solid rgba(183, 28, 28, 0.1);
        z-index: 1001;
    }

    .bmac-dropdown a {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 12px 20px;
        color: var(--color-text-primary);
        text-decoration: none;
        font-size: 0.98rem;
        transition: all 0.2s ease;
    }

    .bmac-dropdown a:hover {
        background-color: rgba(183, 28, 28, 0.08);
        color: var(--color-ruby-red);
        padding-left: 28px;
    }

    .bmac-dropdown .amount {
        font-weight: 700;
        color: var(--color-ruby-red);
        font-size: 1.1rem;
    }

    .bmac-dropdown .custom-amount {
        font-weight: 600;
        color: var(--color-ruby-red);
        border-top: 1px solid var(--color-border);
        justify-content: center !important;
    }
</style>