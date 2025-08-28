import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import React from "react";

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
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription className="flex flex-col">
          {subTitle && <div>{subTitle}</div>}
          {location && <div>{"@ " + location}</div>}
        </CardDescription>
      </CardHeader>
      {content && (
        <CardContent>
          <div className="prose prose-gray max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: content }} />
        </CardContent>
      )}
      <CardFooter>
        {endDate ? (
          <div className="text-sm text-gray-400">
            From: {format(new Date(startDate), "MMMM yyyy")} to{" "}
            {format(new Date(endDate), "MMMM yyyy")}
          </div>
        ) : (
          <div className="text-sm text-gray-400">
            From: {format(new Date(startDate), "MMMM yyyy")}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};
