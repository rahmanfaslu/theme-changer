import { useState } from "react";
 
function App() {
   const [theme,setTheme]=useState('light') ;

   const themechanger =()=>{
    if(theme ==='dark'){
      setTheme('light');
    }else{
      setTheme('dark')
    }
   };

  return (
    <>
    <div className="body">
    <div className= {theme === 'dark' ? 'body dark' : 'body light'} >
      <h1 >theme changer</h1>
      <p> press the button for change the theme </p>
      <button onClick={themechanger}>
        click to change theme
      </button>
    </div>
    </div>
    </>
  )
}

export default App;
