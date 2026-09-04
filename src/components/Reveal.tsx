import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

/**
 * Scroll-triggered reveal. Wraps content and fades/slides it in the first
 * time it enters the viewport using an IntersectionObserver + a CSS class.
 *
 * - SSR / no-JS safe: content renders fully visible; the hidden state is only
 *   applied once the `.js` class is on <html> (see __root).
 * - Respects `prefers-reduced-motion` (content shown instantly).
 * - Animates transform + opacity only (no layout thrash, GPU friendly).
 *
 * Use `delay` to stagger items inside a grid (e.g. `i * 90`).
 */
export default function Reveal({
  children,
  delay = 0,
  duration = "normal",
  className = "",
  style,
}: {
  children: ReactNode;
  delay?: number;
  duration?: "normal" | "slow";
  className?: string;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls =
    "reveal" +
    (duration === "slow" ? " reveal-slow" : "") +
    (visible ? " is-visible" : "") +
    (className ? " " + className : "");

  return (
    <div
      ref={ref}
      className={cls}
      style={delay ? { ...style, transitionDelay: `${delay}ms` } : style}
    >
      {children}
    </div>
  );
}
