import React from 'react'
import './Page2.css'

function Page2() {
    return (
        <>
            {/* <nav className='navbar'>
                    <h2 className='nav-title'>QuickToken</h2>
                </nav>
            <div class="flex-container">
                <div class="flex-item-left">
                    <h2 className='hospital-name'>Hospital name</h2>
                    <img className='img1' src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" alt="" />
                   <div className='card-icons'>
                  
                   <ul>
                    <li><i class="fa-solid fa-location-dot"></i>Thrissur,680612</li>
                    <li></li>
                   </ul>
                   </div>

                </div>
                <div class="flex-item-left">
                <h2 className='hospital-name'>Hospital name</h2>
                    <img className='img1' src="https://i.postimg.cc/85tbb7QX/Product-quality-pana.png" alt="" />
                </div>
            </div> */}
            <div className='hsptl-card-container'>
                <nav className='navbar'>
                    <h2 className='nav-title'>QuickToken</h2>
                </nav>
                <div className="hsptl-cards">
                    <div className="hsptl-card">
                        <div className="hsptl-image">
                            <img src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" alt="" />
                        </div>
                        <div className="hsptl-content">
                            <h2>St.James Chalakkudy</h2>
                            <span>  
                                <a className='' href=""><i class="fa-solid fa-location-dot"> Place</i>Chalakkudy,Thrissur Dist,Kerala,680686</a>
                                <a className='' href=""><i class="fa-solid fa-phone"> Phone</i>0481-2234567</a> 
                                </span>
                        </div>
                    </div>
                </div>
                <div className="hsptl-cards">
                    <div className="hsptl-card">
                        <div className="hsptl-image">
                            <img src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" alt="" />
                        </div>
                        <div className="hsptl-content">
                            <h2>St.James Chalakkudy</h2>
                            <span>  
                                <a className='' href=""><i class="fa-solid fa-location-dot"> Place</i>Chalakkudy,Thrissur Dist,Kerala,680686</a>
                                <a className='' href=""><i class="fa-solid fa-phone"> Phone</i>0481-2234567</a> 
                                </span>
                        </div>
                    </div>
                </div>
                <div className="hsptl-cards">
                    <div className="hsptl-card">
                        <div className="hsptl-image">
                            <img src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" alt="" />
                        </div>
                        <div className="hsptl-content">
                            <h2>St.James Chalakkudy</h2>
                            <span>  
                                <a className='' href=""><i class="fa-solid fa-location-dot"> Place</i>Chalakkudy,Thrissur Dist,Kerala,680686</a>
                                <a className='' href=""><i class="fa-solid fa-phone"> Phone</i>0481-2234567</a> 
                                </span>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}

export default Page2