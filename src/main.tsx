import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { IncidentParty } from "@/components/incident-party";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found");
}

createRoot(root).render(
  <StrictMode>
    <IncidentParty />
  </StrictMode>,
);
