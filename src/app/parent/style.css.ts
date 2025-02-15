import { globalStyle, style } from "@vanilla-extract/css";

export const container = style({
  width: "100vw",
  height: "100vh",
  display: "flex",
  flexDirection: "column",
  padding: "0 20px",
});

export const arrivedDiaryBox = style({
  background: "#5CB4EB",
  height: "max-content",
  borderRadius: "12px",
  padding: "10px 16px",
  display: "flex",
  flexDirection: "column",
});

export const arrivedTitle = style({
  color: "#fff",
  fontSize: "20px",
  fontWeight: 600,
});

export const arrivedTextBlur = style({
  color: "#fff",
  fontSize: "16px",
  filter: "blur(5px)",
  margin: 0,
});

export const goToWrite = style({
  color: "#fff",
  fontSize: "18px",
  textAlign: "right",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  cursor: "pointer",
});

export const watchingHistory = style({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "30px",
  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
  borderRadius: "12px",
  marginTop: "14px",
});

export const pencilButton = style({
  position: "absolute",
  right: 50,
  display: "flex",
  alignItems: "center",
  background: "none",
  border: "none",
  cursor: "pointer",
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
  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
});

export const listContent = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  cursor: "pointer",
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

export const hiddenList = style({
  display: "flex",
  flexWrap: "wrap",
  gap: "20px",
  justifyContent: "center",
  paddingBottom: "20px",
});

export const hiddenMission = style({
  flex: "1 1 40%",
  height: "176px",
  boxShadow: "2px 2px 2px 2px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "20px",
  borderRadius: "12px",
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
