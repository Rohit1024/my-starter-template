"use client";

import { siteConfig } from "@/config/site";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "./ui/button";
import Link from "next/link";
import { UserAccountNav } from "./auth/user-account-nav";
import { usePathname } from "next/navigation";

export function SiteHeader() {
  const pathname = usePathname();
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <ThemeToggle />
            {pathname.includes("dashboard") ? (
              <UserAccountNav
                user={{
                  firstName: "Rohit",
                  userName: "rohit",
                  imageUrl: "https://ui.shadcn.com/avatars/01.png",
                  primaryEmailAddressId: "rohit@gmail.com",
                }}
              />
            ) : (
              <Button size="sm" asChild>
                <Link href={"/signin"}>Signin</Link>
              </Button>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
