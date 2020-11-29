import React, { memo } from "react";
import { HeaderWrapper } from "./style";

import { NavLink } from "react-router-dom";

export default memo(function Header() {
  return (
    <HeaderWrapper>
      <div className="header-layout">
        <div className="left" >
          
          <NavLink to="/">发现</NavLink>
          <NavLink to="/mine">我的</NavLink>
          <NavLink to="/friend">我的朋友</NavLink>
        </div>
        <div className="right" >
            <input type="text" />
        </div>
      </div>
      <div className="divers"></div>
    </HeaderWrapper>
  );
});
