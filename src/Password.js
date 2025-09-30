import './Password.css'

const Password = props => {
  const {eachItem, length, clickedButtonBin, isShowClicked} = props
  const {id, inputWebsiteText, inputPasswordText, inputUsernameText} = eachItem

  const clickedButton = () => {
    clickedButtonBin(id)
  }

  const addClickedTrue = (
    <li key={id}>
      <p className="logo">{inputWebsiteText[0]} </p>
      <div className="nameContainer">
        <p>{inputWebsiteText} </p>
        <p>{inputUsernameText} </p>
        {isShowClicked ? (
          <p className="passwordStar">{inputPasswordText}</p>
        ) : (
          <img
            className="passwordStar"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png "
            alt="stars"
          />
        )}
      </div>
      <button onClick={clickedButton} data-testid="delete" type="button">
        {' '}
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
          alt="delete"
        />
      </button>
    </li>
  )
  const addClickedFalse = (
    <div>
      <img
        className="nopasswordImgs"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png "
        alt="no passwords"
      />
      <p className="nopasswordText">No Passwords</p>
    </div>
  )

  return length > 0 ? addClickedTrue : addClickedFalse
}

export default Password
