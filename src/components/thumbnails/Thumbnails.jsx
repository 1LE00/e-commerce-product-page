import Icon from '../icons/Icon';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import thumbnail2 from '../../assets/images/image-product-2-thumbnail.jpg';
import thumbnail3 from '../../assets/images/image-product-3-thumbnail.jpg';
import thumbnail4 from '../../assets/images/image-product-4-thumbnail.jpg';

function Thumbnails(props) {
    return (
        <section className="thumbnail-holder flex none w-100">
            <div onClick={props.handleThumbnailClick} className={`thumbnail-container w-100 flex ${props.currentSlide === 1 ? 'current-thumbnail' : ''}`} data-key='1'>
                <Icon src={thumbnail1} id="thumbnail-one" alt="Sneaker thumbnail" title="Sneaker thumbnail" keys='1' />
            </div>
            <div onClick={props.handleThumbnailClick} className={`thumbnail-container w-100 flex ${props.currentSlide === 2 ? 'current-thumbnail' : ''}`} data-key='2'>
                <Icon src={thumbnail2} id="thumbnail-two" alt="Sneaker thumbnail" title="Sneaker thumbnail" keys='2' />
            </div>
            <div onClick={props.handleThumbnailClick} className={`thumbnail-container w-100 flex ${props.currentSlide === 3 ? 'current-thumbnail' : ''}`} data-key='3'>
                <Icon src={thumbnail3} id="thumbnail-three" alt="Sneaker thumbnail" title="Sneaker thumbnail" keys='3' />
            </div>
            <div onClick={props.handleThumbnailClick} className={`thumbnail-container w-100 flex ${props.currentSlide === 4 ? 'current-thumbnail' : ''}`} data-key='4'>
                <Icon src={thumbnail4} id="thumbnail-four" alt="Sneaker thumbnail" title="Sneaker thumbnail" keys='4' />
            </div>
        </section>
    );
}

export default Thumbnails;