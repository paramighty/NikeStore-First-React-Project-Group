
import { useState, useEffect } from 'react';
import "../../../styles/features.css";
import Card from './features-cards';
import ReactSimplyCarousel from 'react-simply-carousel';




function FeaturesCarousel() {
    const [activeSlideIndex, setActiveSlideIndex] = useState(1);
    useEffect(() => {
        setActiveSlideIndex(0);
    }, []);
    return (
        <div className='features-container'>
            <ReactSimplyCarousel
                className="carousel"
                activeSlideIndex={activeSlideIndex}
                onRequestChange={setActiveSlideIndex}
                itemsToShow={3}
                itemsToScroll={1}
                showSlidesBeforeInit={true}
                forwardBtnProps={{
                    className: "Carousel-btn right",
                    children: <span>{`>`}</span>,
                }}
                backwardBtnProps={{
                    className: "Carousel-btn left",
                    children: <span>{`<`}</span>,
                }}

                speed={400}
                easing="linear"
            >
                <Card imageSrc={"Images/Features/Model1.jpg"}></Card>
                <Card imageSrc={"Images/Features/NikeBoot1.jpg"}></Card>
                <Card imageSrc={"Images/Features/NikeBoot2.jpg"}></Card>
                <Card imageSrc={"Images/Features/NikeBoot3.jpg"}></Card>
                

            </ReactSimplyCarousel>
        </div>
    );
}

export default FeaturesCarousel;