import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Check,
  Copy,
  Expand,
  Github,
  HalfMoon,
  Linkedin,
  Mail,
  MapPin,
  Page,
  SunLight,
  Xmark,
} from "iconoir-react";

/** Every icon on the site comes from Iconoir (iconoir.com), named here once. */
const icons = {
  "arrow-down": ArrowDown,
  "arrow-left": ArrowLeft,
  "arrow-right": ArrowRight,
  "arrow-up": ArrowUp,
  "arrow-up-right": ArrowUpRight,
  check: Check,
  copy: Copy,
  expand: Expand,
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
  "map-pin": MapPin,
  moon: HalfMoon,
  page: Page,
  sun: SunLight,
  close: Xmark,
};

export type IconName = keyof typeof icons;

/** Sized to the surrounding text (1.15em) and drawn in the current colour. Decorative: the label carries the meaning. */
export function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const Svg = icons[name];
  return <Svg aria-hidden width="1.15em" height="1.15em" strokeWidth={1.6} className={`icon icon-${name} inline-block shrink-0 ${className}`} />;
}
