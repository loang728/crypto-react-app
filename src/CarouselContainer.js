import './CarouselContainer.css' //will be added later
import { useState, useEffect } from 'react';

const CarouselContainer = (props) => {
    const { children } = props
    const [currentIndex, setCurrentIndex] = useState(0)
    const [length, setLength] = useState(children.length)
   
    // Set the length to match current children from props
    useEffect(() => {
        setLength(children.length)
    }, [children])
    // ...
   
    const next = () => {
        if (currentIndex < (length - 1)) {
            setCurrentIndex(prevState => prevState + 1)
        }
    }

    const prev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(prevState => prevState - 1)
        }
    }

    return (
        <div className="carousel_wrapper">
            <h3>Event Gallery</h3>
            <div className="carousel-container">
              
                    <button onClick={prev} className="left-arrow">
                        &lt;
                    </button>
                    
                        <div className="carousel-content"
                            style={{ transform: `translateX(-${currentIndex * 100}px)` }}
                        >
                            {children}
                        </div>


                    
                    <button onClick={next} className="right-arrow">
                        &gt;
                    </button>
            
            </div>
        </div>
    )
}

export default CarouselContainer