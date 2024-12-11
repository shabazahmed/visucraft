// import type { Metadata } from "next";
// import { IBM_Plex_Sans } from "next/font/google";
// import "./globals.css";
// import { cn } from "@/lib/utils";
// import { ClerkProvider } from "@clerk/nextjs";

// const IBMPlex = IBM_Plex_Sans({
//   subsets: ["latin"],
//   variable: "--font-ibm-pldex",
//   weight: ["400", "500", "600", "700"],
// });
// // const geistMono = localFont({
// //   src: "./fonts/GeistMonoVF.woff",
// //   variable: "--font-geist-mono",
// //   weight: "100 900",
// // });

// export const metadata: Metadata = {
//   title: "Visucratf",
//   description: "AI-Powered Image Generator",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <ClerkProvider>
//       <html lang="en">
//         <body
//           className={cn("font-IBMPlex antialiased", IBMPlex.variable)}
//         >
//           {children}
//         </body>
//       </html>
//     </ClerkProvider>
//   );
// }

import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import './globals.css'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <header>
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}