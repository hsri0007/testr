"use client";
import { useEffect, useState } from "react";



export default function Home() {
  const [isMounted, setIsMounted] = useState(false);
  return (
    <>
      {!isMounted && <PreventRefresh />}
      {isMounted && <h1>
        <button>click</button>
      </h1>}
      <button onClick={() => {
        setIsMounted((prev) => !prev);
      }} >click{JSON.stringify(isMounted)}</button>
    </>
  )
}
function PreventRefresh() {
  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault();
      event.returnValue = ""; // Required for some browsers to show the confirmation dialog
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return "hello";
}

