import { faBars, faBurger, faCaretDown, faDotCircle, faHamburger, faIdCard, faList, faListNumeric, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/Sidebar.css'
import logo from '../../images/logo2.jpg'

function Sidebar() {
  return (
    <div>
      <div className='wrapper'>
        <div className='sidebar'>
          <div className='logo'>
            <img className='logoTop' src={logo} alt='' />
          </div>
          <div className='menu'>
            <ul>
              <li className='fs-4'>
              <Link to="/bannerManage">
                <FontAwesomeIcon className='icon' icon={faUser} fontSize={30} />
                <span>User</span>
                </Link>
              </li>
              <li className='fs-4'>
              <Link to="/bannerManage">
                <FontAwesomeIcon className='icon' icon={faIdCard} fontSize={30} />
                <span>Lucky number</span>
                </Link>
              </li>
              <li className='fs-4'>
              <Link to="/bannerManage">
                <FontAwesomeIcon className='icon' icon={faList} fontSize={30} />
                <span>List number</span>
                </Link>
              </li>
              <li className='fs-4'>
              <Link to="/bannerManage">
                <FontAwesomeIcon className='icon' icon={faBars} fontSize={30} />
                Manage
                <span><FontAwesomeIcon className='ps-2' icon={faCaretDown} fontSize={20} /></span>
                </Link>
              </li>
              <li className='menuLi'>
                <Link to="/BannerManage">
                  <FontAwesomeIcon className='icon' icon={faDotCircle} fontSize={15} />
                  Home
                </Link>
              </li>
              <li className='menuLi'>
                <Link to="/EventManagement">
                  <FontAwesomeIcon className='icon' icon={faDotCircle} fontSize={15} />
                  Event
                </Link>
              </li>
              <li className='menuLi'>
                <Link to="/AboutManagement">
                  <FontAwesomeIcon className='icon' icon={faDotCircle} fontSize={15} />
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sidebar