import React, { useEffect } from 'react'
import './Rough.css'

function Rough() {
  useEffect(() => {



  })


  return (
    <>

      <div id="p" className="site">
        <div className="container">

          <div className='bottom-nav'>
            <ul>
              <li class='active'><a href="#" id='home'><span>Home</span><i class="ri-home-5-line"></i></a></li>
              <li><a href="#" id='history'><span>History</span><i class="ri-history-line"></i></a></li>
              <li><a href="#" id='profile'><span>Profile</span><i class="ri-user-line"></i></a></li>
            </ul>
          </div>

          <section>
            <div id="home">
              <h2>Home</h2>
            </div>
            <div id="history">
              <h2>History</h2>
            </div>
            <div id="profile">
              <h2>Profile</h2>
            </div>
          </section>

        </div>
      </div>
    </>


  )
}

export default Rough