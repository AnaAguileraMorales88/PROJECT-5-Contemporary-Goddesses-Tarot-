import instagramIcon from "../../assets/icons/icono-insta.png";
import tiktokIcon from "../../assets/icons/icono-tiktok.png"
import xIcon from "../../assets/icons/icono-x.png"

const socialLinks = [
  {
    href: "https://instagram.com/yourusername",
    icon: instagramIcon,
    alt: "Instagram",
    label: "Instagram",
  },
  {
    href: "https://tiktok.com/@yourusername",
    icon: tiktokIcon,
    alt: "TikTok",
    label: "TikTok",
  },
  {
    href: "https://x.com/yourusername",
    icon: xIcon,
    alt: "X",
    label: "X",
  },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center justify-center gap-6">
      {socialLinks.map(({ href, icon, alt, label }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
          >
            <img
              src={icon}
              alt={alt}
              className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
          </a>
        </li>
      ))}
    </ul>
  );
}