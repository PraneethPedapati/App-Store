import './index.css'

const AppItem = props => {
  const {appsList} = props
  const {appName, imageUrl} = appsList
  return (
    <li className="app-list-item">
      <button type="button" className="app-button">
        <img src={imageUrl} alt={appName} className="app-logo" />
        <p className="app-name">{appName}</p>
      </button>
    </li>
  )
}

export default AppItem
