import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Clock, TrendingUp, AlertTriangle } from "lucide-react"

export function AIInsights() {
  const insights = [
    {
      icon: <Clock className="size-4" />,
      text: "Next watering in 2h 30m",
      textGeo: "მორწყვა 2სთ 30წთ-ში",
      type: "info" as const,
    },
    {
      icon: <TrendingUp className="size-4" />,
      text: "Soil acidity rising",
      textGeo: "ნიადაგი მჟავდება",
      type: "warning" as const,
    },
    {
      icon: <AlertTriangle className="size-4" />,
      text: "Solar efficiency peak tomorrow",
      textGeo: "ხვალ პიკი იქნება",
      type: "success" as const,
    },
  ]

  const getBadgeVariant = (type: string) => {
    switch (type) {
      case "warning":
        return "secondary"
      case "success":
        return "default"
      default:
        return "outline"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-balance">
          <Brain className="size-5 text-chart-5" />
          AI Insights – AI ანალიზი
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {insights.map((insight, index) => (
            <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30">
              <Badge variant={getBadgeVariant(insight.type)} className="mt-0.5">
                {insight.icon}
              </Badge>
              <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{insight.text}</p>
                <p className="text-xs text-muted-foreground">{insight.textGeo}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
