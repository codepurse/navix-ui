const TabContent = (props) => {
  return activeTab === id ? (
    <div className="nvxTabContent">{props.children}</div>
  ) : null;
};

export default TabContent;
