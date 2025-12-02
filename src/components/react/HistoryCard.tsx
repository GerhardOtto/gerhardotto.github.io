import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { format } from "date-fns";
import {
  Building,
  CalendarDays,
  ChevronDown,
  ChevronUp,
  Cog,
} from "lucide-react";
import React, { useState } from "react";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";

type Props = {
  title: string;
  subTitle?: string;
  location: string;
  content: string;
  startDate: string;
  endDate?: string;
};

export const HistoryCard: React.FC<Props> = ({
  title,
  subTitle,
  location,
  content,
  startDate,
  endDate,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasCollapsibleContent = content;

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between gap-2">
            <CardTitle>
              <Badge className="bg-secondary text-black">{title}</Badge>
            </CardTitle>
            {hasCollapsibleContent && (
              <CollapsibleTrigger asChild>
                <Button className="p-1 ">
                  {isOpen ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </CollapsibleTrigger>
            )}
          </div>
          <CardDescription className="flex flex-col text-foreground">
            {subTitle && (
              <div className="flex gap-2 items-center">
                <Cog className="w-4 h-4" />
                {subTitle}
              </div>
            )}
            {location && (
              <div className="flex gap-2 items-center">
                <Building className="w-4 h-4" />
                {location}
              </div>
            )}
          </CardDescription>
        </CardHeader>
        {content && (
          <CollapsibleContent>
            <CardContent>
              <div
                className="prose  max-w-none text-foreground"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </CardContent>
          </CollapsibleContent>
        )}
        <CardFooter className="text-sm text-foreground">
          {endDate && endDate === startDate ? (
            <div className="flex gap-2 items-center">
              <CalendarDays className="w-4 h-4" />
              {format(new Date(startDate), "d MMMM yyyy")}
            </div>
          ) : endDate ? (
            <div className="flex gap-2 items-center">
              <CalendarDays className="w-4 h-4" />
              {format(new Date(startDate), "MMMM yyyy")} to{" "}
              {format(new Date(endDate), "MMMM yyyy")}
            </div>
          ) : (
            <div className="flex gap-2 items-center">
              <CalendarDays className="w-4 h-4" />
              {format(new Date(startDate), "MMMM yyyy")}
            </div>
          )}
        </CardFooter>
      </Card>
    </Collapsible>
  );
};
