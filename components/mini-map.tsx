import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Scan, Battery, Sun, Droplets } from "lucide-react"

export function MiniMap() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Field Map – ველის რუკა</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative aspect-video bg-muted/30 rounded-lg overflow-hidden mb-4">
          {/* Simplified field representation */}
          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/20 to-chart-4/20">
            {/* Robot position indicator */}
            <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="size-4 bg-chart-5 rounded-full animate-pulse"></div>
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-card border rounded-lg p-2 shadow-lg min-w-max">
                  <div className="flex items-center gap-2 text-xs">
                    <Battery className="size-3" />
                    <span>85%</span>
                    <Sun className="size-3" />
                    <span>120W</span>
                    <Droplets className="size-3" />
                    <span>42%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Field boundaries */}
            <div className="absolute inset-2 border-2 border-dashed border-muted-foreground/30 rounded"></div>
          </div>

          {/* Legend */}
          <div className="absolute top-2 right-2 bg-card/90 backdrop-blur-sm rounded p-2">
            <div className="flex items-center gap-1 text-xs">
              <div className="size-2 bg-chart-5 rounded-full"></div>
              <span>Robot</span>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Current Status:</span>
            <Badge variant="default">Active</Badge>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs">
            <div className="flex items-center gap-1">
              <Battery className="size-3" />
              <span>Battery 85% – ელემენტი 85%</span>
            </div>
            <div className="flex items-center gap-1">
              <Sun className="size-3" />
              <span>Solar 120W – მზის პანელი 120W</span>
            </div>
            <div className="flex items-center gap-1">
              <Droplets className="size-3" />
              <span>Moisture 42% – ტენიანობა 42%</span>
            </div>
          </div>

          <Button variant="outline" className="w-full bg-transparent">
            <Scan className="size-4" />
            Scan Field – ველის სკანირება
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
