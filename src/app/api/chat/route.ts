import { NextResponse, NextRequest } from "next/server";

const chatMessages = [
    {
        id: 1,
        role: "bot", 
        message: "こんにちは！",
    },
];

export async function GET() {
    return NextResponse.json(chatMessages)
}

export async function POST(request: NextRequest) {
    const data = await request.json();

    const newMessage = {
        id: chatMessages.length + 1,
        role: data.role || "user",
        message: data.message,
    };

    chatMessages.push(newMessage);

    chatMessages.push({
        id: chatMessages.length + 1,
        role: "bot",
        message: data.message,
    });

    return NextResponse.json(newMessage)

}

