import classes from './MainNavigation.module.css';
import Link from 'next/link';
import { useState, useContext } from 'react';
import GlobalContext from '../../pages/store/globalContext';

function MainNavigation() {
    const [popupToggle, setPopupToggle] = useState(false);
    const globalCtx = useContext(GlobalContext);

    function toggleMenuHide() {
        setPopupToggle((prevState) => !prevState);
    }

    return (
        <header className={classes.header}>
            <div className={classes.logo}>MindFlux</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/getMeetings'>All Meetups</Link>
                    </li>

                    <li>
                        <Link href='/new-meetup'>Add User</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;