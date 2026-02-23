import { MoveRight, MessageCircle, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

type CTAIcon = "whatsapp" | "phone" | "arrow" | "none";

interface CTAButton {
  text: string;
  href: string;
  icon?: CTAIcon;
  variant?: "primary" | "outline" | "whatsapp" | "accent";
  external?: boolean;
}

interface CallToActionProps {
  badge?: string;
  title: string;
  description?: string;
  primaryButton?: CTAButton;
  secondaryButton?: CTAButton;
  /** "card" = tarjeta redondeada, "full" = sección ancho completo con degradado */
  layout?: "card" | "full";
  /** Solo en layout="card": si true el interior tiene el degradado violeta oscuro */
  dark?: boolean;
  /** Descripción en blanco puro (text-white) en layout card dark */
  descriptionWhite?: boolean;
  className?: string;
}

const iconMap = {
  whatsapp: <MessageCircle className="w-4 h-4" />,
  phone: <PhoneCall className="w-4 h-4" />,
  arrow: <MoveRight className="w-4 h-4" />,
  none: null,
};

function CTAButtonEl({
  text,
  href,
  icon = "arrow",
  variant = "primary",
  external = false,
  onDark = false,
}: CTAButton & { onDark?: boolean }) {
  const base =
    "inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-xl px-7 py-3 text-base transition-all duration-200 cursor-pointer";

  const styles: Record<string, string> = {
    primary:
      "bg-secondary text-white hover:bg-secondary-light shadow-md shadow-secondary/20 hover:shadow-lg hover:shadow-secondary/30 hover:-translate-y-0.5",
    accent:
      "bg-accent text-primary hover:bg-accent-light shadow-md shadow-accent/25 hover:shadow-lg hover:shadow-accent/30 hover:-translate-y-0.5",
    // outline sobre fondo claro → borde violeta
    outline:
      "border-2 border-secondary text-secondary hover:bg-secondary hover:text-white",
    // outline sobre fondo oscuro → borde blanco translúcido
    "outline-on-dark":
      "border-2 border-white/40 text-white hover:bg-white/10 backdrop-blur-sm",
    whatsapp:
      "bg-whatsapp text-white hover:bg-green-600 shadow-md shadow-green-500/20 hover:-translate-y-0.5",
  };

  const resolvedVariant =
    variant === "outline" && onDark ? "outline-on-dark" : variant;

  const anchorProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <a href={href} className={cn(base, styles[resolvedVariant])} {...anchorProps}>
      {text}
      {icon !== "none" && iconMap[icon]}
    </a>
  );
}

export function CallToAction({
  badge,
  title,
  description,
  primaryButton,
  secondaryButton,
  layout = "card",
  dark = false,
  descriptionWhite = false,
  className,
}: CallToActionProps) {
  // ── FULL WIDTH ────────────────────────────────────────────────
  if (layout === "full") {
    return (
      <section
        className={cn(
          "py-16 md:py-24 bg-gradient-to-br from-primary via-primary-light to-secondary",
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto flex flex-col items-center gap-6">
            {badge && (
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-xs font-heading font-semibold tracking-widest uppercase backdrop-blur-sm">
                {badge}
              </span>
            )}
            <h2 className="font-heading font-bold text-3xl md:text-5xl tracking-tight text-white text-balance">
              {title}
            </h2>
            {description && (
              <p className="text-white/70 font-body text-lg leading-relaxed">
                {description}
              </p>
            )}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
              {primaryButton && (
                <CTAButtonEl {...primaryButton} onDark />
              )}
              {secondaryButton && (
                <CTAButtonEl
                  {...secondaryButton}
                  icon={secondaryButton.icon ?? "arrow"}
                  onDark
                />
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  // ── CARD ──────────────────────────────────────────────────────
  const cardBg = dark
    ? "bg-gradient-to-br from-primary via-primary-light to-secondary shadow-xl shadow-primary/20"
    : "bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 border border-secondary/10 shadow-sm";

  const badgeStyle = dark
    ? "bg-white/10 border border-white/20 text-white/80 backdrop-blur-sm"
    : "bg-secondary/10 text-secondary";

  const titleStyle = dark ? "text-white" : "text-neutral-900";
  const descStyle = dark
    ? (descriptionWhite ? "text-white" : "text-white/70")
    : "text-neutral-500";

  return (
    <section className={cn("py-16 md:py-24 bg-neutral-50", className)}>
      <div className="container mx-auto px-4">
        <div className={cn("flex flex-col items-center text-center rounded-2xl p-8 md:p-14 gap-6", cardBg)}>
          {badge && (
            <span className={cn("inline-block px-4 py-1.5 rounded-full text-xs font-heading font-semibold tracking-widest uppercase", badgeStyle)}>
              {badge}
            </span>
          )}
          <div className="flex flex-col gap-3 max-w-xl">
            <h2 className={cn("text-3xl md:text-5xl font-heading font-bold tracking-tight text-balance", titleStyle)}>
              {title}
            </h2>
            {description && (
              <p className={cn("text-lg font-body leading-relaxed", descStyle)}>
                {description}
              </p>
            )}
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {primaryButton && (
              <CTAButtonEl {...primaryButton} onDark={dark} />
            )}
            {secondaryButton && (
              <CTAButtonEl
                {...secondaryButton}
                icon={secondaryButton.icon ?? "arrow"}
                onDark={dark}
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
