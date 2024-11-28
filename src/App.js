import './css/wylie.css';
import 'font-awesome/css/font-awesome.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Business from './components/Business';
import Portfolio from './components/Portfolio';
import Culture from './components/Culture';
import Award from './components/Award';
import Signature from './components/Signature';
import Form from './components/Form';
import Footer from './components/Footer';


function App() {
	return (
		<>
			<div id="start">
				<Header />
				<Slider />
			</div>
			<section>
				<Business />
				<Portfolio />
				<Culture />
				<Award />
				<Signature />
				<Form />
				<Footer />
			</section>
		</>
	);
}

export default App;
