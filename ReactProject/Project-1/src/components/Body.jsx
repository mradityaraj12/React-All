
import {useEffect, useState} from "react";
import Card from "./Card";
import {getProducts} from "../services/api"
// import {config} from "../constants/constant";
// import Parent from "./Parent";
import Shimmer from './Shimmer';



// const Body = () => {
//     return <div>
//             <Parent/>
//     </div>
// }

// export default Body;


   const Body = () => {

       
        // const [reactCount,setreactState] = useState([]);
         
        // const handleClick = () => {
             
        //     setreactState(prev => prev + 1);
           
        //     console.log("ReactCount :", reactCount + 1);    
        // }

        const [productList, setProductList] = useState([])

        const load = async () => {
            const product = await getProducts("/api/products");


            setProductList(product);
        }

        useEffect( () =>{
            load()

        } , [] );


        if(productList.length === 0){
            return <Shimmer></Shimmer>
        }
    

    return (

         <div>
            <div className="center-container">
                {/* <div className="btn">
                        <h2>Count: {reactCount} </h2>
                        <button onClick= {handleClick} >Click</button>
                </div> */}

                <div className="card-container">
                     {productList.map((element , index) => {
                    return <Card key={index} item = {element}/>
                })}
            </div>
         </div>
    </div>
    );
};

export default Body;