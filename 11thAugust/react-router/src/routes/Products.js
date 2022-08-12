import React from "react";
import { Link, Outlet } from "react-router-dom";

const Products = () => {
    return (
        <>
            <nav page="products">
                <Link to='featured-products'>Featured</Link>
                <Link to='new-products'>New</Link>
            </nav>
            <input type="search" placeholder="Search Products"/>
            <Outlet/>
        </>
    )
}

export default Products;