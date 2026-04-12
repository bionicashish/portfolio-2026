import type { Metadata } from "next";
import { HandyTodoPage } from "@/components/HandyTodoPage";
import handyOgImg from "@/assets/handy-og-img.png";
import favicon from "@/assets/favicon-32x32.png";

export const metadata: Metadata = {
  metadataBase: new URL("https://bionicashish.com"),
  title: "Handy Todo",
  description: "Simple todo sheet that sits on your Mac toolbar.",
  openGraph: {
    title: "Handy Todo",
    description: "Simple todo sheet that sits on your Mac toolbar.",
    url: "https://bionicashish.com/handy-todo",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: handyOgImg.src,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Handy Todo",
    description: "Simple todo sheet that sits on your Mac toolbar.",
    images: [handyOgImg.src],
  },
  icons: {
    icon: favicon.src,
  },
};

export default function HandyTodo() {
  return <HandyTodoPage />;
}
