"use client"

import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, AlertTriangle, Battery, Droplets, Sun, Trash2 } from "lucide-react"

export function NotificationsPanel() {
  const notifications = [
    {
      id: 1,
      icon: <AlertTriangle className="size-4" />,
      title: "Low water tank – 15% left",
      time: "2 min ago",
      type: "warning" as const,
    },
    {
      id: 2,
      icon: <Battery className="size-4" />,
      title: "Battery charged to 90%",
      time: "15 min ago",
      type: "success" as const,
    },
    {
      id: 3,
      icon: <Droplets className="size-4" />,
      title: "Soil moisture dropping fast",
      time: "1 hour ago",
      type: "warning" as const,
    },
    {
      id: 4,
      icon: <Sun className="size-4" />,
      title: "Solar panel efficiency low (cloudy)",
      time: "2 hours ago",
      type: "info" as const,
    },
  ]

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "warning":
        return "secondary"
      case "success":
        return "default"
      case "error":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="size-5" />
          <Badge className="absolute -top-1 -right-1 size-5 p-0 flex items-center justify-center text-xs">
            {notifications.length}
          </Badge>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span>Notifications – შეტყობინებები</span>
            <Button variant="ghost" size="sm">
              <Trash2 className="size-4" />
              Clear All
            </Button>
          </SheetTitle>
        </SheetHeader>

        <div className="mt-6 space-y-4">
          {notifications.map((notification) => (
            <div key={notification.id} className="flex items-start gap-3 p-3 rounded-lg border bg-card">
              <Badge variant={getBadgeVariant(notification.type)} className="mt-0.5">
                {notification.icon}
              </Badge>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{notification.title}</p>
                <p className="text-xs text-muted-foreground">{notification.time}</p>
              </div>
              <Button variant="ghost" size="sm">
                <Trash2 className="size-3" />
              </Button>
            </div>
          ))}

          {notifications.length === 0 && (
            <div className="flex items-center justify-center h-32 text-muted-foreground">No new notifications</div>
          )}
        </div>

        <div className="mt-6">
          <Button variant="outline" className="w-full bg-transparent">
            Mark All as Read
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  )
}
