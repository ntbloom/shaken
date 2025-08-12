import Footer from './Footer';
import Searchbar from './Searchbar';

function Wrapper() {
  return (
    <div className="siteWrapper">
      <div>
        <Searchbar />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Wrapper;
