/**
 * Top Banner Plugin
 * Displays a customizable banner at the top of the page
 */

module.exports = {
  /**
   * Register head snippet (CSS styles)
   */
  registerCss: async (config) => {
    return `
      #opening-banner {
        background: ${config.bgColor || 'var(--color-brand-yellow)'};
        color: ${config.textColor || 'var(--color-brand-black)'};
        padding: 12px 16px;
        text-align: center;
        font-weight: 600;
        font-size: 1.125rem;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        display: block;
        z-index: 1000;
      }
      #opening-banner a {
        color: ${config.textColor || 'var(--color-brand-black)'};
        text-decoration: underline;
      }
    `;
  },

  /**
   * Register body snippet (HTML + inline JS)
   */
  registerBodySnippet: async (config) => {
    const message = config.message || 'Nu ook online te bestellen!';
    
    // Escape for HTML
    const escapedMessage = message
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

    return `
<!-- Top Banner Plugin -->
<div id="opening-banner">
  ${escapedMessage}
</div>
    `.trim();
  },

  /**
   * Called when plugin is enabled
   */
  onEnable: async (config) => {
    console.log('[top-banner] Plugin enabled');
  },

  /**
   * Called when plugin is disabled
   */
  onDisable: async () => {
    console.log('[top-banner] Plugin disabled');
  },

  /**
   * Called when config changes
   */
  onConfigChange: async (newConfig, oldConfig) => {
    console.log('[top-banner] Config updated');
  }
};
