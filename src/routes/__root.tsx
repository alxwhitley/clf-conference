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
        <h1 className="font-display text-7xl md:text-8xl text-dark mt-4">404</h1>
        <p className="mt-4 text-sm text-text-muted">
          That page doesn't exist. Let's get you home.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-none"
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
        <h1 className="font-display text-5xl md:text-6xl text-dark mt-4">
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
            className="inline-flex items-center justify-center px-6 py-3.5 bg-gold text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-none"
          >
            Try Again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-dark text-dark text-[11px] font-bold uppercase tracking-[0.22em] rounded-none"
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
      { title: "The Way — A Young Adults Gathering" },
      {
        name: "description",
        content:
          "A three-day gathering for young adults in Raleigh, NC. October 16–18, 2026.",
      },
      { name: "author", content: "CLF Church" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "The Way — A Young Adults Gathering" },
      { name: "twitter:title", content: "The Way — A Young Adults Gathering" },
      { property: "og:description", content: "A three-day gathering for young adults in Raleigh, NC. October 16–18, 2026." },
      { name: "twitter:description", content: "A three-day gathering for young adults in Raleigh, NC. October 16–18, 2026." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a138e950-4e6c-4347-a61e-4ff45ae21ac8/id-preview-200b1236--a06a7226-8177-4180-a4ec-5278ec2e006d.lovable.app-1780496828385.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/a138e950-4e6c-4347-a61e-4ff45ae21ac8/id-preview-200b1236--a06a7226-8177-4180-a4ec-5278ec2e006d.lovable.app-1780496828385.png" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Bodoni+Moda:opsz,wght@96,700;96,800;96,900&family=Inter:wght@400;500;600;700&display=swap",
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
