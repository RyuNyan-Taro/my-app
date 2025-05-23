"use client";

import Image from "next/image";
import { sendMessageAtom } from "@/app/common/store/chat/chat";
import { useEffect, useState } from "react";
import { useAtom } from "jotai";

type ChatMessage = {
  id: number;
  role: string;
  message: string;
};

export const ChatMessage: React.FC = () => {
  const [inputMessage, setInputMessage] = useState<ChatMessage[]>([]);
  const [sender, setSender] = useAtom(sendMessageAtom);

  useEffect(() => {
    const getMessage = async () => {
      try {
        const response = await fetch("/api/chat", {
          method: "GET",
        });

        const data = await response.json();
        setInputMessage(data);
      } catch (err) {
        console.error(err);
      }
    };

    getMessage();
    setSender(false);
  }, [sender, setSender]);

  return (
    <div style={{ padding: "30px 20px", height: "100%" }}>
      {inputMessage &&
        inputMessage.map((post, index) => (
          <div key={index}>
            {post.role === "user" && (
              <div
                style={{
                  display: "flex",
                  gap: 10,
                  justifyContent: "flex-end",
                  marginTop: 20,
                }}
              >
                <div
                  style={{
                    padding: "10px 20px",
                    marginTop: 5,
                    background: "#006BD6",
                    borderRadius: 10,
                    lineHeight: 1.5,
                    height: "fit-content",
                    color: "white",
                  }}
                >
                  {post.message}
                </div>
              </div>
            )}
            {post.role === "bot" && (
              <div style={{ display: "flex", gap: 10 }}>
                {/* サイトからダミー画像を取得 */}
                <Image
                  src="https://doodleipsum.com/700/avatar-2?i=0639d368201785f32891763286f61ca0"
                  alt=""
                  width={50}
                  height={50}
                />
                <div
                  style={{
                    padding: "10px 20px",
                    marginTop: 5,
                    background: "#fff",
                    borderRadius: 10,
                    lineHeight: 1.5,
                    height: "fit-content",
                  }}
                >
                  {post.message}
                </div>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};
