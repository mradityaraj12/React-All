import image from "../assets/logo.jpg";

const Logo = () => {
    return ( <>
          <img 
          src={image}
           alt=""
           style={{width:"80px" , height:"100px" , objectFit:"cover"}}
           />

    </>
    ); 
}

export default Logo;