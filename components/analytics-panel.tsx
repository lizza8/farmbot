"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LineChart, Line, XAxis, YAxis, BarChart, Bar } from "recharts"

const batteryData = [
  { time: "00:00", value: 85 },
  { time: "04:00", value: 78 },
  { time: "08:00", value: 92 },
  { time: "12:00", value: 95 },
  { time: "16:00", value: 88 },
  { time: "20:00", value: 85 },
]

const waterData = [
  { time: "00:00", usage: 12 },
  { time: "04:00", usage: 8 },
  { time: "08:00", usage: 25 },
  { time: "12:00", usage: 18 },
  { time: "16:00", usage: 22 },
  { time: "20:00", usage: 15 },
]

const chartConfig = {
  value: {
    label: "Battery %",
    color: "hsl(var(--chart-1))",
  },
  usage: {
    label: "Water Usage (L)",
    color: "hsl(var(--chart-4))",
  },
}

export function AnalyticsPanel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-balance">Analytics – ანალიტიკა</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="day" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="day">Day</TabsTrigger>
            <TabsTrigger value="week">Week</TabsTrigger>
            <TabsTrigger value="month">Month</TabsTrigger>
          </TabsList>

          <TabsContent value="day" className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Battery History</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[200px]">
                    <LineChart data={batteryData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="var(--color-value)"
                        strokeWidth={2}
                        dot={{ fill: "var(--color-value)" }}
                      />
                    </LineChart>
                  </ChartContainer>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm">Water Usage</CardTitle>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig} className="h-[200px]">
                    <BarChart data={waterData}>
                      <XAxis dataKey="time" />
                      <YAxis />
                      <ChartTooltip content={<ChartTooltipContent />} />
                      <Bar dataKey="usage" fill="var(--color-usage)" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ChartContainer>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="week">
            <div className="flex items-center justify-center h-[200px] text-muted-foreground">
              Weekly analytics coming soon...
            </div>
          </TabsContent>

          <TabsContent value="month">
            <div className="flex items-center justify-center h-[200px] text-muted-foreground">
              Monthly analytics coming soon...
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  )
}
