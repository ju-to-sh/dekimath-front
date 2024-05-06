"use client";
import { StackDivider, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Number = {
  id: number;
  number: number;
};

const Home = () => {
  const [numbers, setNumbers] = useState<Number[]>([]);

  const fetchNumbers = async () => {
    try {
      const response = await fetch(`http://localhost:3001/numbers`, { method: "GET" });
      if (!response.ok) {
        throw new Error("データの取得に失敗しました");
      }
      const data = await response.json();
      setNumbers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchNumbers();
  }, []);

  return (
    <>
      <main>
        <h2>さんすう</h2>
        <VStack
          divider={<StackDivider />}
          borderColor="black.100"
          borderWidth="1px"
          p={5}
        >
          <ul>
            {numbers && numbers.map((number) => (
              <li key={number.id}>{ number.number }</li>
            ))}
          </ul>
        </VStack>
      </main>
    </>
  );
};

export default Home;
