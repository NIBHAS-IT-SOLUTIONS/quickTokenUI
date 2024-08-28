import React from 'react'
import './Page3.css'

function Page3() {
    return (
        <>

            <nav className='navbar'>
                <h2 className='nav-title'>QuickToken</h2>
            </nav>

            <div className='page3-container'>
                <div className='page3'>
                    <div className="page3-inputs">
                        <input className='inputs' type="text" placeholder='Patient name' />
                        <input className='inputs' type="text" placeholder='OP Number' />
                        <input className='inputs' type="date"/>
                        
                        <select className='inputs' name="pets" id="pet-select">
                            <option value="">--Gender--</option>
                            <option value="dog">Male</option>
                            <option value="cat">Female</option>
                        </select>

                        <input className='inputs' placeholder='Phone' type="tel" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
                        <button type='submit' className='info-btn'>Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page3