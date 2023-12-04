import PropTypes from 'prop-types';
import Thumbnail from './components/Thumbnail.css';
import ItemType from './components/item';
import './Details.css';
import { itemImages } from './items';

function Details({ items }) {
  return (
    <div className="details-component">
      <div>
        {/* display item */}
      </div>
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
}

Details.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default Details;
