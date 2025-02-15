import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  alignItems: "center",
});

export const image = style({
  padding: "30px",
  borderRadius: "12px",
  background: "none",
  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
});
