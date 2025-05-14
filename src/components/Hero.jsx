import './css/hero.css';

export default function Hero({ imageUrl, children }) {
  const heroStyle = {
    backgroundImage: `url(${imageUrl})`,
  };

  return (
    <div className="hero" style={heroStyle}>
      <div className="hero-content">
        {children}
      </div>
    </div>
  );
}