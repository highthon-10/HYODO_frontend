import { style } from "@vanilla-extract/css";

export const container = style({
  width: "100%",
  height: "100vh",
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

export const names = style({
  display: "flex",
  gap: "8px",
  justifyContent: "flex-end",
});

export const selectedName = style({
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
});

export const unselectedName = style({
  color: "gray",
  cursor: "pointer",
});

export const pastDiariesContainer = style({
  marginTop: "20px",
  width: "100%",
});

export const diaryItem = style({
  background: "#f5f5f5",
  padding: "15px",
  marginBottom: "10px",
  borderRadius: "8px",
});

export const diaryDate = style({
  fontSize: "18px",
  color: "#666",
  marginBottom: "5px",
});

export const diaryPreview = style({
  fontSize: "16px",
  color: "#333",
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
});
