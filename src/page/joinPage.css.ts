import { style } from "@vanilla-extract/css";

export const pageStyle = style({
  padding: "20px 0",
  display: "flex",
  flexDirection: "column",
  gap: "24px",
  minHeight: "80vh",
});

export const headerStyle = style({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

export const header = style({
  display: "flex",
  padding: "10px 20px",
  alignItems: "center",
  position: "relative",
});

export const line = style({
  background: "#5CB4EB",
  width: "100%",
  position: "absolute",
  height: "1px",
  left: 0,
  bottom: -4,
});

export const headerTitle = style({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "18px",
});

export const backButtonStyle = style({
  border: "none",
  background: "none",
  padding: "8px",
  cursor: "pointer",
});

export const titleStyle = style({
  fontSize: "18px",
  fontWeight: "600",
});

export const contentStyle = style({
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  flex: 1,
  justifyContent: "center",
  padding: "20px",
});

export const messageStyle = style({
  fontSize: "18px",
});

export const highlightStyle = style({
  color: "#5CB4EB",
});

export const buttonContainerStyle = style({
  display: "flex",
  gap: "8px",
  justifyContent: "center",
});

export const bottomButtonStyle = style({
  position: "fixed",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "20px",
});
