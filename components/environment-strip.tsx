import { Badge } from "@/components/ui/badge"
import { Thermometer, Droplets, Shield, Wind } from "lucide-react"

interface EnvironmentData {
  temperature: number
  humidity: number
  systemHealth: "good" | "warning" | "critical"
  airQuality: "safe" | "moderate" | "poor"
}

export function EnvironmentStrip() {
  const data: EnvironmentData = {
    temperature: 27,
    humidity: 61,
    systemHealth: "good",
    airQuality: "safe",
  }

  const getHealthVariant = (health: string) => {
    switch (health) {
      case "good":
        return "default"
      case "warning":
        return "secondary"
      case "critical":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getAirQualityVariant = (quality: string) => {
    switch (quality) {
      case "safe":
        return "default"
      case "moderate":
        return "secondary"
      case "poor":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="flex gap-4 overflow-x-auto pb-2">
      <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 whitespace-nowrap">
        <Thermometer className="size-4" />
        <span className="font-medium">{data.temperature}°C</span>
        <span className="text-muted-foreground">Temperature – ტემპერატურა</span>
      </Badge>

      <Badge variant="outline" className="flex items-center gap-2 px-3 py-2 whitespace-nowrap">
        <Droplets className="size-4" />
        <span className="font-medium">{data.humidity}%</span>
        <span className="text-muted-foreground">Humidity – ტენიანობა</span>
      </Badge>

      <Badge
        variant={getHealthVariant(data.systemHealth)}
        className="flex items-center gap-2 px-3 py-2 whitespace-nowrap"
      >
        <Shield className="size-4" />
        <span className="font-medium">Good</span>
        <span className="text-muted-foreground">Health – მდგომარეობა</span>
      </Badge>

      <Badge
        variant={getAirQualityVariant(data.airQuality)}
        className="flex items-center gap-2 px-3 py-2 whitespace-nowrap"
      >
        <Wind className="size-4" />
        <span className="font-medium">Safe</span>
        <span className="text-muted-foreground">Air Quality – ჰაერის ხარისხი</span>
      </Badge>
    </div>
  )
}
