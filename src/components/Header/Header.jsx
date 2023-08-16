import React, {useRef, useEffect} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import './header.css'
import { Container, Row } from 'reactstrap'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import {motion} from 'framer-motion'
import { useSelector } from 'react-redux'
import useAuth from '../../custom-hooks/useAuth'
import { Link } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase.config'
import { toast } from 'react-toastify';

const nav__link = [
  {
    path:'home',
    display:'Home'
  },
  {
    path:'shop',
    display:'Shop'
  },
  {
    path:'cart',
    display:'Cart'
  },
]

const Header = () => {

  const headerRef = useRef(null)
  const totalQuantity = useSelector((state)=> state.cart.totalQuantity)
  const profileActionRef = useRef(null)

  const menuRef = useRef(null);
  const navigate = useNavigate();
  const {currentUser} = useAuth()

  const stickyHeaderFunc = ()=>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('sticky__header')
      }else{
        headerRef.current.classList.remove('sticky__header')
      }
    });
  };

  const logout =()=>{

    signOut(auth).then(()=>{ 
      toast.success('Logged out')
      navigate('/home')
    }).catch(err=>{
      toast.error(err.message)
    })
  }

  useEffect(()=>{
    stickyHeaderFunc()
    return()=> window.removeEventListener('scroll', stickyHeaderFunc)

  });
  const menuToggle = ()=> menuRef.current.classList.toggle('active__menu')
  
    const navigateToCart = () =>{
      navigate('/cart')
    }

    const toggleProfileActions = ()=> profileActionRef.current.classList.toggle('show__profileActions')

  return(
   <header className="header" ref={headerRef}>
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="logo" />
              <div>
                <h1>Seadurf e-Mart</h1>
              </div>
            </div>
            <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <ul className="menu">
                {nav__link.map((item, index )=>(
                    <li className="nav__item" key={index}>
                      <NavLink
                       to={item.path} className={(navClass)=>
                      navClass.isActive ? "nav__active" : ""
                      }
                      >
                        {item.display}
                        </NavLink>
                    </li>
                  ))
                }
              </ul>
            </div>
            <div className="nav__icons">
              <span className='fav__icon'><i class="ri-heart-line"></i>
              <span className="badge">2</span>
              </span>
              <span className='cart__icons' onClick={navigateToCart}><i class="ri-shopping-bag-line"></i>
              <span className="badge">{totalQuantity}</span>
              </span>
              <div className='profile'>
                < motion.img whileTap={{scale: 1.2}} src={ userIcon} alt="" 
                  
                  />
                  <div className="profile__actions">
                    {
                      currentUser ? <span>Logout</span> : <div>
                        <Link to='/signup'>Signup</Link>
                        <Link to='/login'>Login</Link>
                      </div>
                    }
                  </div>
               
              </div>
                <div className="mobile_menu">
              <span onClick={menuToggle}>
                <i class="ri-menu-line"></i>
              </span>
            </div>
            </div>
          </div>


          
        </Row>
      </Container>
    </header>
    );
  
};

export default Header