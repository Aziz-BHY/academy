import React, { Component } from 'react';

class Header  extends Component {
    render() { 
        return ( 
        
		
		<header className="clearfix">

			<div className="top-line">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<p><i className="material-icons">phone</i> <span>21 075 385</span></p>
							 <p><i className="material-icons">email</i> <span>contact@creometry.com</span></p> 
						</div>
						<div className="col-lg-6">
							<div className="right-top-line">
								
								<button className="search-icon">
									<i className="material-icons open-search">search</i> 
									<i className="material-icons close-search">close</i>
								</button>
								<button className="shop-icon">
									<a href="cart.html"><i className="material-icons">shopping_cart</i></a>
									<span className="studiare-cart-number">0</span>
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>

			<form className="search_bar">
				<div className="container">
					<input type="search" className="search-input" placeholder="What are you looking for..." />
					<button type="submit" className="submit">
						<i className="material-icons">search</i>
					</button>
				</div>
			</form>

			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<div className="container">

					<a className="navbar-brand" href="index.html">
						<img className="logoImage" src="images/creometry.png" alt=""/>
					</a>

					

					<div className="collapse navbar-collapse" id="navbarSupportedContent">
						<ul className="navbar-nav mr-auto">
							<li className="drop-link">
								<a className="active" href="index.html">Home</a>
							</li>
							<li className="drop-link">
								<a href="about.html">Pages <i className="fa fa-angle-down"></i></a>
								<ul className="dropdown">
									<li><a href="about.html">About Us</a></li>
									<li><a href="pricing.html">Pricing Packages</a></li>
									<li><a href="cart.html">Shopping Cart</a></li>
									<li><a href="checkout.html">Checkout</a></li>
								</ul>
							</li>
							<li className="drop-link">
								<a href="blog.html">Blog <i className="fa fa-angle-down"></i></a>
								<ul className="dropdown">
									<li className="drop-link">
										<a href="blog-list.html">Blog List</a>
										<ul className="dropdown level2">
											<li><a href="blog-list-leftsidebar.html">Blog List - Sidebar Left</a></li>
											<li><a href="blog-list-rightsidebar.html">Blog List - Sidebar Right</a></li>
											<li><a href="blog-list.html">No Sidebar</a></li>
										</ul>
									</li>
									<li className="drop-link">
										<a href="blog-grid-3.html">Blog Grid</a>
										<ul className="dropdown level2">
											<li><a href="blog-grid-3.html">3 Column</a></li>
											<li><a href="blog-grid-4.html">4 Column</a></li>
											<li><a href="blog-grid-leftsidebar.html">Sidebar Left</a></li>
											<li><a href="blog-grid-rightsidebar.html">Sidebar Right</a></li>
										</ul>
									</li>
									<li><a href="blog.html">Blog classNameic</a></li>
									<li><a href="single-post.html">Post Single</a></li>
								</ul>
							</li>
							<li className="drop-link">
								<a href="courses.html">Courses</a>
							</li>
							<li><a href="events.html">Events</a></li>
							<li><a href="contact.html">Contact</a></li>
						</ul>
						<a href="#" className="register-modal-opener login-button"><i className="material-icons">perm_identity</i> Get Started</a>
					</div>
				</div>
			</nav>

			<div className="mobile-menu">
				<div className="search-form-box">
					<form className="search-form">
						<input type="search" className="search-field" placeholder="Enter keyword..."/>
						<button type="submit" className="search-submit">
							<i className="material-icons open-search">search</i> 
						</button>
					</form>
				</div>
				<div className="shopping-cart-box">
					<a className="shop-icon" href="cart.html">
						<i className="material-icons">shopping_cart</i>
						Cart
						<span className="studiare-cart-number">0</span>
					</a>
				</div>
				<nav className="mobile-nav">
					<ul className="mobile-menu-list">
						<li>
							<a href="index.html">Home</a>
						</li>
						<li className="drop-link">
							<a href="#">Pages</a>
							<ul className="drop-level">
								<li><a href="about.html">About Us</a></li>
								<li><a href="pricing.html">Pricing Packages</a></li>
								<li><a href="portfolio.html">Portfolio</a></li>
								<li><a href="single-project.html">Portfolio Single</a></li>
								<li><a href="teachers.html">Teachers</a></li>
								<li><a href="single-teacher.html">Teacher Single</a></li>
								<li><a href="cart.html">Shopping Cart</a></li>
								<li><a href="checkout.html">Checkout</a></li>
								<li><a href="single-teacher.html">Teacher Single</a></li>
								<li className="drop-link">
									<a href="#">Submenu Level 1</a>
									<ul className="drop-level">
										<li><a href="#">Submenu Level 2</a></li>
										<li className="drop-link">
											<a href="#">Submenu Level 2</a>
											<ul className="drop-level">
												<li><a href="#">Submenu Level 3</a></li>
												<li><a href="#">Submenu Level 3</a></li>
											</ul>
										</li>
										<li><a href="#">Submenu Level 2</a></li>
									</ul>
								</li>
							</ul>
						</li>
						<li className="drop-link">
							<a href="blog.html">Blog</a>
							<ul className="drop-level">
								<li className="drop-link">
									<a href="blog-list.html">Blog List</a>
									<ul className="drop-level">
										<li><a href="blog-list-leftsidebar.html">Blog List - Sidebar Left</a></li>
										<li><a href="blog-list-rightsidebar.html">Blog List - Sidebar Right</a></li>
										<li><a href="blog-list.html">No Sidebar</a></li>
									</ul>
								</li>
								<li className="drop-link">
									<a href="blog-grid-3.html">Blog Grid</a>
									<ul className="drop-level">
										<li><a href="blog-grid-3.html">3 Column</a></li>
										<li><a href="blog-grid-4.html">4 Column</a></li>
										<li><a href="blog-grid-leftsidebar.html">Sidebar Left</a></li>
										<li><a href="blog-grid-rightsidebar.html">Sidebar Right</a></li>
									</ul>
								</li>
								<li><a href="blog.html">Blog classNameic</a></li>
								<li><a href="single-post.html">Post Single</a></li>
							</ul>
						</li>
						<li>
							<a href="courses.html">Courses</a>
						</li>
						<li>
							<a href="events.html">Events</a>
						</li>
						<li>
							<a href="contact.html">Contact</a>
						</li>
					</ul>
				</nav>
			</div>

		</header>
		

         );
    }
}
 
export default Header ;