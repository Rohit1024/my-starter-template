"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { UserAvatar } from "./user-avatar";
import Link from "next/link";

interface UserAccountNavProps extends React.HTMLAttributes<HTMLDivElement> {
  user: {
    firstName: string;
    userName: string;
    imageUrl: string;
    primaryEmailAddressId: string;
  };
}

export function UserAccountNav({ user }: UserAccountNavProps) {
  const { setTheme } = useTheme();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          id="dropdown_trigger"
          className="relative h-8 w-8 rounded-full"
        >
          <UserAvatar
            user={{
              firstName: user.firstName,
              userName: user.userName,
              imageUrl: user.imageUrl,
            }}
            className="h-9 w-9"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            {user.firstName && (
              <p className="font-medium leading-none">{user.firstName}</p>
            )}
            {user.primaryEmailAddressId && (
              <p className="text-sm font-medium leading-none text-muted-foreground">
                {user.primaryEmailAddressId}
              </p>
            )}
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem asChild>
            <Link href="/dashboard">
              <Icons.dashboard className="mr-2 h-4 w-4" />
              Dashboard
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/account">
              <Icons.settings className="mr-2 h-4 w-4" />
              Account
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/posts">
              <Icons.post className="mr-2 h-4 w-4" />
              Posts
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <Link href="/dashboard/billing">
              <Icons.billing className="mr-2 h-4 w-4" />
              Billing
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <Icons.theme className="mr-2 h-4 w-4" />
            <span>Theme</span>
          </DropdownMenuSubTrigger>
          <DropdownMenuPortal>
            <DropdownMenuSubContent>
              <DropdownMenuItem onClick={() => setTheme("light")}>
                <Icons.sun className="mr-2 h-4 w-4" />
                <span>Light</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                <Icons.moon className="mr-2 h-4 w-4" />
                <span>Dark</span>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>
                <Icons.system className="mr-2 h-4 w-4" />
                <span>System</span>
              </DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuPortal>
        </DropdownMenuSub>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="cursor-pointer">
          <Icons.logout className="mr-2 h-4 w-4" aria-hidden="true" />
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
