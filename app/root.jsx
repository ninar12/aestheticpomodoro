import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import index from './index.css'
import PlantinMTLightItalic from './fonts/PlantinMTLightItalic.ttf'; // Rename the imported font file
import icon from '../public/favicon.ico';

export const meta = () => ({
  charset: "utf-8",
  title: "lana pomodoro",
  viewport: "width=device-width,initial-scale=1",
});

export const links = () => [{
  rel: "stylesheet",
  href: index,
},
{
  rel: 'icon',
  href: icon,
}];



export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="icon" href="../public/favicon.ico" type="image/png" />
        </Links>

      </head>
      <body style={{ overflowY: "hidden", overflowX: "hidden", fontFamily: 'PlantinMTLightItalic, cambria, serif', margin: 0, background: '#FFFDF6' }}>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
