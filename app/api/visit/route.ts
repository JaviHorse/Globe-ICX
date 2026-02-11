export const runtime = "nodejs";

import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/lib/auth";
import { prisma } from "../../lib/prisma";

export async function POST(req: Request) {
    try {
        const session = await getServerSession(authOptions);

        // Check if user is authenticated and has a globe email
        const userEmail = session?.user?.email?.toLowerCase();
        if (!userEmail || !userEmail.endsWith("@globe.com.ph")) {
            return NextResponse.json({ error: "Unauthorized or invalid domain" }, { status: 401 });
        }

        // Save the visit
        const visit = await prisma.userVisit.create({
            data: {
                userEmail: userEmail,
            },
            select: { id: true, createdAt: true },
        });

        return NextResponse.json({ ok: true, visit }, { status: 201 });
    } catch (e) {
        console.error("Visit log error:", e);
        return NextResponse.json({ error: "Server error" }, { status: 500 });
    }
}
