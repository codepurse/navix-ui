import { TabContext } from "context/tabsContext";
import { PropTypes } from "prop-types";
import { Fragment, useEffect, useState } from "react";

const TAB_VARIANT = ["borderline", "rounded"];

const TAB_ICON_ALIGN = ["left", "right"];

Tabs.propTypes = {
  tabs: PropTypes.array,
  variant: PropTypes.string,
  onclick: PropTypes.func,
  backDrop: PropTypes.string,
  centered: PropTypes.bool,
  defaultKey: PropTypes.string,
};

export default function Tabs(props) {
  const [activeKey, setActiveKey] = useState(null);
  const propStyle = {
    backgroundColor: props.backDrop,
    variant: props.variant,
  };

  const centered = {
    justifyContent: "center",
    display: "flex",
  };

  useEffect(
    (e) => {
      console.log(props.children);
      if (props.defaultKey) {
        setActiveKey(props.defaultKey);
      }
    },
    [props.children]
  );

  const [keyTab, setKeyTab] = useState();
  return (
    <div id="tsum-tabs">
      <main style={props.centered ? centered : null}>
        <TabContext.Provider value={{ propStyle, activeKey }}>
          {props.children
            .filter((event) => event.type.name.includes("TabHeader"))
            .map((filteredComponent, key) => (
              <Fragment key={key}>
                {(() => {
                  return (
                    <span
                      onClick={(e) => {
                        if (filteredComponent.props.disable) {
                          e.preventDefault();
                          return;
                        } else {
                          try {
                            filteredComponent.props.onClick();
                          } catch (error) {}
                          setKeyTab(filteredComponent.props.id);
                          setActiveKey(filteredComponent.props.id);
                        }
                      }}
                    >
                      {filteredComponent}
                    </span>
                  );
                })()}
              </Fragment>
            ))}
        </TabContext.Provider>
      </main>
      <div>
        {props.children
          .filter((event) => event.type.name.includes("TabContent"))
          .map((filteredComponent, key) => (
            <Fragment key={key}>
              {(() => {
                if (keyTab === filteredComponent.props.id) {
                  return <div>{filteredComponent.props.children}</div>;
                }
              })()}
            </Fragment>
          ))}
      </div>
    </div>
  );
}
