"use client";
import { BoardT } from "@/app/types";
import { Card, CardBody, user } from "@nextui-org/react";
import { useRouter } from "next/navigation";

export const BoardList = ({ boards }: { boards: BoardT[] }) => {
  const router = useRouter();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
      {boards.length &&
        boards.map((b) => (
          <Card
            key={`board_card_${b.id}`}
            isPressable
            onPress={() => {
              router.push(`/boards/${b.id}`);
            }}
          >
            <CardBody>{b.name}</CardBody>
          </Card>
        ))}
    </div>
  );
};
