import './index.css'

const TabItem = props => {
  const {tabsList, updateTabState} = props
  const {displayText, tabId} = tabsList

  const changeTab = () => {
    updateTabState(tabId)
  }

  return (
    <li className="list-item">
      <button type="button" className="tab-button" onClick={changeTab}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
