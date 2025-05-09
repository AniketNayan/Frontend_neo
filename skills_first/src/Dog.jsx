import { Greet } from "./Greet";
function DogCart(props){
    return (
<div>
     <h3>{props.name}</h3>    
     <img src={props.image} />
< Greet />    

</div>
    );
}

export default DogCart;
