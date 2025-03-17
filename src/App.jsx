import { useState } from "react";
import ProgressBar from "./ProgressBar";

export default function App() {
  const [progress, setProgress] = useState(0);

  function updateProgress() {
    if (progress < 100) setProgress(progress + 10);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "10%",
      }}
    >
      <ProgressBar progress={progress} />
      <button
        style={{
          width: 200,
          height: 40,
          backgroundColor: "#2B4EAF",
          fontWeight: "600",
          color: "white",
          border: 0,
          borderRadius: 8,
        }}
        onClick={updateProgress}
      >
        Increment Progress
      </button>
    </div>
  );
}
