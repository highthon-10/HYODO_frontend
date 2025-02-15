import { style } from "@vanilla-extract/css";

export const container = style({
  padding: "20px",
  maxWidth: "600px",
  margin: "0 auto",
});

export const title = style({
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "10px",
});

export const date = style({
  fontSize: "16px",
  color: "grey",
  marginBottom: "20px",
});

export const content = style({
  fontSize: "18px",
  lineHeight: "1.6",
});
