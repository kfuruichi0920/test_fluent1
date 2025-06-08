// FluentUI用カスタムテーマ
// FluentUI用カスタムテーマ
import { webLightTheme } from "@fluentui/react-components";

export const myCustomTheme = {
  ...webLightTheme,
  colorBrandBackground: "#0063B1",
  colorNeutralForeground1: "#212121",
  colorNeutralBackground1: "#EFF2FC", // 背景色を追加
  fontFamilyBase: '"Segoe UI", sans-serif',
  fontSizeBase300: "14px",
  borderRadiusMedium: "8px",
  // 必要に応じて追加
};
