import classes from './MainNavigation.module.css'
import Link from 'next/link'
import HamMenu from "../generic/HamMenu"
import Button from "../generic/Button"
import { GiShoppingCart } from 'react-icons/gi'
import { useState, useContext } from 'react'
import GlobalContext from "../../pages/store/globalContext"

function MainNavigation() {
  let [popupToggle, setPopupToggle] = useState(false)
  const globalCtx = useContext(GlobalContext)
  let theCount = globalCtx.theGlobalObject.count

  function checkoutCallback() {
  }

  function toggleMenuHide() {
    if (popupToggle == true) {
      setPopupToggle(false)
    } else {
      setPopupToggle(true)
    }
  }

  return (
    <header className={classes.header}>
      <HamMenu toggleMenuHide={() => toggleMenuHide()} />
      <div className={classes.logo}>React Meetups ({theCount})</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>All meetups</Link>
          </li>
          <li>
            <Link href='/new-meetup'>Add New Meetup</Link>
          </li>
        </ul>
      </nav>
      <Button text1="Checkout" maxWidth="100px" onClickHandler={() => checkoutCallback()} icon={<GiShoppingCart />} />
      <Button text2={"Orders"} maxWidth="70px" />
    </header>
  );
}

export default MainNavigation
