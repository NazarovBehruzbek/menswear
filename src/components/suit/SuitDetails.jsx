import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import 'swiper/css';
import 'swiper/css/thumbs';
import { useParams } from "react-router-dom";
import axios from 'axios';
import { CartStore } from "../../store/CartStore";
import { API } from "../../api/API";

export default function SuitDetails() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [loading, setLoading] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [selectedSuit, setSelectedSuit] = useState(null);
    const { addToCart, cartItems } = CartStore();
    const { id } = useParams();

    const decrement = () => quantity > 1 && setQuantity(q => q - 1);
    const increment = () => setQuantity(q => q + 1);

    useEffect(() => {
        const fetchSuit = async () => {
            if (!id) return;
            setLoading(true);
            try {
                const response = await API.get(`/product/${id}`);
                setSelectedSuit(response.data.data);
            } catch (err) {
                console.error("❌ Fetch error:", err.response?.data || err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSuit();
    }, [id]);

    if (loading) return <div className="text-center p-6">Loading...</div>;
    if (!selectedSuit) return <div className="text-center text-red-500 p-6">No product found.</div>;

    const {
        title_en,
        price,
        description_en,
        images,
        min_sell,
        sizes
    } = selectedSuit;
    console.log(cartItems);

    return (
        <div className="flex flex-col px-4 py-6">
            <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 max-w-screen-xl mx-auto">

                {/* Image Slider */}
                <div className="flex flex-col items-center gap-2 w-full md:w-1/2">
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[Thumbs]}
                        className="w-full sm:w-[300px] md:w-[400px] h-[400px] sm:h-[450px] md:h-[500px] rounded-lg overflow-hidden"
                    >
                        {images?.length > 0 ? images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={`https://testaoron.limsa.uz/${src}`}
                                    alt={`suit-${i}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </SwiperSlide>
                        )) : (
                            <SwiperSlide><p>No images available</p></SwiperSlide>
                        )}
                    </Swiper>

                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[Thumbs]}
                        className="w-full sm:w-[300px] md:w-[400px] h-[70px]"
                    >
                        {images?.length > 0 ? images.map((src, i) => (
                            <SwiperSlide key={i}>
                                <img
                                    src={`https://testaoron.limsa.uz/${src}`}
                                    alt={`thumb-${i}`}
                                    className="w-full h-full object-cover cursor-pointer rounded hover:opacity-75 transition duration-200"
                                />
                            </SwiperSlide>
                        )) : null}
                    </Swiper>

                    <style>{`
                        .swiper-slide-thumb-active img {
                            border: 2px solid black;
                            border-radius: 0.375rem;
                        }
                    `}</style>
                </div>

                {/* Details Section */}
                <div className="flex flex-col gap-4 w-full md:w-1/2 mt-6 md:mt-0">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800">
                        {title_en}
                    </h1>
                    <h2 className="text-lg md:text-xl font-bold text-gray-800">${price}</h2>

                    <div
                        className="text-gray-600 text-sm md:text-base leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description_en || "<p>No description available</p>" }}
                    />

                    <div className="mt-2">
                        <label className="block text-sm font-medium mb-1">Quantity</label>
                        <div className="flex items-center border border-gray-300 rounded-md w-[90px] px-2">
                            <button onClick={decrement} className="text-lg text-gray-600 hover:text-black">–</button>
                            <span className="px-3 text-lg">{quantity}</span>
                            <button onClick={increment} className="text-lg text-gray-600 hover:text-black">+</button>
                        </div>
                    </div>

                    <p className="text-sm text-gray-600 mt-2">Min Order: {min_sell} suits</p>
                    {sizes?.length > 0 && (
                        <p className="text-sm text-gray-600">Available sizes: {sizes[0].size}</p>
                    )}

                    <button className="mt-4 bg-gray-800 text-white py-2 rounded-md hover:bg-gray-600 transition duration-300"
                        onClick={() => {
                            const cartItem = {
                                id: selectedSuit.id,
                                title: selectedSuit.title_en,
                                price: selectedSuit.price,
                                image: selectedSuit.images?.[0],
                                quantity,
                            };
                            addToCart(cartItem);
                            alert("Item added to cart!");
                        }}

                    >
                        Add to cart
                    </button>
                </div>
            </div>

        </div>


    );
}
