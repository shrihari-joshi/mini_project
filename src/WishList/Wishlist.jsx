import React, { useState, useEffect } from "react";
import axios from "axios";
import FertilizerItem from "./FertilizerItem.jsx";
import SeedItem from "./SeedItem.jsx";
import PesticideItem from "./PesicideItem.jsx";

const Wishlist = () => {
    const [wishlist, setWishlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Set initial loading state

    useEffect(() => {
        const fetchData = async () => {
            try {
                const userData = localStorage.getItem("currentUser");
                const user = userData ? JSON.parse(userData) : null;
                if (!user) {
                    throw new Error("User data not found in localStorage");
                }

                const response = await axios.get("http://localhost:3500/getWishlist", {
                    params: {
                        username: user.username
                    }
                });

                setWishlist(response.data);
            } catch (error) {
                console.error("Error fetching wishlist:", error.message);
            } finally {
                setIsLoading(false); // Update loading state after data fetch
            }
        };

        fetchData();
    }, []);

    return (
        <div style={{ marginLeft: "300px", marginTop: "30px" }}>
            <h1>Wishlist</h1>
            {isLoading ? (
                <p>Loading wishlist...</p>
            ) : (
                <div>
                    {wishlist.length > 0 ? (
                        <ul>
                            {wishlist.map((wishListItem, index) => (
                                        wishListItem.type === 'seed' ? (
                                            <SeedItem key={index} item={wishListItem} quantity={wishListItem.quantity} />
                                        ) : wishListItem.type === 'fertilizer' ? (
                                            <FertilizerItem key={index} item={wishListItem} quantity={wishListItem.quantity}/>
                                        ) : (
                                            <PesticideItem key={index} item={wishListItem} quantity={wishListItem.quantity}/>
                                        )
                            ))}
                        </ul>
                    ) : (
                        <p>No items in wishlist</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Wishlist;
