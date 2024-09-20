import React from 'react'
import './Page5.css'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';


function Page5() {
    useEffect(() => {
        // const tabsBox = document.querySelector(".page5-tabs-box"),
        //     allTabs = tabsBox.querySelectorAll(".page5-tab"),

        //     arrowIcons = document.querySelectorAll(".page5-icon i");
        // let isDragging = false;
        // const handleIcons = (scrollVal) => {
        //     let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
        //     arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
        //     arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
        // }
        // arrowIcons.forEach(icon => {
        //     icon.addEventListener("click", () => {
        //         let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        //         handleIcons(scrollWidth);
        //     });
        // });
        // allTabs.forEach(tab => {
        //     tab.addEventListener("click", () => {
        //         tabsBox.querySelector(".active").classList.remove("active");
        //         tab.classList.add("active");
        //     });
        // });
        // const dragging = (e) => {
        //     if (!isDragging) return;
        //     tabsBox.classList.add("dragging");
        //     tabsBox.scrollLeft -= e.movementX;
        //     handleIcons(tabsBox.scrollLeft)
        // }
        // const dragStop = () => {
        //     isDragging = false;
        //     tabsBox.classList.remove("dragging");
        // }
        // tabsBox.addEventListener("mousedown", () => isDragging = true);
        // tabsBox.addEventListener("mousemove", dragging);
        // document.addEventListener("mouseup", dragStop);
        const dateList = document.getElementById('dateList');
        const selectedDateText = document.getElementById('selectedDate');

        // Function to generate dates
        function generateDateRange(start, end) {
            const dateArray = [];
            let currentDate = new Date(start);
            while (currentDate <= end) {
                dateArray.push(new Date(currentDate));
                currentDate.setDate(currentDate.getDate() + 1);
            }
            return dateArray;
        }

        // Set the startDate to today
        const startDate = new Date(); // Today
        const endDate = new Date(); // Example: 30 days from today
        endDate.setDate(startDate.getDate() + 5); // Adjust this for the range

        // Create the date range starting from today
        const dates = generateDateRange(startDate, endDate);

        // Populate the date list
        dates.forEach((date) => {
            const dateItem = document.createElement('div');
            dateItem.classList.add('date-item');
            dateItem.textContent = date.toDateString().slice(0, 10); // Shorter format

            // Handle date click
            dateItem.addEventListener('click', () => {
                // Remove 'selected' class from all date items
                document.querySelectorAll('.date-item').forEach(item => {
                    item.classList.remove('selected');
                });

                // Add 'selected' class to the clicked item
                dateItem.classList.add('selected');

                // Display the selected date
                selectedDateText.textContent = `Selected Date: ${date.toDateString()}`;
            });

            dateList.appendChild(dateItem);
        });

    }



    )



    return (
        <>
            <div className="page5">
                <div className="page5-navleft">
                    <i class="fa fa-arrow-left" aria-hidden="true"></i>
                    <p className='page5-navhead'>Book your slot</p>
                </div>
                {/* token */}
                <div className="page5-cards">


                    <div className="page5-card">
                        <div className="page5-image">
                            <img src="https://i.postimg.cc/c4Z9Wymw/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
                        </div>
                        <div className="page5-content">
                            <h2>Dr. Amanda</h2>
                            <span>
                                <a className='' href=""><i class="fa fa-graduation-cap" aria-hidden="true"></i>MBBS,DLO-ENT</a>
                                <a className='splztn' href="">ENT HEAD AND NECK SURGERY</a>
                            </span>
                        </div>
                    </div>

                    {/*  */}

                    {/* <div class="page5-wrapper">
                        <div class="page5-icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
                        <ul class="page5-tabs-box">
                            <li class="page5-tab">monday</li>
                            <li class="page5-tab active">Cardiology</li>
                            <li class="page5-tab">General medicine</li>
                            <li class="page5-tab">Dermatology</li>
                            <li class="page5-tab">Neurology</li>
                            <li class="page5-tab">Nephrology</li>
                            <li class="page5-tab">Pathology</li>
                            <li class="page5-tab">Gastro endology</li>
                            <li class="page5-tab">Pathology</li>
                            <li class="page5-tab">Pathology</li>
                            <li class="page5-tab">Pathology</li>
                            <li class="page5-tab">Pathology</li>
                            <li class="page5-tab">Pathology Market</li>
                            <li class="page5-tab">Pathology</li>
                            <li class="page5-tab">Data Pathology</li>
                        </ul>
                        <div class="page5-icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
                    </div> */}

                    <div class="container">
                        <h2 className='page5-h2'>Select a Date</h2>
                        <div class="date-selector">
                            <div class="date-list" id="dateList"></div>
                        </div>
                        <p class="selected-date" id="selectedDate">No date selected</p>
                    </div>

                    {/*  */}
                    <div className='page5-time'>1:00 PM - 02:00 PM</div>

                    <div class="page5-container">
                        <div className='specific-time'>Morning <br />10 AM 12 PM </div>
                        <h1>Select Your Token</h1>
                        <form action="#" method="post" class="token-form">

                            <div class="token-grid">

                                {/* <div class="token-card">
                                    <input type="radio" id="token1" name="token" value="token1" required />
                                    <label for="token1">
                                        <div class="token-content">
                                            <h2 className='tokenNo'>1</h2>
                                            <p>1:00 PM</p>
                                        </div>
                                    </label>
                                </div>

                                <div class="token-card">
                                    <input type="radio" id="token2" name="token" value="token2" />
                                    <label for="token2">
                                        <div class="token-content">
                                            <h2 className='tokenNo'>2</h2>
                                            <p>1:05 PM</p>
                                        </div>
                                    </label>
                                </div>

                                <div class="token-card">
                                    <input type="radio" id="token3" name="token" value="token3" />
                                    <label for="token3">
                                        <div class="token-content">
                                            <h2 className='tokenNo'>3</h2>
                                            <p>1:10 PM</p>
                                        </div>
                                    </label>
                                </div>

                                <div class="token-card">
                                    <input type="radio" id="token4" name="token" value="token4" />
                                    <label for="token4">
                                        <div class="token-content">
                                            <h2 className='tokenNo'>4</h2>
                                            <p>1:15 PM</p>
                                        </div>
                                    </label>
                                </div>

                                <div class="token-card">
                                    <input type="radio" id="token5" name="token" value="token5" />
                                    <label for="token5">
                                        <div class="token-content">
                                            <h2 className='tokenNo'>5</h2>
                                            <p>1:20 PM</p>
                                        </div>
                                    </label>
                                </div>

                                <div class="token-card">
                                    <input type="radio" id="token6" name="token" value="token6" />
                                    <label for="token6">
                                        <div class="token-content">
                                            <h2 className='tokenNo'>6</h2>
                                            <p>1:25 PM</p>
                                        </div>
                                    </label>
                                </div>

                                    <div class="token-card">
                                        <input type="radio" id="token7" name="token" value="token7" />
                                        <label for="token7">
                                            <div class="token-content">
                                                <h2 className='tokenNo'>7</h2>
                                                <p>1:30 PM</p>
                                            </div>
                                        </label>
                                    </div>

                       */}



                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">1</a><br /> 1:00 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">2</a><br />1:10 PM </p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">3</a><br />1:15 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">4</a><br />1:20 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">5</a><br />1:25 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">6</a><br />1:30 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">7</a><br />1:35 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">8</a><br />1:40 PM</p>
                                </div>
                                <div id="wrapper">
                                    <p><a class="button" href="#popup1">10</a><br />1:45 PM</p>
                                </div>




                            </div>
                        </form>
                    </div>


                    <div id="popup1" class="overlay">

                        <div className="popup">
                            <h2>Token Number</h2>
                            <a class="close" href="#">&times;</a>
                            <div class="content">
                                <h4 className='page5-para'>Do you want to book this slot</h4>
                                <button className='page5-ok'>Confirm</button>
                                <button className='page5-cancel'>Cancel</button>
                            </div>
                        </div>

                    </div>

                </div>


            </div>




        </>
    )
}

export default Page5