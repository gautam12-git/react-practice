import React from "react";
import useTheme from "./contexts/theme";

function ThemeBtn() {
  const { themeMode, lightMode, darkMode } = useTheme();

  const onChangeBtn = () => {
    if (themeMode === "light") {
      darkMode();
    } else {
      lightMode();
    }
  };
return (
  <label className="relative inline-flex items-center cursor-pointer">
  <input
    type="checkbox"
    className="sr-only peer"
    checked={themeMode === 'dark'}   
    onChange={onChangeBtn}
  />
  <div className="w-11 h-6 bg-gray-300 peer-checked:bg-gray-700 rounded-full transition-colors"></div>
  <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow
                  transition-transform peer-checked:translate-x-5"></div>
</label>
)}
export default ThemeBtn