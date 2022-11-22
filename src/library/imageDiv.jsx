import img from "../Images/product.jpg";

export default function ImageDiv(){

    return(
        <div className="p-2">
            <img src={img} alt="category logo" className="rounded-lg w-full" />
        </div>
    )
}