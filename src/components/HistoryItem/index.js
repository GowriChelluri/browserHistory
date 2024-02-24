import './index.css'

const HistoryItem = props => {
  const {historyDetails, onDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDeleteHistory = () => {
    onDelete(id)
  }

  return (
    <li className="list-container">
      <div className="content-container">
        <p className="time">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="app-logo" />
        <p className="title">{title}</p>
        <p className="domain">{domainUrl}</p>
      </div>

      <button
        type="button"
        onClick={onDeleteHistory}
        className="btn"
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default HistoryItem
