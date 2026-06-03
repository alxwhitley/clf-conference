import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteNav } from "../components/site/SiteNav";
import { SiteFooter } from "../components/site/SiteFooter";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Lost in the wave</div>
        <h1 className="font-display text-7xl md:text-8xl text-dark mt-4 tracking-wider">404</h1>
        <p className="mt-4 text-sm text-text-muted">
          That page doesn't exist. Let's get you home.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-cream px-4">
      <div className="max-w-md text-center">
        <div className="eyebrow">Something broke</div>
        <h1 className="font-display text-5xl md:text-6xl text-dark mt-4 tracking-wider">
          This page didn't load
        </h1>
        <p className="mt-4 text-sm text-text-muted">
          Try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px]"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-dark text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-[2px]"
          >
            Go Home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "New Wave — A Young Adults Gathering" },
      {
        name: "description",
        content:
          "New Wave is a three-day young adults gathering in Raleigh, NC. October 17–19, 2025. Hosted by CLF Church.",
      },
      { name: "author", content: "CLF Church" },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <SiteNav />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
