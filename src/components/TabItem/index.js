import './index.css'

const TabItem = props => {
  const {tabsList, updateTabState, isTabSelected} = props
  const {displayText, tabId} = tabsList

  const changeTab = () => {
    updateTabState(tabId)
  }

  const highlighterClass = isTabSelected ? 'tab-highlight' : ''

  return (
    <li className="list-item">
      <button
        type="button"
        className={`tab-button ${highlighterClass}`}
        onClick={changeTab}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
