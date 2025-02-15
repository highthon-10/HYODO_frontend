import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "0 20px",
});

export const blackText = style({
  fontSize: "20px",
  color: "black",
  fontWeight: "normal",
});

globalStyle(`${blackText} span`, {
  color: "#5CB4EB",
});

export const listBox = style({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "10px 12px",
  borderRadius: "12px",
  boxShadow: "2px 4px 4px rgba(0, 0, 0, 0.1)",
});

export const listContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const listText = style({
  fontSize: "18px",
  color: "black",
  fontWeight: 400,
});

export const listCheck = style({
  borderRadius: "5px",
  border: "1px solid #3B3B3B",
  width: "20px",
  height: "20px",
});

export const checked = style({
  borderRadius: "5px",
  width: "20px",
  height: "20px",
  background: "#5CB4EB",
});
