import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Thumbnail from './Thumbnail';
import ItemType from './item';
import './Details.css';
import { itemImages } from '../items';

function Details({ items }) {
  return (
    <div className="details-component">
      <div>
        <Outlet />
      </div>
      <div className="details-component-sidebar">
        {items.map((item) => (
          <Thumbnail
            key={item.itemId}
            image={itemImages[item.imageId]}
            title={item.title}
            itemId={item.itemId}
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
