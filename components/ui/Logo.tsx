/** Iconoir's code brackets (stroked). */
const BRACES = ["M5.5 21L4.5 21C3.4 21 2.5 20.1 2.5 19V14C2.5 13 1 12 1 12C1 12 2.5 11 2.5 10V5C2.5 3.9 3.4 3 4.5 3L5.5 3", "M27.75 21L28.75 21C29.85 21 30.75 20.1 30.75 19V14C30.75 13 32.25 12 32.25 12C32.25 12 30.75 11 30.75 10V5C30.75 3.9 29.85 3 28.75 3L27.75 3"];

/** "SP" in Inter Tight Bold, the hero name's face, converted to outlines so the favicon matches exactly. */
const SP = "M4.79 11.16Q3.46 11.16 2.47 10.75Q1.48 10.34 0.93 9.54Q0.38 8.73 0.35 7.54H2.6Q2.64 8.09 2.92 8.46Q3.21 8.84 3.68 9.02Q4.15 9.21 4.76 9.21Q5.35 9.21 5.79 9.04Q6.23 8.86 6.47 8.56Q6.71 8.25 6.71 7.85Q6.71 7.48 6.49 7.23Q6.27 6.98 5.86 6.8Q5.44 6.62 4.84 6.48L3.64 6.19Q2.25 5.85 1.45 5.13Q0.64 4.4 0.64 3.18Q0.64 2.18 1.18 1.43Q1.72 0.69 2.67 0.27Q3.61 -0.15 4.81 -0.15Q6.04 -0.15 6.95 0.27Q7.86 0.69 8.38 1.44Q8.89 2.19 8.9 3.16H6.66Q6.6 2.51 6.12 2.15Q5.63 1.8 4.79 1.8Q4.23 1.8 3.83 1.95Q3.44 2.11 3.23 2.39Q3.03 2.67 3.03 3.03Q3.03 3.42 3.26 3.68Q3.5 3.94 3.89 4.11Q4.29 4.27 4.76 4.39L5.75 4.63Q6.46 4.79 7.07 5.06Q7.67 5.33 8.12 5.72Q8.56 6.11 8.81 6.64Q9.05 7.17 9.05 7.86Q9.05 8.86 8.54 9.61Q8.04 10.35 7.08 10.75Q6.13 11.16 4.79 11.16ZM9.81 11V0H14.14Q15.4 0 16.28 0.48Q17.16 0.95 17.62 1.8Q18.09 2.64 18.09 3.73Q18.09 4.83 17.62 5.66Q17.15 6.5 16.25 6.97Q15.35 7.44 14.09 7.44H11.32V5.57H13.71Q14.38 5.57 14.82 5.34Q15.26 5.1 15.48 4.69Q15.7 4.27 15.7 3.73Q15.7 3.18 15.48 2.77Q15.26 2.36 14.82 2.13Q14.38 1.91 13.7 1.91H12.13V11Z";

/**
 * The site mark, {SP}: Iconoir code brackets around the initials in orange.
 * `failed` swaps the initials for a cross ({✗}) on the 404 page; the cross draws itself (see .logo-tick).
 */
export function Logo({ failed = false, className = "" }: { failed?: boolean; className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 33.25 24" fill="none" className={`shrink-0 ${className}`}>
      <g stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
        {BRACES.map((b) => (
          <path key={b} d={b} />
        ))}
      </g>
      {failed ? (
        <path
          className="logo-tick"
          d="M12.6 7.5L21.6 16.5M21.6 7.5L12.6 16.5"
          pathLength={1}
          stroke="var(--accent)"
          strokeWidth={2.6}
          strokeLinecap="round"
        />
      ) : (
        <path d={SP} transform="translate(7.4 6.5)" fill="var(--accent)" />
      )}
    </svg>
  );
}
