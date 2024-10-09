import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.scss";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
const roboto = localFont({
  src: [
    {
      path: "./fonts/Roboto-Bold.ttf",
      weight: "700",
    },
    {
      path: "./fonts/Roboto-Regular.ttf",
      weight: "400",
    },
    {
      path: "./fonts/Roboto-Light.ttf",
      weight: "300",
    },
    {
      path: "./fonts/Roboto-Italic.ttf",
      weight: "400",
      style: 'italic'
    },

  ],
  variable: "--font-roboto",
});
// const arial = localFont({
//   src: [
//     {
//       path: "./fonts/arial.ttf",
//       weight: "700",
//     },
//     {
//       path: "./fonts/arial.ttf",
//       weight: "500",
//     },
//   ],
//   variable: "--font-arial",
// });
const arsenal = localFont({
  src: [
    {
      path: "./fonts/Arsenal-Bold.ttf",
      weight: "800",
    },
    {
      path: "./fonts/Arsenal-Regular.ttf",
      weight: "500",
    },
  ],
  variable: "--font-arsenal",
});
export const metadata: Metadata = {
  title: "AFSONA TOUR",
  description: "",
};


export default async function LocaleLayout({
    children,
    params: {locale}
  }: {
    children: React.ReactNode;
    params: {locale: string};
  }) {
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
   
    return (
      <html  lang={locale}>
        <body suppressHydrationWarning={true} className={`${arsenal.variable} ${roboto.variable} font-roboto`}>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </body>
      </html>
    );
  }