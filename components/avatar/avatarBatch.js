import { AvatarContext } from "context/avatarContext";
import { PropTypes } from "prop-types";
import { Fragment, useEffect, useState } from "react";

const AVATAR_LAYOUT = ["vertical", "horizontal"];

AvatarBatch.propTypes = {
  layout: PropTypes.oneOf(AVATAR_LAYOUT),
};

export default function AvatarBatch(props) {
  const [count, setCount] = useState();
  useEffect(
    (e) => {
      console.log(props);
      setCount(props.children.length);
    },
    [props]
  );

  return (
    <div style={{ display: props.layout === "vertical" ? "block" : "flex" }}>
      <Fragment>
        <AvatarContext.Provider value={props}>
          {(() => {
            if (count > 1) {
              return (
                <Fragment>
                  {props.children
                    .filter((event) => event.type?.name.includes("Avatar"))
                    .map(
                      (filteredComponent, key) =>
                        key < parseInt(props.max) && (
                          <Fragment key={key}>{filteredComponent}</Fragment>
                        )
                    )}
                </Fragment>
              );
            } else {
              return <Fragment> {props.children}</Fragment>;
            }
          })()}
          {(() => {
            if (count > parseInt(props.max)) {
              return (
                <div className="nvxAvatar">
                  <span>+{count - props.max}</span>
                </div>
              );
            }
          })()}
        </AvatarContext.Provider>
      </Fragment>
    </div>
  );
}
