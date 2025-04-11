"use client";
import { useEffect, useRef } from "react";

type Action = "sitting" | "running";

export const CursorFollower = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const spriteRef = useRef<HTMLDivElement>(null);

  const frameWidth = 32;
  const frameHeight = 32;

  useEffect(() => {
    // Initialize positions to top-left corner
    let followerX = 0;
    let followerY = 0;
    // Set initial mouse position to match top-left corner
    let mouseX = frameWidth / 2; // Center of the first frame
    let mouseY = frameHeight; // Bottom of the first frame
    let lastMouseMove = Date.now();
    let currentFrame = 0;
    let currentAction: Action = "sitting";
    let animationFrameId: number;

    const speed = 0.06;
    const runningThreshold = 5;
    const idleTime = 600;
    const runningFrames = 4;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      lastMouseMove = Date.now();
    };

    const updateSprite = () => {
      if (!spriteRef.current) return;

      const row = currentAction === "running" ? 1 : 0;
      const col =
        currentAction === "running" ? Math.round(currentFrame) * frameWidth : 0;

      spriteRef.current.style.backgroundPosition = `-${col}px -${
        row * frameHeight
      }px`;
    };

    const lerp = (start: number, end: number, t: number) =>
      start * (1 - t) + end * t;

    const updatePosition = () => {
      const now = Date.now();
      const timeSinceLastMove = now - lastMouseMove;

      // Calculate target position relative to cursor
      const targetX = mouseX - frameWidth / 2;
      const targetY = mouseY - frameHeight;

      // Apply smooth movement
      followerX = lerp(followerX, targetX, speed);
      followerY = lerp(followerY, targetY, speed);

      const dx = targetX - followerX;
      const dy = targetY - followerY;
      const distance = Math.sqrt(dx * dx + dy * dy);

      const newAction: Action =
        distance > runningThreshold || timeSinceLastMove < idleTime
          ? "running"
          : "sitting";

      if (newAction !== currentAction) {
        currentAction = newAction;
        currentFrame = 0;
        updateSprite();
      }

      if (followerRef.current) {
        followerRef.current.style.transform = `translate(${Math.round(
          followerX
        )}px, ${Math.round(followerY)}px)`;
      }

      animationFrameId = requestAnimationFrame(updatePosition);
    };

    // Set initial position immediately
    if (followerRef.current) {
      followerRef.current.style.transform = "translate(0px, 0px)";
    }

    const frameInterval = setInterval(() => {
      if (currentAction === "running") {
        currentFrame = (currentFrame + 1) % runningFrames;
      }
      updateSprite();
    }, 120);

    document.addEventListener("mousemove", handleMouseMove);
    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      clearInterval(frameInterval);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "32px",
        height: "32px",
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(0, 0)",
        willChange: "transform",
      }}
    >
      <div
        ref={spriteRef}
        style={{
          width: "100%",
          height: "100%",
          backgroundImage: `url("/oneko.gif")`,
          backgroundRepeat: "no-repeat",
          imageRendering: "crisp-edges",
          backgroundPosition: "0px 0px",
        }}
      />
    </div>
  );
};
