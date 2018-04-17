import React from 'react';
import { Link ,h} from 'react-router-dom'
import arryNav from './router'
const Nav = () => {
   
   console.log(this.props)
   return <div className="nav-docs">
      {
         arryNav.map((item)=>{
            return(
               <div className="nav-docs-section">
                  <h3>{item.name}</h3>
                  <ul>
                     {
                        item.item.map((item)=>{
                           return(
                              <li>
                                 <Link className={
                                       window.location.pathname.replace('/','') === item.name.replace(/\s/g, '_') ? 'cur' : ''
                                     } to={`/${item.name.replace(/\s/g,'_')}`}>{item.name}</Link>
                              </li>
                           )
                        })
                     }
                  </ul>
               </div>
            )
         })
      }
   </div>
}

export default Nav