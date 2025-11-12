import { StrictMode } from "react";
import {createRoot} from "react-dom/client";

// import {Heading , App} from "./App";
import App from "./App";
import Heading from "./App";


// jsx => vite => React Element
    // const h1 = <h1>Hello World</h1>

    // Component = Component is a Js Function Which Return JSX.

// createRoot(document.getElementById('root'));
// root.render(h1);

// omponent 

  //  const Header = () => {
  //         return <h1>Hello From Component</h1>
  //  }


   // Component Call => JSX => vite => React Element(JS-Object)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* {Heading}
    {App("Aditya")} */}
    <App/>
  
  </StrictMode>
);
  

