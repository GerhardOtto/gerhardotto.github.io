import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import type React from "react";
import { HistoryCard } from "./HistoryCard";
import type { HistoryType } from "@/types/HistoryType";

type Props = {
  exp: HistoryType[];
  edu: HistoryType[];
};

export const HistoryTab: React.FC<Props> = ({ exp, edu }) => {
  return (
    <div className="flex w-full flex-col gap-6">
      <Tabs defaultValue="experience">
        <TabsList className="w-full">
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
        </TabsList>
        <TabsContent value="experience" className="flex flex-col gap-5">
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
        <TabsContent value="education" className="flex flex-col gap-5">
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
