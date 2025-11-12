// const App = () => {
//   return <h1>Hello From App Component</h1>
// }

// export default App;
/**
 * 

 React Element 
export const Heading = (<div id="Contaner">
                    <h1>Heading Tag-1 From the React Element</h1>
                    <h1>Heading tag-2 from the React Element</h1>
               </div>)

Component 
export const App = () => {
         return (<div>
          <h1>Heading tag-1 from Component</h1>
          <h1>Heading tag-2 from component</h1>
         </div>)
} 

export const App = (user) => {
         return (<div>
          <h1>Username: {user}r</h1>
          
         </div>)
} 

 */


/**
 * 
 
 const Heading = (<div>
                    <h1>Heading Tag-1 From the React Element</h1>
                    <h1>Heading tag-2 from the React Element</h1>
               </div>)



 const App = () => (
                <div id="parent">
                     <h1>Heading From- App Components</h1>
                     {Heading}
             </div>);
 
export default App;
*/

/**
 * 
 




const Heading = () => (  
                    <div>
                    <h1>Heading Tag-1 From the React Element</h1>
                    <h1>Heading tag-2 from the React Element</h1>
                 
               </div>);


const App = () => (
                <div id="parent">
                    <Heading></Heading>
                    <Heading></Heading>
                    <Heading></Heading>
                     <h1>Heading From- App Components</h1>
                     
             </div>);

 
 
export default App;

*/

import React from "react";
import Header from "./components/Header";

const App = () => {
     return <div>
         <Header/>
     </div>
};

export default App;


