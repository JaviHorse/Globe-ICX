"use client";

import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function UserTracker() {
    const { data: session, status } = useSession();

    useEffect(() => {
        // Only run if authenticated and not already logged this session
        if (status === "authenticated" && session?.user?.email) {
            const hasLoggedVisit = sessionStorage.getItem("icx_visit_logged");

            if (!hasLoggedVisit) {
                fetch("/api/visit", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                })
                    .then((res) => {
                        if (res.ok) {
                            sessionStorage.setItem("icx_visit_logged", "true");
                        }
                    })
                    .catch((err) => console.error("Failed to log visit:", err));
            }
        }
    }, [status, session]);

    return null; // Invisible component
}
