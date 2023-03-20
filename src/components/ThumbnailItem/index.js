// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, whenClicked, activeThumbnail} = props
  const {imageUrl, thumbnailUrl, thumbnailAltText} = imageDetails
  const thumbnail = () => {
    whenClicked(imageUrl)
    console.log(thumbnailAltText)
  }
  return (
    <li className="thumbnail-item">
      <button type="button" onClick={thumbnail} className="thumbnail-button">
        <img
          src={thumbnailUrl}
          alt={thumbnailAltText}
          className={activeThumbnail ? '' : 'thumbnail-img'}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
