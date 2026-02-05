import React from "react";
import img1 from './TrendingNowImages/DropshoulderShirt1.webp'
import img2 from './TrendingNowImages/img1.webp'
import img3 from './TrendingNowImages/PrintedRedShirt.webp'
import img4 from './TrendingNowImages/PrintedBlueShirt.webp'
import img5 from './TrendingNowImages/LinenBlendShirt.webp'
import img6 from './TrendingNowImages/OversizedShirt.webp'
const BestOffersOffcanvas = () => {

    const offcanvasitems = [
        {
            img: img1,
            title: "Bare Branch Embroidery Dropshoulder Shirt – Black",
            oldprice: "₹1,499",
            newprice: 799,
        },
        {
            img: img2,
            title: "Bare Branch Embroidery Dropshoulder Shirt – White",
            oldprice: "₹1,499",
            newprice: 799,
        },
        {
            img: img4,
            title: "Vintage Rose Garden Printed Shirt Blue",
            oldprice: "₹1,499",
            newprice: 799,
        },
        {
            img: img3,
            title: "Vintage Rose Garden Printed Shirtp-Brick Red",
            oldprice: "₹1,499",
            newprice: 799,
        },
        {
            img: img5,
            title: "Mono-Leaf Embroidery Linen-Blend Shirt",
            oldprice: "₹1,499",
            newprice: 899,
        },
        {
            img: img6,
            title: "Bare Branch Embroidery Dropshoulder Shirt – White",
            oldprice: "₹1,499",
            newprice: 999,
        }
        
    ];

    return (
        <div
            className="offcanvas offcanvas-end"
            id="bestoffer"
        >
            <div className="offcanvas-header">
                <h5 className="offcanvas-title fw-bold">
                    Sales Products
                </h5>
                <button
                    type="button"
                    data-bs-dismiss="offcanvas"
                    className="btn btn-close"
                >
                </button>
            </div>

            <div className="offcanvas-body">
                {

                    offcanvasitems.map((item, index) => (
                        <div className="d-flex mt-3 py-2" key={index}>
                            <img src={item.img} className="img-fluid" width="80" />
                            <div>
                                <p className="m-2 fw-semibold">{item.title}</p>
                                <span className="text-muted text-decoration-line-through ms-2">
                                    {item.oldprice}
                                </span>
                                <span className="fw-bold text-danger ms-1">
                                    ₹{item.newprice}
                                </span>
                            </div>
                        </div>
                    ))

                }
            </div>
        </div>
    );
};

export default BestOffersOffcanvas;
