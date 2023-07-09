import './index.css'

const SearchHistory = props => {
  const {eachlist, deletelistitem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachlist
  //   console.log(props)
  const deletebutton = () => {
    deletelistitem(id)
  }
  return (
    <li className="each_list">
      <div className="left">
        <p className="time">{timeAccessed}</p>
        <img className="icon23" src={logoUrl} alt="domain logo" />
        <p className="time">{title}</p>
        <p className="time">{domainUrl}</p>
      </div>
      <div className="right">
        <button
          data-testid="delete"
          onClick={deletebutton}
          type="button"
          className="delete_button"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default SearchHistory
