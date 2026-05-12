import { Link } from 'react-router-dom';
import MemeCard from '../MemeCard/MemeCard';
import headerImage from '../../assets/images/home-header.png';
import chooseMeme from '../../assets/images/choose-meme.png';
import './MemesList.scss';
import Footer from '../Footer/Footer';

function MemesList({ list }) {
  return (
    <>
      <div className="list__container">
        <img
          className="list__header-image"
          src={headerImage}
          alt="Memenerator by Ashley and Miriam"
        />
        <img
          className="list__choose-image"
          src={chooseMeme}
          alt="Choose a meme background"
        />
        {list.map((item) => (
          <Link to={`/meme/${item.id}`} key={item.id}>
            <MemeCard name={item.name} image={item.url} />
          </Link>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default MemesList;
