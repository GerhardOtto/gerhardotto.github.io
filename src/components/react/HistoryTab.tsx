import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { HistoryCard } from "./HistoryCard";
import type React from "react";

type ExperienceContent = {
  title: React.ReactNode;
  description: React.ReactNode;
  content: React.ReactNode;
  startDate: React.ReactNode;
  endDate: React.ReactNode;
};

type EducationContent = {
  title: React.ReactNode;
  description: React.ReactNode;
  content: React.ReactNode;
  startDate: React.ReactNode;
  endDate: React.ReactNode;
};

type Props = {
  exp: ExperienceContent[];
  edu: EducationContent[];
};

export const HistoryTab: React.FC<Props> = ({ exp, edu }) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="experience">
        <TabsList className="w-full">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience">
          {exp.map((item, index) => (
            <HistoryCard
              key={index}
              title={item.title}
              description={item.description}
              content={item.content}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          ))}
        </TabsContent>
        <TabsContent value="education">
          {edu.map((item, index) => (
            <HistoryCard
              key={index}
              title={item.title}
              description={item.description}
              content={item.content}
              startDate={item.startDate}
              endDate={item.endDate}
            />
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
};
