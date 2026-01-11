"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Droplets, Send, Pause, Home, Bot } from "lucide-react"
import { useState } from "react"

export function QuickActions() {
  const [autonomousMode, setAutonomousMode] = useState(true)

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Quick Actions – სწრაფი მოქმედებები</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
            <Droplets className="size-6 text-chart-4" />
            <div className="text-center">
              <div className="font-medium">Water Now</div>
              <div className="text-xs text-muted-foreground">მორწყე ახლა</div>
            </div>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
            <Send className="size-6 text-chart-1" />
            <div className="text-center">
              <div className="font-medium">Send to Field</div>
              <div className="text-xs text-muted-foreground">გაგზავნა ველზე</div>
            </div>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
            <Pause className="size-6 text-chart-2" />
            <div className="text-center">
              <div className="font-medium">Pause</div>
              <div className="text-xs text-muted-foreground">შეჩერება</div>
            </div>
          </Button>

          <Button variant="outline" className="h-auto flex-col gap-2 p-4 bg-transparent">
            <Home className="size-6 text-chart-5" />
            <div className="text-center">
              <div className="font-medium">Return Home</div>
              <div className="text-xs text-muted-foreground">დაბრუნება ბაზაზე</div>
            </div>
          </Button>
        </div>

        <div className="mt-4 flex items-center justify-between p-3 rounded-lg bg-muted/50">
          <div className="flex items-center gap-2">
            <Bot className="size-5" />
            <span className="font-medium">Autonomous Mode – ავტონომიური რეჟიმი</span>
          </div>
          <Badge variant={autonomousMode ? "default" : "secondary"}>{autonomousMode ? "Active" : "Inactive"}</Badge>
        </div>
      </CardContent>
    </Card>
  )
}
