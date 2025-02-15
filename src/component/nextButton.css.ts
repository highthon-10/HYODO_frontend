import { style } from "@vanilla-extract/css";

export const buttonStyle = style({
  width: "100%",
  padding: "16px",
  borderRadius: "8px",
  border: "none",
  fontSize: "16px",
  fontWeight: "500",
  cursor: "pointer",
  backgroundColor: "#000",
  color: "#fff",
  ":disabled": {
    backgroundColor: "#ccc",
    cursor: "not-allowed",
  },
});
