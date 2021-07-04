import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../../logoHenry.png';
import styles from './NavBar.module.css';

export default function NavBar() {
	return (
		<nav className = {styles.container}>
			<div>
				<img className = {styles.logoHenry} src={Logo} alt="" />
			</div>
			<div className = {styles.links}>
				<NavLink exact to="/" className = {styles.link}> Home </NavLink>
				<NavLink to="/favs" className = {styles.link}> Favs </NavLink>
			</div>
		</nav>
	)
}