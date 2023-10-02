import { type SidebarNavItem } from "@/types"

export interface DashboardConfig {
  sidebarNav: SidebarNavItem[]
}

export const dashboardConfig: DashboardConfig = {
  sidebarNav: [
    {
      title: "Account",
      href: "/dashboard/account",
      icon: "user",
      items: [],
    },
    {
      title: "Posts",
      href: "/dashboard/posts",
      icon: "post",
      items: [],
    },
    {
      title: "Billing",
      href: "/dashboard/billing",
      icon: "billing",
      items: [],
    }
  ],
}