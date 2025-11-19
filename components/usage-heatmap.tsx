"use client";

import { useMemo, useState } from "react";
import {
  eachDayOfInterval,
  endOfWeek,
  format,
  isSameMonth,
  startOfWeek,
  subMonths,
  isSameDay,
  startOfMonth,
  getDay,
  addDays,
  getDate,
  subYears,
  subWeeks,
} from "date-fns";
import { cn } from "@/lib/utils";

type DayPoint = { date: string; totalTokens: number };

export interface UsageHeatmapProps {
  days: DayPoint[];
  className?: string;
  title?: string;
}

function getBuckets(maxValue: number) {
  if (maxValue <= 0) return [0, 1, 2, 3, 4];
  const q1 = Math.ceil(maxValue * 0.2);
  const q2 = Math.ceil(maxValue * 0.4);
  const q3 = Math.ceil(maxValue * 0.6);
  const q4 = Math.ceil(maxValue * 0.8);
  return [0, q1, q2, q3, q4];
}

function bucketIndex(value: number, buckets: number[]) {
  if (value <= 0) return 0;
  if (value <= buckets[1]) return 1;
  if (value <= buckets[2]) return 2;
  if (value <= buckets[3]) return 3;
  return 4;
}

export function UsageHeatmap({ days, className, title }: UsageHeatmapProps) {
  const [hoveredData, setHoveredData] = useState<{
    date: string;
    tokens: number;
  } | null>(null);

  const { weeks, monthLabels, max } = useMemo(() => {
    const today = new Date();
    // Use subWeeks(52) to get ~1 year history
    const end = endOfWeek(today, { weekStartsOn: 0 }); 
    const start = startOfWeek(subWeeks(today, 52), { weekStartsOn: 0 });

    // Generate all days
    const allDays = eachDayOfInterval({ start, end });

    // Map values
    const valueMap = new Map<string, number>();
    let maxVal = 0;
    days.forEach((d) => {
      if (d.date) {
        const dateStr = d.date.split("T")[0];
        valueMap.set(dateStr, d.totalTokens);
        if (d.totalTokens > maxVal) maxVal = d.totalTokens;
      }
    });

    // Group by week
    const weeksData: Array<Array<{ date: Date; value: number }>> = [];
    let currentWeek: Array<{ date: Date; value: number }> = [];

    allDays.forEach((day) => {
      const dateStr = format(day, "yyyy-MM-dd");
      const val = valueMap.get(dateStr) || 0;
      currentWeek.push({ date: day, value: val });

      if (currentWeek.length === 7) {
        weeksData.push(currentWeek);
        currentWeek = [];
      }
    });

    if (currentWeek.length > 0) {
      weeksData.push(currentWeek);
    }

    // Calculate month labels
    const labels: Array<{ label: string; weekIndex: number }> = [];
    weeksData.forEach((week, index) => {
      const firstDay = week[0].date;
      const hasFirstOfMonth = week.some(d => getDate(d.date) === 1);
      
      if (hasFirstOfMonth) {
         const d = week.find(d => getDate(d.date) === 1)?.date || firstDay;
         const monthName = format(d, "MMM");
         if (labels.length === 0 || labels[labels.length - 1].label !== monthName) {
            labels.push({ label: monthName, weekIndex: index });
         }
      }
    });
    
    if (labels.length === 0 && weeksData.length > 0) {
        labels.push({ label: format(weeksData[0][0].date, "MMM"), weekIndex: 0 });
    }

    return { weeks: weeksData, monthLabels: labels, max: maxVal };
  }, [days]);

  const buckets = useMemo(() => getBuckets(max), [max]);

  const getColor = (value: number) => {
    const idx = bucketIndex(value, buckets);
    switch (idx) {
      case 0:
        return "bg-[#ebedf0] dark:bg-neutral-800"; // GitHub light empty color
      case 1:
        return "bg-[#9be9a8] dark:bg-[#0e4429]";
      case 2:
        return "bg-[#40c463] dark:bg-[#006d32]";
      case 3:
        return "bg-[#30a14e] dark:bg-[#26a641]";
      case 4:
      default:
        return "bg-[#216e39] dark:bg-[#39d353]";
    }
  };

  return (
    <div className={cn("w-full", className)}>
      {title && <div className="mb-4 text-sm font-medium text-muted-foreground">{title}</div>}
      
      <div className="flex flex-col gap-1 w-full">
        {/* Months Header */}
        <div className="flex text-xs text-muted-foreground mb-1 relative h-4 w-full pl-[28px]">
            {monthLabels.map((m, i) => (
                <div 
                    key={i} 
                    className="absolute top-0"
                    style={{ left: `calc(${m.weekIndex / weeks.length * 100}% + 28px)` }}
                >
                    {m.label}
                </div>
            ))}
        </div>

        <div className="flex gap-2 w-full">
            {/* Day Labels (Mon/Wed/Fri) */}
            <div className="flex flex-col justify-between py-[2px] text-[10px] text-muted-foreground w-[20px] shrink-0 h-auto">
                <span className="invisible">Sun</span>
                <span>Mon</span>
                <span className="invisible">Tue</span>
                <span>Wed</span>
                <span className="invisible">Thu</span>
                <span>Fri</span>
                <span className="invisible">Sat</span>
            </div>

            {/* The Grid */}
            <div 
              className="grid gap-[2px] w-full" 
              style={{ gridTemplateColumns: `repeat(${weeks.length}, 1fr)` }}
            >
                {weeks.map((week, i) => (
                <div key={i} className="flex flex-col gap-[2px] h-full justify-between">
                    {week.map((day, j) => {
                        const dateStr = format(day.date, "yyyy-MM-dd");
                        return (
                            <div
                                key={dateStr}
                                className={cn(
                                    "w-full aspect-square rounded-[2px] transition-colors",
                                    getColor(day.value)
                                )}
                                onMouseEnter={() => setHoveredData({ date: dateStr, tokens: day.value })}
                                onMouseLeave={() => setHoveredData(null)}
                                title={`${dateStr}: ${day.value} tokens`}
                            />
                        );
                    })}
                </div>
                ))}
            </div>
        </div>

        {/* Legend and Hover Info */}
        <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground pl-[28px]">
           <div className="min-h-[20px]">
              {hoveredData ? (
                  <div className="flex items-center gap-2 text-sm">
                      <span className="text-muted-foreground">
                        {format(new Date(hoveredData.date), "MMM do, yyyy")}
                      </span>
                      <span className="font-mono font-medium text-foreground">
                        {hoveredData.tokens.toLocaleString()} tokens
                      </span>
                  </div>
              ) : (
                  <span className="opacity-0 text-sm">Hover for details</span>
              )}
           </div>

           <div className="flex items-center gap-2">
            <span>Less</span>
            <div className="flex items-center gap-[2px]">
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[#ebedf0] dark:bg-neutral-800" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[#9be9a8] dark:bg-[#0e4429]" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[#40c463] dark:bg-[#006d32]" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[#30a14e] dark:bg-[#26a641]" />
                <div className="h-[10px] w-[10px] rounded-[2px] bg-[#216e39] dark:bg-[#39d353]" />
            </div>
            <span>More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
