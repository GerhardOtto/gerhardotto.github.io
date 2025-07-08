import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Props = {
  title: React.ReactNode;
  description: React.ReactNode;
  content: React.ReactNode;
  startDate: React.ReactNode;
  endDate: React.ReactNode;
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
        <div>{startDate}</div>
        <div>{endDate}</div>
      </CardFooter>
    </Card>
  );
};
