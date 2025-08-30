"use client";

import { useEffect, useState } from "react";
import Loading from "./Loading";
import CustomCursor from "./CustomCursor";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading for 1.5s (can be API check, session check, etc.)
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      {/* Custom Cursor */}
      <CustomCursor />
      {children}
    </>
  );
}
