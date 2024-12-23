import classes from './MainNavigation.module.css';
import Link from 'next/link';
import {useContext } from 'react';
import GlobalContext from '../../pages/store/globalContext';

function MainNavigation() {
    const globalCtx = useContext(GlobalContext);


    return (
        <header className={classes.header}>
            <div className={classes.logo}>MindFlux</div>
            <nav>
                <ul>
                    <li>
                        <Link href='/getMeetings'>All Users</Link>
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