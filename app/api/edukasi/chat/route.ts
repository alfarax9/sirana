// // app/api/edukasi/chat/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";
// import qs from "qs";

// // 👇 This tells Next.js: "Yes, this route is dynamic — that's intended"
// export const dynamic = "force-dynamic";

// export async function POST(req: NextRequest) {
//   try {
//     const { message } = await req.json();

//     if (!message || typeof message !== "string") {
//       return NextResponse.json(
//         { error: "Message is required and must be a string." },
//         { status: 400 }
//       );
//     }

//     const ngrokUrl = process.env.NEXT_PUBLIC_NGROK_URL;
//     if (!ngrokUrl) {
//       return NextResponse.json(
//         { error: "Internal server error: NGROK_URL not configured." },
//         { status: 500 }
//       );
//     }

//     const formData = qs.stringify({
//       MessageSid: `SM${Date.now()}`,
//       From: "whatsapp:+628123456789",
//       Body: message,
//       MediaUrl0: "",
//       MediaContentType0: "",
//     });

//     const response = await axios.post(`${ngrokUrl}/webhook/whatsapp`, formData, {
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     });

//     const xmlResponse = response.data;
//     const messageMatch = xmlResponse.match(/<Message[^>]*>(.*?)<\/Message>/);
//     const botReply = messageMatch
//       ? messageMatch[1]
//           .replace(/</g, "<")
//           .replace(/>/g, ">")
//           .replace(/&amp;/g, "&")
//           .trim()
//       : "Terima kasih. Laporan Anda sedang diproses.";

//     return NextResponse.json({ reply: botReply }, { status: 200 });
//   } catch (error: any) {
//     console.error("Error in /api/edukasi/chat:", error);

//     if (error.code === "ECONNREFUSED" || error.message.includes("Connection closed")) {
//       return NextResponse.json(
//         { error: "Layanan darurat sedang tidak tersedia. Coba lagi nanti." },
//         { status: 503 }
//       );
//     }

//     return NextResponse.json(
//       { error: "Terjadi kesalahan saat memproses pesan." },
//       { status: 500 }
//     );
//   }
// }