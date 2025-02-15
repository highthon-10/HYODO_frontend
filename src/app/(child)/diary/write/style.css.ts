import { style } from "@vanilla-extract/css";

export const container = style({
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
});

export const header = style({
  display: "flex",
  padding: "10px 20px",
  alignItems: "center",
});

export const headerTitle = style({
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  fontSize: "18px",
});

export const todayText = style({
  fontSize: "20px",
  color: "#3B3B3B",
  fontWeight: "400",
});

export const inputBox = style({
  display: "flex",
  flexDirection: "column",
});

export const label = style({
  color: "#3B3B3B",
  fontSize: "16px",
  fontWeight: "400",
});

export const input = style({
  padding: "15px 10px",
  borderRadius: "10px",
  border: "1px solid #625D5B",
  outline: "none",
  fontSize: "16px",
  "::placeholder": {
    color: "#A1A1A1",
  },
  color: "#3B3B3B",
});

export const textarea = style({
  padding: "15px 10px",
  borderRadius: "10px",
  border: "1px solid #625D5B",
  height: "500px",
  outline: "none",
  fontSize: "16px",
  "::placeholder": {
    color: "#A1A1A1",
  },
  color: "#3B3B3B",
  resize: "none",
});

export const successButton = style({
  width: "100%",
  marginTop: "20px",
  borderRadius: "10px",
  background: "#E9E8E7",
  border: "none",
  padding: "16px 20px",
  fontSize: "18px",
  color: "#625D5B",
});
