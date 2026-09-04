import { HeadContent, Outlet, Scripts, createRootRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import appCss from "~/styles/app.css?url";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "Design Corner — Websites that grow your small business",
      },
      {
        name: "description",
        content:
          "Affordable, high quality websites for South African small businesses. Web design, development, e-commerce and SEO — built to get you found and grow.",
      },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  notFoundComponent: () => <div>Page not found</div>,
  component: RootComponent,
});

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <main className="flex min-h-[60vh] flex-1 flex-col">
        <Outlet />
      </main>
      <Footer />
    </RootDocument>
  );
}

function RootDocument({ children }: { children: ReactNode }) {
  return (
    <html lang="en-ZA">
      <head>
        <HeadContent />
        {/* Mark JS as active as early as possible: the reveal/entrance
            animations are gated behind this so SSR / no-JS output stays
            fully visible and there is no flash of hidden content. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)document.documentElement.classList.add('reduced-motion');",
          }}
        />
      </head>
      <body className="flex min-h-dvh flex-col">
        {children}
        <Scripts />
      </body>
    </html>
  );
}
