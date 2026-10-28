import type { CSSProperties } from "react";
import type { Logo } from "../content/types";

// Seconds per logo, so every marquee scrolls at the same speed whatever its length.
const SECONDS_PER_LOGO = 2;

export function LogoImage({ logo, decorative = false }: { logo: Logo; decorative?: boolean }) {
  const alt = decorative ? "" : logo.name;
  if (logo.box) {
    // Placed exactly as in the design (may crop beyond the tile).
    return (
      <img
        alt={alt}
        className="absolute max-w-none"
        loading="lazy"
        src={logo.image}
        style={{ left: `${logo.box.left}%`, top: `${logo.box.top}%`, width: `${logo.box.width}%`, height: `${logo.box.height}%` }}
      />
    );
  }
  const fitClass = logo.fit === "cover" ? "object-cover" : "object-contain";
  const padding = logo.fit === "padded" ? "p-[14px_20px]" : "";
  return <img alt={alt} className={`block size-full ${fitClass} ${padding}`} loading="lazy" src={logo.image} />;
}

/** Endlessly scrolling row of 240×120 logo tiles (brands, certifications). */
export default function LogoMarquee({ logos, label, className }: { logos: Logo[]; label: string; className: string }) {
  if (logos.length === 0) return null;
  const style = { "--logo-marquee-duration": `${logos.length * SECONDS_PER_LOGO}s` } as CSSProperties;

  return (
    <div aria-label={label} className={`${className} brand-logo-viewport`} role="region" tabIndex={0}>
      <div className="brand-logo-track" style={style}>
        {[0, 1].map((copy) => (
          <div aria-hidden={copy === 1} className="brand-logo-group" key={copy}>
            {logos.map((logo) => (
              <div className="brand-logo-card" key={logo.id}>
                <LogoImage decorative={copy === 1} logo={logo} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
