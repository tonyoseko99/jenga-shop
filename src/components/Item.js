import React from "react";
import { useParams } from "react-router-dom";

function Item(){
    const {id} = useParams();
    const [product, setProduct] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(response => setProduct(response))
    }, [id])

}
export default Item;