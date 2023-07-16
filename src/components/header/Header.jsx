import './header.css';
import logo from '../../assets/icons/logo.svg';
import hamburger from '../../assets/icons/icon-menu.svg';
import close from '../../assets/icons/icon-close.svg';
import cart from '../../assets/icons/icon-cart.svg';
import avatar from '../../assets/images/image-avatar.png';
import Icon from '../icons/Icon';
import Link from '../links/Link';
import { useState } from 'react';
import Button from '../buttons/Button';
import thumbnail1 from '../../assets/images/image-product-1-thumbnail.jpg';
import deleteIcon from '../../assets/icons/icon-delete.svg';

function Header(props) {
    const [isClicked, setIsClicked] = useState(false);
    const [isCartClicked, setIsCartClicked] = useState(false);

    function handleClick() {
        document.body.classList.toggle('nav-active');
        setIsClicked(previousValue => {
            return !previousValue
        });
    }

    function handleCartClick() {
        document.body.classList.toggle('nav-active');
        setIsCartClicked(previousValue => {
            return !previousValue
        });
    }

    return (
        <header className="header flex">
            <div className="header__left flex">
                <span onClick={handleClick} className="hamburger">
                    <Icon src={hamburger} id="hamburger" alt="Menu button" title="Menu" />
                </span>
                <div className="logo">
                    <Icon src={logo} id="hamburger" alt="Sneakers logo" title="Sneakers" />
                </div>
            </div>
            <div className={isClicked ? 'nav-container' : 'nav-container invisible'}>
                <nav className={isClicked ? 'navbar flex flex-column show' : 'navbar flex flex-column invisible'}>
                    <span className="close">
                        <Icon onClick={handleClick} src={close} id="close" alt="Close button" title="Close" />
                    </span>
                    <div className="links flex flex-column">
                        <Link href="#collections" id="collections" name="Collections" />
                        <Link href="#men" id="men" name="Men" />
                        <Link href="#womer" id="womer" name="Women" />
                        <Link href="#about" id="about" name="About" />
                        <Link href="#contact" id="contact" name="Contact" />
                    </div>
                </nav>
            </div>

            <div className="header__right flex">
                <div className="cart" >
                    <span className={props.isAdded ? "cart__number" : undefined}>{props.isAdded && props.value}</span>
                    <Icon src={cart} id="cart" alt="Cart button" title="Cart" onClick={handleCartClick} />
                    <div className={isCartClicked ? 'cart__content show' : 'cart__content'}>
                        <h4>Cart</h4>
                        {!props.isAdded ? <div className="cart__empty flex" style={{ justifyContent: "center", height: '143px' }}>
                            <span>Your cart is empty.</span>
                        </div> : <div className="cart__body flex flex-column">
                            <div className="item flex w-100">
                                <div className="cart__img">
                                    <Icon src={thumbnail1} id="thumbnail" alt="Thumbnail" title="Thumbnail" />
                                </div>
                                <div className="item-description flex flex-column">
                                    <h4>Fall Limited Edition Sneakers</h4>
                                    <div className="cart-calculation flex">
                                        <span className="rate">$125.00</span>
                                        <span className='multiply'>x</span>
                                        <span className="quantity">{props.value}</span>
                                        <span className="total">${props.total}.00</span>
                                    </div>
                                </div>
                                <div className="del-img" onClick={props.delete}>
                                    <Icon src={deleteIcon} id="delete" alt="Delete" title="Delete" />
                                </div>
                            </div>
                            <Button id="checkout" name="Checkout" className="w-100" />
                        </div>}

                    </div>
                </div>

                <div className="avatar">
                    <Icon src={avatar} id="avatar" alt="Avatar icon" title="Avatar" />
                </div>
            </div>
        </header>
    );
}

export default Header;