"use client";

import React, { useEffect, useState } from "react";
import Snowfall from "react-snowfall";

export default function SnowfallBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0, // Behind content but in front of background
        pointerEvents: "none", // Let clicks pass through
      }}>
      <Snowfall
        snowflakeCount={200}
        color="rgba(223, 213, 213, 1)" // Subtle white
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
