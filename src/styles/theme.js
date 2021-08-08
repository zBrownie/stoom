export function HandlerTheme(theme) {
  let colors = {};

  switch (theme) {
    case "theme2":
      break;

    default:
      colors = {
        secondary: "#de9f43",
        green: "#00a94d",
        blue: "#0099d0",
        blueDark: "#0073bc",
        whiteDark: "#e6e7ef",
        textMedium: "#686b84",
        textDark: "#3e394e",
      };
      break;
  }

  return colors;
}
