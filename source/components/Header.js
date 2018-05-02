import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu, Dropdown } from "semantic-ui-react";
const { Item } = Menu;

export default class Header extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Menu borderless fixed="top">
        <Menu.Menu id="menu-left" position="left">
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
          <Dropdown item text="Horses">
            <Dropdown.Menu>
              <Dropdown.Item text="Geldings">
                <Link className="horse-menu-item" to="/horses/geldings">
                  Geldings
                </Link>
              </Dropdown.Item>
              <Dropdown.Item text="Mares">
                <Link className="horse-menu-item" to="/horses/mares">
                  Mares
                </Link>
              </Dropdown.Item>
              <Dropdown.Item text="Fawns">
                <Link className="horse-menu-item" to="/horse/fawns">
                  Fawns
                </Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu.Menu>
        {/*  */}
        {/* Mobile Menu */}
        <Menu.Menu id="menu-mobile" position="right">
          <Dropdown item text="" icon="content">
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
