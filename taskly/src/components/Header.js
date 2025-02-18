import Logo from "../assets/Logo.png"

export const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="logo" />
            <span>Taskly</span>
        </div>
        <div className="themeSelector">
            <span onClick={()=>setTheme("light")} className={theme === "light" ? "light activeTheme":"light"}></span>
            <span onClick={()=>setTheme("medium")} className={theme === "medium" ? "medium activeTheme":"medium"}></span>
            <span onClick={()=>setTheme("dark")} className={theme === "dark" ? "dark activeTheme":"dark"}></span>
            <span onClick={()=>setTheme("gOne")} className={theme === "gOne" ? "gOne activeTheme":"gOne"}></span>
            <span onClick={()=>setTheme("gTwo")} className={theme === "gTwo" ? "gTwo activeTheme":"gTwo"}></span>
            <span onClick={()=>setTheme("gThree")} className={theme === "gThree" ? "gThree activeTheme":"gThree"}></span>
        </div>
    </header>
  )
}
