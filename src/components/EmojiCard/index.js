// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {emojiList, onClickEmoji} = props
  const {id, emojiName, emojiUrl} = emojiList

  const onClickEmojiButton = () => {
    onClickEmoji(id)
  }

  return (
    <li className="emoji-card">
      <button
        className="emoji-button"
        type="button"
        onClick={onClickEmojiButton}
      >
        <img className="emoji-image" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
