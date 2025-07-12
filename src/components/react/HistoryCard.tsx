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
  description: string;
  content: string;
  startDate: string;
  endDate: string;
};

export const HistoryCard: React.FC<Props> = ({
  title,
  description,
  content,
  startDate,
  endDate,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
      <CardFooter>
        <div className="text-sm text-gray-400">
          From: {format(new Date(startDate), "MMMM yyyy")} to{" "}
          {format(new Date(endDate), "MMMM yyyy")}
        </div>
      </CardFooter>
    </Card>
  );
};
