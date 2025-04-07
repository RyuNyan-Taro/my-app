import Image from "next/image";
import styles from "./page.module.css";
import { calculateTax } from "./test_logic/calculate_tax";
import { ChatForm } from "./components/chat/ChatForm";
import { ChatMessage } from "./components/chat/ChatMessage";

export default function Home() {
  const price = 20
  const tax_price = calculateTax(price);

  return (
    <div>
      <h1>Sex and the city</h1>
      <h2>{tax_price} (non Tax: {price})</h2>
      <ChatForm/>
      <ChatMessage/>
    </div>
  );
}
