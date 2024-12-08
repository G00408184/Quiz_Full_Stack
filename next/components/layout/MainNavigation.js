import classes from './MainNavigation.module.css';
import Link from 'next/link';
import HamMenu from '../generic/HamMenu';
import Button from '../generic/Button';
import { GiShoppingCart } from 'react-icons/gi';
import { useState, useContext } from 'react';
import GlobalContext from '../../pages/store/globalContext';

function MainNavigation() {
    const [popupToggle, setPopupToggle] = useState(false);
    const globalCtx = useContext(GlobalContext);
    const theCount = globalCtx.theGlobalObject.count;

    function checkoutCallback() {
        console.log('Checkout button clicked');
    }

    function toggleMenuHide() {
        setPopupToggle((prevState) => !prevState);
    }

    return (
        <header className={classes.header}>
            <HamMenu toggleMenuHide={toggleMenuHide} />
            <div className={classes.logo}>MindFlux ({theCount})</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/getMeetings'>All Meetups</Link>
                    </li>
                    <li>
                        <Link href='/quiz'>Quiz</Link>
                    </li>
                    <li>
                        <Link href='/new-meetup'>Add Meetup</Link>
                    </li>
                </ul>
            </nav>
            <Button text1="Checkout" maxWidth="100px" onClickHandler={checkoutCallback} icon={<GiShoppingCart />} />
            <Button text2="Orders" maxWidth="70px" />
        </header>
    );
}

export default MainNavigation;