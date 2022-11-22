import TitleWithButton from "../library/titleWithButton";
import WrapperWithNavber from "../library/wraperWithNavber";
import { AiOutlinePlus } from 'react-icons/ai';
import TableWrapper from "../library/tableWrapper";
import DivWrepper from "../library/divWrepper";
import TableSearch from "../library/tableSearch";
import ProductTd from "../componnents/productList/productTd";
import ProductTh from "../componnents/productList/productTh";

const image = "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

const Product = [
    {
        name:"Mouse",
        status: 'out of stock',
        price: 400,
        category: 'computer',
        image: "https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
    },
    {
        name:"Pen",
        status: '100 in stock',
        price: 10,
        category: 'Education',
        image: {image}
    },
    {
        name:"Laptop",
        status: '2 in stock',
        price: 40000,
        category: 'computer',
        image: {image}
    },
    {
        name:"Air Phon",
        status: 'out of stock',
        price: 400,
        category: 'computer',
        image: {image}
    },
    {
        name:"Table",
        status: '27 in stock',
        price: 2800,
        category: 'house',
        image: {image}
    },
    {
        name:"Book",
        status: '40 in stock',
        price: 300,
        category: 'education',
        image: {image}
    },
    {
        name:"Bag",
        status: 'out of stock',
        price: 700,
        category: 'education',
        image: {image}
    },
    {
        name:"Peper",
        status: '55 in stock',
        price: 25,
        category: 'house',
        image: {image}
    },
    {
        name:"TWS",
        status: 'out of stock',
        price: 5000,
        category: 'education',
        image: {image}
    },
]


export default function ProductList(){

    return(
        <WrapperWithNavber>
            <TitleWithButton 
                                title="Products"
                                btntext="Update"
                                btnicon={AiOutlinePlus}
            />

            <DivWrepper>
                <TableSearch />

                <TableWrapper>
                    <ProductTh />

                    {Product.map((item)=>(
                        
                        <ProductTd 
                                    productName={item.name}
                                    price={item.price}
                                    status={item.status}
                                    category={item.category}
                                    image={item.image}
                        />
                    ))}
                </TableWrapper>
            </DivWrepper>
        </WrapperWithNavber>
    )
}