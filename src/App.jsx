import React from 'react';
import './App.css'; // If you have custom styles, you can keep them here

function App() {
  return (
    <>  {/* React Fragment */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZOC7QX9AlqJoE7XpVu0s845RxgfFM02mn0rDi9Xwr0_0gDE6bCrpuP461W5uqn0lsC7M&usqp=CAU" alt="Logo" className="navbar-logo" /> {/* Add logo here */}
          Pawfet</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="/about-us">About Us</a>
              <a className="nav-link" href="/contact-us">Contact Us</a>
            </div>
            <div className="ms-auto"> {/* Pushes Login button to the right */}
        <button className="btn-login">Login</button>
        <button className="btn-signup">SignUp</button>
      </div>
          </div>
        </div>
      </nav>

      <div className="container my-5">
  <div className="row">
    <div className="col-md-3 mb-4">
      <div className="card" onClick={() => window.location.href='/food'}>
        <img src="food_image_url" className="card-img-top" alt="Food" />
        <div className="card-body text-center">
          <h5 className="card-title">Food</h5>
          <p className="card-text">Donate food to our furry friends.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card" onClick={() => window.location.href='/training'}>
        <img src="training_image_url" className="card-img-top" alt="Training" />
        <div className="card-body text-center">
          <h5 className="card-title">Training</h5>
          <p className="card-text">Support in dog training programs.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card" onClick={() => window.location.href='/adoption'}>
        <img src="adoption_image_url" className="card-img-top" alt="Adoption" />
        <div className="card-body text-center">
          <h5 className="card-title">Adoption</h5>
          <p className="card-text">Find a dog to adopt and make them a part of your family.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 mb-4">
      <div className="card" onClick={() => window.location.href='/donation'}>
        <img src="donation_image_url" className="card-img-top" alt="Donation" />
        <div className="card-body text-center">
          <h5 className="card-title">Donation</h5>
          <p className="card-text">Help the foundation by donating to a cause.</p>
        </div>
      </div>
    </div>
  </div>
</div>


      
    </>
  );
}

export default App;

