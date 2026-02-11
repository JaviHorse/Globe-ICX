export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    const userEmail =
      session?.user?.email?.toLowerCase().endsWith("@globe.com.ph")
        ? session.user.email
        : "";

    const body = await req.json();

    const seed = String(body?.seed ?? "").trim();
    const questionIndex = Number(body?.questionIndex);
    const questionText = String(body?.questionText ?? "").trim();
    const answerText = String(body?.answerText ?? "").trim();

    if (!seed) return NextResponse.json({ error: "Missing seed" }, { status: 400 });
    if (!Number.isFinite(questionIndex)) return NextResponse.json({ error: "Invalid questionIndex" }, { status: 400 });
    if (!questionText) return NextResponse.json({ error: "Missing questionText" }, { status: 400 });
    if (!answerText) return NextResponse.json({ error: "Missing answerText" }, { status: 400 });

    if (answerText.length > 200) {
      return NextResponse.json({ error: "Answer too long" }, { status: 400 });
    }

    const saved = await prisma.answer.create({
      data: {
        seed,
        questionIndex,
        questionText,
        answerText,
        userEmail,
      },
      select: { id: true, createdAt: true },
    });

    return NextResponse.json({ ok: true, saved }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
