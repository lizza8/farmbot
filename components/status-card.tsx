import type React from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface StatusCardProps {
  title: string
  titleGeo: string
  value: number
  unit: string
  label: string
  labelGeo: string
  icon: React.ReactNode
  variant?: "default" | "warning" | "success" | "danger"
  className?: string
}

export function StatusCard({
  title,
  titleGeo,
  value,
  unit,
  label,
  labelGeo,
  icon,
  variant = "default",
  className,
}: StatusCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "success":
        return "border-chart-1/20 bg-chart-1/5"
      case "warning":
        return "border-chart-2/20 bg-chart-2/5"
      case "danger":
        return "border-chart-3/20 bg-chart-3/5"
      default:
        return "border-chart-4/20 bg-chart-4/5"
    }
  }

  const getProgressColor = () => {
    switch (variant) {
      case "success":
        return "bg-chart-1"
      case "warning":
        return "bg-chart-2"
      case "danger":
        return "bg-chart-3"
      default:
        return "bg-chart-4"
    }
  }

  return (
    <Card className={cn("relative overflow-hidden", getVariantStyles(), className)}>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center gap-2 text-sm font-medium">
          {icon}
          <span className="text-balance">
            {title} – {titleGeo}
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex items-center justify-center">
          <div className="relative size-20">
            <svg className="size-20 -rotate-90" viewBox="0 0 36 36">
              <path
                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeDasharray={`${value}, 100`}
                className={cn("transition-all duration-1000", getProgressColor())}
              />
              <path
                d="m18,2.0845 a 15.9155,15.9155 0 0,1 0,31.831 a 15.9155,15.9155 0 0,1 0,-31.831"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="opacity-20"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-lg font-bold">
                {value}
                {unit}
              </span>
            </div>
          </div>
        </div>
        <p className="text-center text-xs text-muted-foreground text-balance">
          {label} – {labelGeo}
        </p>
      </CardContent>
    </Card>
  )
}
