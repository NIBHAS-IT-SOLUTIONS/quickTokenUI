// import React, { useEffect } from 'react'
// import './Rough.css'

// function Rough() {

//   useEffect(()=>{
//     const openPopupBtn = document.getElementById('openPopupBtn');
//     const closePopupBtn = document.getElementById('closePopupBtn');
//     const popup = document.getElementById('popup');
//     const overlay = document.getElementById('overlay');
  
//     // Function to open the popup
//     openPopupBtn.addEventListener('click', function() {
//         popup.classList.add('active');
//         overlay.classList.add('active');
//     });
  
//     // Function to close the popup
//     closePopupBtn.addEventListener('click', function() {
//         popup.classList.remove('active');
//         overlay.classList.remove('active');
//     });
  
//     // Close the popup if the overlay is clicked
//     overlay.addEventListener('click', function() {
//         popup.classList.remove('active');
//         overlay.classList.remove('active');
//     });
//   })
 
//   return (

//     <>
//     <div className="rough">
//     <button id="openPopupBtn">1</button>

//     <div id="overlay" class="overlay"></div>

//     <div id="popup" className="popup">
//         <h2>Popup Title</h2>
//         <p>This is a simple popup example.</p>
//         <button className='ok-button'>Ok</button>
//         <button className='close-btn' id="closePopupBtn">Close</button>
//     </div>

//     </div> 
//     </>

//   )
// }

// export default Rough