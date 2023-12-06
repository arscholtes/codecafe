import PropTypes from 'prop-types';
import './Thumbnail.css';
import { Link } from 'react-router-dom';

function Thumbnail({ itemId, image, title }) {
  return (
    <Link
      className="thumbnail-component"
      to={`/details/${itemId}`}
    >
      <div>
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
    </Link>
  );
}

Thumbnail.propTypes = {
  itemId: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Thumbnail;
