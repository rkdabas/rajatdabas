"use client";

import {
  CONTACT_MAILTO,
  GITHUB_HREF,
  GMAIL_WEB_COMPOSE_HREF,
  LINKEDIN_HREF,
  RESUME_DRIVE_HREF,
  X_HREF,
} from "@/lib/contact";

type SocialIconLinksProps = {
  className?: string;
  iconClassName?: string;
  ariaLabel?: string;
};

const defaultIconClassName =
  "text-hex-muted hover:text-hex-foreground focus-visible:ring-hex-foreground/30 inline-flex h-9 w-9 items-center justify-center rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2";

const iconPE = "pointer-events-none";

function IconGithub(props: { className?: string }) {
  return (
    <svg className={`${iconPE} ${props.className ?? ""}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.92 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function IconX() {
  return (
    <svg className={`${iconPE} h-4 w-4`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function IconLinkedIn() {
  return (
    <svg className={`${iconPE} h-5 w-5`} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function IconMail() {
  return (
    <svg
      className={`${iconPE} h-5 w-5`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

/** Rounded document with folded corner and text lines (resume / CV). */
function IconResume() {
  return (
    <svg
      className={`${iconPE} h-5 w-5`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2Z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="16" y2="17" />
      <line x1="8" y1="9" x2="12" y2="9" />
    </svg>
  );
}

const socials = [
  { href: GITHUB_HREF, label: "GitHub", icon: <IconGithub className="h-5 w-5" /> },
  { href: X_HREF, label: "X (Twitter)", icon: <IconX /> },
  { href: LINKEDIN_HREF, label: "LinkedIn", icon: <IconLinkedIn /> },
  { href: CONTACT_MAILTO, label: "Email", icon: <IconMail /> },
  { href: RESUME_DRIVE_HREF, label: "Resume", icon: <IconResume /> },
] as const;

const buttonLikeReset =
  "m-0 cursor-pointer border-0 bg-transparent p-0 font-inherit text-inherit";

export function SocialIconLinks({
  className = "flex flex-wrap items-center gap-1",
  iconClassName = defaultIconClassName,
  ariaLabel = "Social and contact links",
}: SocialIconLinksProps) {
  return (
    <nav className={className} aria-label={ariaLabel}>
      {socials.map((item) => {
        const href = item.href;
        const external = href.startsWith("http");
        const isMail = href.startsWith("mailto:");

        if (isMail) {
          return (
            <button
              key="Email"
              type="button"
              className={`${iconClassName} ${buttonLikeReset} relative z-20 shrink-0`}
              aria-label="Email (opens compose)"
              title="Click: Gmail in the browser. Cmd or Ctrl+click: default mail app (mailto:)"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (e.metaKey || e.ctrlKey) {
                  window.location.assign(CONTACT_MAILTO);
                  return;
                }
                window.open(GMAIL_WEB_COMPOSE_HREF, "_blank", "noopener,noreferrer");
              }}
            >
              {item.icon}
            </button>
          );
        }

        return (
          <a
            key={item.label}
            href={href}
            className={`${iconClassName} relative z-20 shrink-0 cursor-pointer`}
            aria-label={item.label}
            {...(external ? { rel: "noopener noreferrer" as const, target: "_blank" as const } : {})}
          >
            {item.icon}
          </a>
        );
      })}
    </nav>
  );
}
