import './figma-embed.scss';

/**
 * Renders a Figma design as an embedded iframe.
 * Accepts a standard Figma share URL and converts it to an embed URL.
 *
 * @param {string} url - Figma share URL (e.g., https://www.figma.com/file/...)
 * @param {string} [title] - Accessible title for the iframe
 */
export default function FigmaEmbed({ url, title = 'Design Preview' }) {
  if (!url) {
    return (
      <div className="figma-embed figma-embed--empty">
        <p>No design link provided</p>
      </div>
    );
  }

  // Convert share URL to embed URL
  const embedUrl = toEmbedUrl(url);

  if (!embedUrl) {
    return (
      <div className="figma-embed figma-embed--error">
        <p>Invalid Figma URL</p>
      </div>
    );
  }

  return (
    <div className="figma-embed">
      <iframe
        className="figma-embed__frame"
        src={embedUrl}
        title={title}
        allowFullScreen
      />
    </div>
  );
}

/**
 * Convert a Figma share URL to an embed URL.
 * Supports: figma.com/file/..., figma.com/proto/..., figma.com/design/...
 */
function toEmbedUrl(url) {
  try {
    const parsed = new URL(url);
    if (!parsed.hostname.includes('figma.com')) return null;

    // Already an embed URL
    if (parsed.pathname.startsWith('/embed')) return url;

    // Convert to embed format
    return `https://www.figma.com/embed?embed_host=hekatek&url=${encodeURIComponent(url)}`;
  } catch {
    return null;
  }
}
