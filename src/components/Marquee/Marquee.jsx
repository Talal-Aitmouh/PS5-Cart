import './Marquee.css';

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee__group">
        <img src="/img/Image 1.png" alt="Image 1" />
        <img src="/img/Image 2.png" alt="Image 2" />
        <img src="/img/Image 5.png" alt="Image 5" />
      </div>
      <div className="marquee__group">
        <img src="/img/Image 1.png" alt="Image 1" />
        <img src="/img/Image 2.png" alt="Image 2" />
        <img src="/img/Image 5.png" alt="Image 5" />
      </div>
    </div>
  );
};

export default Marquee;
