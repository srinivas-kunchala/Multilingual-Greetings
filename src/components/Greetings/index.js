import './index.css'

const Greetings = props => {
  const {greetingsList, onChangeTabId, activeStatus} = props
  const {imageUrl, buttonText, imageAltText} = greetingsList

  const onClickButton = () => {
    onChangeTabId(imageUrl, imageAltText)
  }

  const isActiveButton = activeStatus ? 'activeTab' : ''

  return (
    <li>
      <button
        className={`${isActiveButton}`}
        type="button"
        onClick={onClickButton}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Greetings
