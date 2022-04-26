import VideoIcon from '../../assets/video-icon.svg';
import Blob from '../../assets/blob.png';

export default function Header() {
  return (
    <header className="container header">
      <div className="text-gray">Exclusive NFT for Digital and Real-world Assets</div>
      <h1>
        The world's first non-fungible token (NFT) marketplace
        <br />
        for both digital and physical assets.
      </h1>
      <div className="cta">
        <a className="btn-secondary" href="#">Explore</a>
        <a className="btn-primary" href="#">Create</a>
      </div>
      <a className="video" href="#">
        <img src={VideoIcon} alt="video icon" />
        <span>Learn more about TheFund</span>
      </a>
      <img className="absolute-top-right" src={Blob} alt="blob" />
    </header>
  )
}
