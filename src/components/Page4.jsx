import React, { useEffect } from 'react'
import './Page4.css'



function Page4() {
  useEffect(() => {
    const tabsBox = document.querySelector(".tabs-box"),
      allTabs = tabsBox.querySelectorAll(".tab"),
      arrowIcons = document.querySelectorAll(".icon i");
    let isDragging = false;
    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth;
      arrowIcons[0].parentElement.style.display = scrollVal <= 0 ? "none" : "flex";
      arrowIcons[1].parentElement.style.display = maxScrollableWidth - scrollVal <= 1 ? "none" : "flex";
    }
    arrowIcons.forEach(icon => {
      icon.addEventListener("click", () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = tabsBox.scrollLeft += icon.id === "left" ? -340 : 340;
        handleIcons(scrollWidth);
      });
    });
    allTabs.forEach(tab => {
      tab.addEventListener("click", () => {
        tabsBox.querySelector(".active").classList.remove("active");
        tab.classList.add("active");
      });
    });
    const dragging = (e) => {
      if (!isDragging) return;
      tabsBox.classList.add("dragging");
      tabsBox.scrollLeft -= e.movementX;
      handleIcons(tabsBox.scrollLeft)
    }
    const dragStop = () => {
      isDragging = false;
      tabsBox.classList.remove("dragging");
    }
    tabsBox.addEventListener("mousedown", () => isDragging = true);
    tabsBox.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);

  })



  return (
    <>
      <div className='page4'>
        <div className="page4-head">
          <div className="nav-left">

            <i class="fa fa-arrow-left" aria-hidden="true"></i>
            <i class="fa fa-map-marker" aria-hidden="true"> thrissur</i>
            <p className='place'>Vadakkanchery</p>
          </div>

          <div className="nav-right">
            <i class="fa fa-bell" aria-hidden="true"></i>
          </div>

        </div>
      </div>

      <div id="carouselExample" class="carousel slide">

        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" class="d-block w-100" alt="..." />
          </div>
          <div class="carousel-item">
            <img src="https://i.postimg.cc/52R8FkYP/28480865-Tiny-doctors-and-patients-near-hospital-flat-vector-illustration.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <div class="wrapper">

        <div class="icon"><i id="left" class="fa-solid fa-angle-left"></i></div>
        <ul class="tabs-box">
          <li class="tab">All</li>
          <li class="tab active">Cardiology</li>
          <li class="tab">General medicine</li>
          <li class="tab">Dermatology</li>
          <li class="tab">Neurology</li>
          <li class="tab">Nephrology</li>
          <li class="tab">Pathology</li>
          <li class="tab">Gastro endology</li>
          <li class="tab">Pathology</li>
          <li class="tab">Pathology</li>
          <li class="tab">Pathology</li>
          <li class="tab">Pathology</li>
          <li class="tab">Pathology Market</li>
          <li class="tab">Pathology</li>
          <li class="tab">Data Pathology</li>
        </ul>
        <div class="icon"><i id="right" class="fa-solid fa-angle-right"></i></div>
      </div>

      {/*  */}

      <div className='dr-card-container'>

        <div className="dr-cards col-md-3">
          <div className="dr-card">
            <div className="dr-image">
              <img src="https://i.postimg.cc/c4Z9Wymw/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
            </div>
            <div className="dr-content">
              <h2>Dr. Amanda</h2>
              <span>
                <a className='' href=""><i class="fa fa-graduation-cap" aria-hidden="true"></i>MBBS,DLO-ENT</a>
                <a className='splztn' href="">ENT HEAD AND NECK SURGERY</a>
              </span>
            </div>
          </div>
        </div>

        <div className="dr-cards col-md-3">
          <div className="dr-card">
            <div className="dr-image">
              <img src="https://i.postimg.cc/c4Z9Wymw/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
            </div>
            <div className="dr-content">
              <h2>Dr. Amanda</h2>
              <span>
                <a className='' href=""><i class="fa fa-graduation-cap" aria-hidden="true"></i>MBBS,DLO-ENT</a>
                <a className='splztn' href="">ENT HEAD AND NECK SURGERY</a>
              </span>
            </div>
          </div>
        </div>

        <div className="dr-cards col-md-3">
          <div className="dr-card">
            <div className="dr-image">
              <img src="https://i.postimg.cc/c4Z9Wymw/woman-doctor-wearing-lab-coat-with-stethoscope-isolated.jpg" alt="" />
            </div>
            <div className="dr-content">
              <h2>Dr. Amanda</h2>
              <span>
                <a className='' href=""><i class="fa fa-graduation-cap" aria-hidden="true"></i>MBBS,DLO-ENT</a>
                <a className='splztn' href="">ENT HEAD AND NECK SURGERY</a>
              </span>
            </div>
          </div>
        </div>

      

      </div>








    </>

  )
}

export default Page4