"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.replace("/gcc");
  }, [router]);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", fontFamily: "sans-serif" }}>
      <p>Redirecting to <a href="/gcc">/gcc</a>...</p>
    </div>
  );
}
