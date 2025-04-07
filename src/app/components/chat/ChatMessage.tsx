import Image from "next/image";

export default function ChatMessage() {

    const ChatBubble = ({
            text,
            sender = "partner",
            }: {
                text: string;
                sender?: "partner" | "me";
            }) => {
            const isLeft = sender === "partner";
            return (
                <div
                    style={{
                    display: "flex",
                    gap: 10,
                    justifyContent: isLeft ? "flex-start" : "flex-end",
                    marginTop: 20,
                    }}
                >
                {isLeft && (
                    <Image
                        src="https://doodleipsum.com/700/avatar-2?i=0639d368201785f32891763286f61ca0"
                        alt="相手のアイコン"
                        width={40}
                        height={40}
                    />
                )}
                <div
                    style={{
                        padding: "10px 20px",
                        marginTop: 5,
                        background: isLeft ? "#fff" : "#006BD6",
                        borderRadius: 10,
                        lineHeight: 1.5,
                        height: "fit-content",
                        color: isLeft ? "#000" : "#fff",
                        maxWidth: "70%",
                    }}
                >
                    {text}
                </div>
                </div>
            );
        };
    return (
        <div style={{ padding: "30px 20 px", height: "100%"}}>
            <ChatBubble 
                text="こんにちは"
                sender="partner"
            />
            <ChatBubble 
                text="こんにちは"
                sender="me"
            />
        </div>
    );
}