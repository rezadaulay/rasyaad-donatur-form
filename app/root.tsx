import {
  isRouteErrorResponse,
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
  useRouteError,
} from "@remix-run/react";
import "./tailwind.css";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  return json({
    ENV: {
      RECAPTCHA_SITE_KEY: process.env.RECAPTCHA_SITE_KEY,
    },
  });
};

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <html>
      <head>
        <title>Oops!</title>
        <Meta />
        <Links />
      </head>
      <body>
        <h1>
          {isRouteErrorResponse(error)
            ? `${error.status} ${error.statusText}`
            : error instanceof Error
            ? error.message
            : "Unknown Error"}
        </h1>
        <Scripts />
      </body>
    </html>
  );
}

export function Layout({ children }: { children: React.ReactNode }) {
  const { ENV } = useLoaderData<typeof loader>();
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className={`bg-gray`}>
        <GoogleReCaptchaProvider
          reCaptchaKey={ENV.RECAPTCHA_SITE_KEY}
          scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
          }}
        >
          {children}
        </GoogleReCaptchaProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
