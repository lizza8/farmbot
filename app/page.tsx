"use client"

import { StatusCard } from "@/components/status-card"
import { EnvironmentStrip } from "@/components/environment-strip"
import { AnalyticsPanel } from "@/components/analytics-panel"
import { QuickActions } from "@/components/quick-actions"
import { AIInsights } from "@/components/ai-insights"
import { MiniMap } from "@/components/mini-map"
import { SettingsPanel } from "@/components/settings-panel"
import { NotificationsPanel } from "@/components/notifications-panel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Battery, Sun, Droplets, Sprout, Globe } from "lucide-react"
import { useState } from "react"

export default function FarmBotDashboard() {
  const [language, setLanguage] = useState("en")

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-balance">FarmBot – ფარმბოტი</h1>
              <Badge variant="outline" className="hidden sm:flex">
                v2.1.0
              </Badge>
            </div>

            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setLanguage(language === "en" ? "geo" : "en")}
                className="gap-2"
              >
                <Globe className="size-4" />
                {language === "en" ? "🇬🇪" : "🇬🇧"}
              </Button>
              <NotificationsPanel />
              <SettingsPanel />
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6 space-y-6">
        {/* Status Cards Row 1 */}
        <div className="grid gap-4 md:grid-cols-2">
          <StatusCard
            title="Battery"
            titleGeo="ელემენტი"
            value={85}
            unit="%"
            label="Charging via Solar"
            labelGeo="იტენება მზისგან"
            icon={<Battery className="size-4" />}
            variant="success"
          />
          <StatusCard
            title="Solar Panel"
            titleGeo="მზის პანელი"
            value={87}
            unit="%"
            label="Efficiency 120W Output"
            labelGeo="ეფექტიანობა 120W"
            icon={<Sun className="size-4" />}
            variant="success"
          />
        </div>

        {/* Status Cards Row 2 */}
        <div className="grid gap-4 md:grid-cols-2">
          <StatusCard
            title="Water Tank"
            titleGeo="წყლის რეზერვუარი"
            value={65}
            unit="%"
            label="32L Left"
            labelGeo="32ლ დარჩა"
            icon={<Droplets className="size-4" />}
            variant="warning"
          />
          <StatusCard
            title="Soil Moisture"
            titleGeo="ნიადაგის ტენიანობა"
            value={42}
            unit="%"
            label="Medium Level"
            labelGeo="საშუალო დონე"
            icon={<Sprout className="size-4" />}
            variant="default"
          />
        </div>

        {/* Environment Strip */}
        <div className="space-y-2">
          <h2 className="text-lg font-semibold text-balance">Environment – გარემო</h2>
          <EnvironmentStrip />
        </div>

        {/* Analytics Panel */}
        <AnalyticsPanel />

        {/* Quick Actions */}
        <QuickActions />

        {/* AI Insights & Mini Map */}
        <div className="grid gap-4 lg:grid-cols-2">
          <AIInsights />
          <MiniMap />
        </div>
      </main>
    </div>
  )
}
