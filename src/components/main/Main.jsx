import './main.css';
import { useState } from 'react';
import Button from '../buttons/Button';
import Products from '../products/Products';
import Thumbnails from '../thumbnails/Thumbnails';
import previous from '../../assets/icons/icon-previous.svg';
import next from '../../assets/icons/icon-next.svg';
import plus from '../../assets/icons/icon-plus.svg';
import minus from '../../assets/icons/icon-minus.svg';
import cartWhite from '../../assets/icons/icon-cart-white.svg';

function Main(props) {
    let [currentSlide, setCurrentSlide] = useState(1);
    let [isModalOpen, setIsModalOpen] = useState(false);
    const handleNext = () => {
        setCurrentSlide((prevSlide) => prevSlide < 4 ? prevSlide + 1 : 1);
    };

    const handlePrevious = () => {
        setCurrentSlide((prevSlide) => prevSlide > 1 ? prevSlide - 1 : 4);
    };

    const handleProductClick = () => {
        document.body.classList.toggle('nav-active');
        setIsModalOpen(previousValue => {
            return !previousValue;
        });
    }

    const handleThumbnailClick = (e) => {
        setIsModalOpen(() => {
            const currentThumbnail = parseInt(e.target.dataset.key);
            setCurrentSlide((previousValue) => previousValue && currentThumbnail);
            return isModalOpen = true;
        });
    }

    return (
        <main className="main flex flex-column">
            <section className="display flex w-100">
                <Products currentSlide={currentSlide} onClick={handleProductClick} />
                <Button previous={handlePrevious} src={previous} id="previous" alt="Previous icon" title="Previous" className={currentSlide === 1 ? 'none previous flex' : 'previous flex'} />
                <Button next={handleNext} src={next} id="next" alt="Next icon" title="Next" className={currentSlide === 4 ? 'none next flex' : 'next flex'} />
                <Thumbnails currentSlide={currentSlide} handleThumbnailClick={handleThumbnailClick} />
            </section>

            <section className="content flex flex-column">
                <h6 className='uppercase'>Sneaker Company</h6>
                <h1>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                <section className='price flex w-100'>
                    <div className="discount flex">
                        <span className="price-after-discount">$125.00</span>
                        <span className="discount-percent">50%</span>
                    </div>
                    <div className="actual-cost">
                        $250.00
                    </div>
                </section>
                <footer className='section-footer flex flex-column w-100'>
                    <div className="calculation flex w-100">
                        <Button decrease={props.decrease} src={minus} id="minus" alt="Minus icon" title="Minus" className="minus" />
                        <span className="number">{props.value}</span>
                        <Button increase={props.increase} src={plus} id="plus" alt="Plus icon" title="Plus" className="plus" />
                    </div>
                    <Button add={props.cart} src={cartWhite} id="cart-white" alt="Cart icon" title="Cart" name="Add to cart" className="add-to-cart flex w-100" />
                </footer>
                <div className={isModalOpen ? 'modal-container flex' : 'modal-container none'}>
                    <div className="modal-content flex flex-column w-100">
                        <div onClick={handleProductClick} className="modal-close">
                            <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg>
                        </div>

                        <div className="modal-image-holder w-100">
                            <Products currentSlide={currentSlide} />
                            <button onClick={handlePrevious} className={currentSlide === 1 ? 'none modal-previous flex' : 'modal-previous flex'}>
                                <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                            </button>
                            <button onClick={handleNext} className={currentSlide === 4 ? 'none modal-next flex' : 'modal-next flex'}>
                                <svg className='flex' width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg>
                            </button>
                        </div>

                        <div className="modal-thumbnail-holder w-100">
                            <Thumbnails currentSlide={currentSlide} handleThumbnailClick={handleThumbnailClick} />
                        </div>
                    </div>

                </div>
            </section>
        </main>
    );
}

export default Main;