import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './DetailItem.css';
import { itemImages } from '../items';
import ItemType from './item';

function DetailItem({ items }) {
  const { id } = useParams();
  const detailItem = items.find((item) => item.itemId === id);
  return (
    <div className="detail-item-component">
      <img
        className="details-image"
        src={itemImages[detailItem.imageId]}
        alt={detailItem.title}
      />
      <h2>{detailItem.price.toFixed(2)}</h2>
      <div>
        $
        {detailItem.price.toFixed(2)}
      </div>
    </div>
  );
}

DetailItem.propTypes = {
  items: PropTypes.arrayOf(ItemType).isRequired,
};

export default DetailItem;
