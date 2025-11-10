// src/lib/utils/jwt.js

// Utility functions for JWT decoding and validation (vanilla JS, client-side only)

/**
 * Base64 URL decode function
 * @param {string} str - Base64 URL encoded string
 * @returns {string} Decoded string
 */
function base64UrlDecode(str) {
    str = str.replace(/-/g, '+').replace(/_/g, '/');
    const padding = str.length % 4;
    if (padding) {
        str += '='.repeat(4 - padding);
    }
    return decodeURIComponent(atob(str).split('').map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));
}

/**
 * Decode JWT token
 * @param {string} token - JWT string
 * @returns {object} { header, payload, signature, error }
 */
export function decodeToken(token) {
    if (!token) {
        return { error: 'No token provided' };
    }

    const parts = token.split('.');
    if (parts.length !== 3) {
        return { error: 'Invalid JWT structure' };
    }

    try {
        const header = JSON.parse(base64UrlDecode(parts[0]));
        const payload = JSON.parse(base64UrlDecode(parts[1]));
        const signature = parts[2];

        return { header, payload, signature };
    } catch (e) {
        return { error: 'Malformed token or invalid encoding' };
    }
}

/**
 * Check if token is expired based on 'exp' claim
 * @param {object} payload - Decoded payload
 * @returns {string} 'Valid' | 'Expired' | 'No exp claim'
 */
export function getExpirationStatus(payload) {
    if (!payload || !payload.exp) {
        return 'No exp claim';
    }
    const now = Math.floor(Date.now() / 1000);
    return payload.exp > now ? 'Valid' : 'Expired';
}

/**
 * Get color for status
 * @param {string} status - Expiration status
 * @returns {string} Bootstrap class: 'bg-success' | 'bg-danger' | 'bg-warning'
 */
export function getStatusColor(status) {
    switch (status) {
        case 'Valid': return 'bg-success';
        case 'Expired': return 'bg-danger';
        default: return 'bg-warning';
    }
}

/**
 * Standard JWT claims with descriptions for tooltips
 */
export const standardClaims = {
    iss: 'Issuer: Identifies the principal that issued the JWT.',
    sub: 'Subject: Identifies the principal that is the subject of the JWT.',
    aud: 'Audience: Identifies the recipients that the JWT is intended for.',
    exp: 'Expiration Time: Identifies the expiration time on or after which the JWT MUST NOT be accepted for processing.',
    iat: 'Issued At: Identifies the time at which the JWT was issued.',
    nbf: 'Not Before: Identifies the time before which the JWT MUST NOT be accepted for processing.'
};

/**
 * Highlight JSON with syntax coloring and tooltips for standard claims
 * @param {object} jsonObj - JSON object to highlight
 * @returns {string} HTML string with highlighted JSON
 */
export function highlightJSON(jsonObj) {
    let json = JSON.stringify(jsonObj, null, 2)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

    return json.replace(
        /("(\\u[a-fA-F0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
        (match) => {
            let cls = 'number';
            let title = '';
            if (/^"/.test(match)) {
                if (/:$/.test(match)) {
                    cls = 'key';
                    const keyName = match.replace(/^"/, '').replace(/"\s*:$/, '');
                    if (standardClaims[keyName]) {
                        title = ` title="${standardClaims[keyName].replace(/"/g, '&quot;')}"`;
                    }
                } else {
                    cls = 'string';
                }
            } else if (/true|false/.test(match)) {
                cls = 'boolean';
            } else if (/null/.test(match)) {
                cls = 'null';
            }
            return `<span class="${cls}"${title}>${match}</span>`;
        }
    );
}