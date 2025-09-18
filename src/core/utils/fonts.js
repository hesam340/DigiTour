import localFont from "next/font/local";

export const yekan = localFont({
  src: [
    {
      path: "../../../public/fonts/yekan/YekanBakh-Light.woff2",
      weight: "100",
      style: "normal",
      variable: "--font-yekan",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Regular.woff2",
      weight: "200",
      style: "normal",
      variable: "--font-yekan",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Bold.woff2",
      weight: "400",
      style: "normal",
      variable: "--font-yekan",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Heavy.woff2",
      weight: "600",
      style: "normal",
      variable: "--font-yekan",
    },
    {
      path: "../../../public/fonts/yekan/YekanBakh-Fat.woff2",
      weight: "700",
      style: "normal",
      variable: "--font-yekan",
    },
  ],
});

export const vazir = localFont({
  src: [
    {
      path: "../../../public/fonts/vazir/Vazirmatn-Thin.ttf",
      weight: "100",
      style: "normal",
      variable: "--font-vazir",
    },
  ],
});
