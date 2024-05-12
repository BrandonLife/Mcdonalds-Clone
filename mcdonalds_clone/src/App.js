import "./App.css";
import AppImage from "./images/Mcdonalds app.jpg";
import GoldenArches from "./images/McDonalds_Golden_Arches.svg.webp";
import SearchLocationImage from "./images/icons8-search-250.png";
import LocationImage from "./images/icons8-location-96.png";
function App() {
	return (
		<div>
			{/* Start of header */}
			<title>Mcdonald's Home Page</title>
			<header>
				<div class="hero-img-left">
					<img src={GoldenArches} alt="Mcdonald's golden s_Golden_Arches" />
				</div>
				<div class="header-top-left">
					<ul>
						<div>
							<span>Language</span>
						</div>
						<div>
							<li>Sign Up for Email</li>
						</div>
						<div>
							<li>Careers</li>
						</div>
					</ul>
				</div>
				<div class="header-top-right">
					<div>
						<img src={SearchLocationImage} alt="" />
						<span>Search</span>
					</div>
					<div>
						<img src={LocationImage} alt="" />
						<a href="#">Change your location</a>
					</div>
					<div>
						<button>Order Now</button>
					</div>
				</div>
				<nav class="header-bottom">
					<ul>
						<div>
							<li>Our Menu</li>
						</div>
						<div>
							<li>Download App</li>
						</div>
						<div>
							<li>MyMcDonald's Rewards</li>
						</div>
						<div>
							<li>Exclusive Deals</li>
						</div>
						<div>
							<li>About our Food</li>
						</div>
						<div>
							<li>Locate</li>
						</div>
						<div>
							<li>Gift Cards</li>
						</div>
					</ul>
				</nav>
			</header>
			{/* <!-- end of header -->
    <!-- Start of Main --> */}
			<main>
				<div>
					<h1>Mcdonald's App</h1>
				</div>
				<section class="container">
					<div class="left">
						<img src={AppImage} alt="" />
					</div>
					<div class="right">
						<div>
							<h2>New: Faster Faves, Only in the App</h2>
						</div>
						<div>
							<span>
								<p class="prep-order">
									We now prep when you're on the way if you choose Curbside,
									Front Counter—or dine in for Table Service. Just order ahead
									in the app to save time. Because waiting in line for faves?
									Not our thing either.*
								</p>
							</span>
						</div>
						<div>
							<span>
								<p>*At participating McDonald's</p>
							</span>
						</div>
						<div>
							<button>Order Ahead in the App</button>
						</div>
					</div>
				</section>
			</main>
			{/* End of main */}
		</div>
	);
}

export default App;
