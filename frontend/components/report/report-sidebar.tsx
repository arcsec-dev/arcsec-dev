"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const sections = [
  {
    id: "executive-summary",
    label: "Executive Summary",
  },
  {
    id: "report-information",
    label: "Report Information",
  },
  {
    id: "project-information",
    label: "Project Information",
  },
  {
    id: "risk-breakdown",
    label: "Risk Breakdown",
  },
  {
    id: "findings-summary",
    label: "Findings Summary",
  },
  {
    id: "recommendations",
    label: "Recommendations",
  },
  {
    id: "security-findings",
    label: "Security Findings",
  },
];

export function ReportSidebar() {
  return (
    <Card className="sticky top-8 hidden h-fit lg:block">
      <CardHeader>
        <CardTitle className="text-xl">Report</CardTitle>
      </CardHeader>

      <CardContent>
        <nav className="space-y-2">
          {sections.map((section) => (
            <Button
              key={section.id}
              type="button"
              variant="ghost"
              className="w-full justify-start"
              onClick={() =>
                document.getElementById(section.id)?.scrollIntoView({
                  behavior: "smooth",
                })
              }
            >
              {section.label}
            </Button>
          ))}
        </nav>
      </CardContent>
    </Card>
  );
}
