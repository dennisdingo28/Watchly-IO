"use client";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./Header";

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
}

export const CardWrapper = ({
  children,
  headerLabel,
}: CardWrapperProps) => {
  return (
    <Card className="w-[400px] shadow-md">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  );
};