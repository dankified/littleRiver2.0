import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";
const { Item } = Menu;

var menuClickHandler = function(ev) {
  console.log(ev.target.children);
};

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.menuClickHandler = menuClickHandler.bind(this);
  }

  render() {
    return (
      <Menu>
        <Menu.Menu position="left">
          <Link className="item" to="/">
            Little River Freisians
          </Link>
        </Menu.Menu>
        {/* Desktop Menu */}
        <Menu.Menu id="menu-desktop" position="right">
          <Link className="item" to="/">
            Home
          </Link>
          <Link className="item" to="/about">
            About
          </Link>
          <Link className="item" to="/contact">
            Contact
          </Link>
        </Menu.Menu>
        {/*  */}
        {/* Mobile Menu */}
        <Menu.Menu id="menu-mobile" position="right">
          <Dropdown item text="Options">
            <Dropdown.Menu>
              <Link className="item" to="/">
                Home
              </Link>
              <Link className="item" to="/about">
                About
              </Link>
              <Link className="item" to="/contact">
                Contact
              </Link>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        {/*  */}
      </Menu>
    );
  }
}
