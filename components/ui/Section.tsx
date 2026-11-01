/** Section wrapper: a hairline rule, the mono label (an h2) in its own column on desktop, then the content. */
export function Section({
  id,
  label,
  className = "",
  children,
}: {
  id?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  const headingId = `${id ?? label?.replace(/\W+/g, "-")}-heading`;
  return (
    <section
      id={id}
      aria-labelledby={label && headingId}
      className={`scroll-mt-12 border-t border-line pt-6 pb-16 md:grid lg:scroll-mt-16 md:grid-cols-[150px_1fr] md:gap-x-10 md:pt-8 md:pb-24 ${className}`}
    >
      {label && (
        <h2
          id={headingId}
          className="mb-7 font-mono text-[13px] font-medium md:sticky md:top-24 md:mb-0 md:self-start"
        >
          {label}
        </h2>
      )}
      <div className="min-w-0">{children}</div>
    </section>
  );
}
