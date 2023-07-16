import Icon from '../icons/Icon';
import product1 from '../../assets/images/image-product-1.jpg';
import product2 from '../../assets/images/image-product-2.jpg';
import product3 from '../../assets/images/image-product-3.jpg';
import product4 from '../../assets/images/image-product-4.jpg';
function Products(props) {
    return (
        <div className="product-holder flex">
            <div onClick={props.onClick} className={`slide-container flex ${props.currentSlide === 1 ? 'current-slide' : ''}`}>
                <Icon src={product1} id="product-one" alt="Sneaker" title="Sneaker" />
            </div>
            <div onClick={props.onClick} className={`slide-container flex ${props.currentSlide === 2 ? 'current-slide' : ''}`}>
                <Icon src={product2} id="product-two" alt="Sneaker" title="Sneaker" />
            </div>
            <div onClick={props.onClick} className={`slide-container flex ${props.currentSlide === 3 ? 'current-slide' : ''}`}>
                <Icon src={product3} id="product-three" alt="Sneaker" title="Sneaker" />
            </div>
            <div onClick={props.onClick} className={`slide-container flex ${props.currentSlide === 4 ? 'current-slide' : ''}`}>
                <Icon src={product4} id="product-four" alt="Sneaker" title="Sneaker" />
            </div>
        </div>
    );
}

export default Products;