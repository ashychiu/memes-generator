import './MemeCard.scss';

function MemeCard({ name, image }) {
  return (
    <div className="card">
      <div className="card__image-container">
        <img className="card__image" src={image} alt={name} />
      </div>
    </div>
  );
}

export default MemeCard;
