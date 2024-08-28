import React from 'react'
import './Page1.css'


function Page1() {
    return (
        <>
            <div>

                <nav className='navbar'>
                    <h2 className='nav-title'>QuickToken</h2>
                </nav>

                <div className="page1-img">
                    <img src="https://i.postimg.cc/85tbb7QX/Product-quality-pana.png " alt="" />
                    <h2 className='title2'>Live Token Updates</h2>
                </div>

                <div className='page1-section2'>
                    <h2 className='title3'>Select your hospital</h2>

                    <div className="drop-downs">

                        <select name="cars" id="cars">
                            <option value="volvo">---Place---</option>
                            <option value="saab">Vdknchry</option>
                            <option value="opel">Tsr</option>
                            <option value="audi">Ijk</option>

                         
                        </select>
                        <br />

                        <select name="cars" id="cars">
                            <option value="volvo">---Hospital---</option>
                            <option value="saab">Aswini</option>
                            <option value="opel">Daya</option>
                            <option value="audi">Amala</option>
                        </select>
                        <button className='page1-btn'>OK</button>

                    </div>

                </div>

            </div>
        </>

    )
}

export default Page1