import PropTypes from 'prop-types';
import Thumbnail from './components/Thumbnail.css';
// import ItemType from '../types/items';
import './Details.css';
import { itemImages } from './items';

function Details({ items }) {
  return (
    <div className="home-component">
      {items.map((item) => (
        <Thumbnail
          key={item.itemId}
          image={itemImages[item.imageId]}
          title={item.title}
        />
      ))}
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
