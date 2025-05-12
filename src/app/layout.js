import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({
  weight: ['200', '300','400','500','600', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
})


export const metadata = {
  title: "Jeeten Mandal | Full Stack Developer",
  description: "Hey, I am experienced in building web applications using React, Next.js, Node.js, Express.js, and MongoDB. I am also proficient in using Tailwind CSS for styling and have experience with Firebase for authentication and database management.",
  keywords: "Jeeten Mandal, Full Stack Developer, React, Next.js, Node.js, MongoDB, Tailwind CSS",
  // authors: [{ name: "Jeeten Mandal", url: "https://jeeten.com.np" }],
  // creator: "Jeeten Mandal",
  // openGraph: {
  //   title: "Jeeten Mandal | Full Stack Developer",
  //   description: "Hey, I am experienced in building web applications using React, Next.js, Node.js, Express.js, and MongoDB. I am also proficient in using Tailwind CSS for styling and have experience with Firebase for authentication and database management.",
  //   url: "https://jeeten.com.np",
  //   siteName: "Jeeten Mandal",
  //   images: [
  //     {
  //       url: "/images/jeeten-mandal.png",
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  // },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Jeeten Mandal | Full Stack Developer",
  //   description: "Hey, I am experienced in building web applications using React, Next.js, Node.js, Express.js, and MongoDB. I am also proficient in using Tailwind CSS for styling and have experience with Firebase for authentication and database management.",
  //   images: [
  //     {
  //       url: "/images/jeeten-mandal.png",
  //       width: 800,
  //       height: 600,
  //     },
  //   ],
  // },
  // icons: {
  //   icon: "/favicon.ico",
  //   shortcut: "/favicon.ico",
  //   apple: "/apple-touch-icon.png",
  // },
  // manifest: "/site.webmanifest",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body className={poppins.className}>
          
          {children}

        </body>
      </html>
  )
}