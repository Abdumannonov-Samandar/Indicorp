import  { useState } from "react"
import { Button, Layout, Menu, Drawer, Input, Badge, Flex } from "antd"
import { BiMenuAltRight, BiSearch, BiCart } from "react-icons/bi"

const { Header } = Layout

const SiteHeader = () => {
  const [isDrawerVisible, setDrawerVisible] = useState(false)
  const [isSearchVisible, setSearchVisible] = useState(false)
  const [isCartVisible, setCartVisible] = useState(false)

  const toggleDrawer = () => {
    setDrawerVisible(!isDrawerVisible)
  }

  const toggleSearch = () => {
    setSearchVisible(!isSearchVisible)
    setCartVisible(false)
  }

  const toggleCart = () => {
    setCartVisible(!isCartVisible)
    setSearchVisible(false)
  }

  return (
    <Header style={{ background: "transparent", padding: "0 20px" }}>
      <div
        className="container"
        style={{
          width: "100%",
          maxWidth: "1206px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <Flex 
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Logo */}
          <Flex align="center" gap="120px">
            <a
              href="#"
              style={{
                float: "left",
                fontWeight: "bold",
                fontSize: "24px",
                lineHeight: "32px",
                color: "#252B42",
              }}
            >
              Indicorp
            </a>
            <Menu
              theme="light"
              mode="horizontal"
              className="header-menu"
              defaultSelectedKeys={["1"]}
              style={{ background: "transparent", textAlign: "center" }}
            >
              <Menu.Item key="1">
                Home
              </Menu.Item>
              <Menu.Item key="2">
                Product
              </Menu.Item>
              <Menu.Item key="3">
                Pricing
              </Menu.Item>
              <Menu.Item key="4">
                Contact
              </Menu.Item>
            </Menu>
          </Flex>

            {/* Right-side icons and hamburger */}
          <Flex align="center" gap="20px">
            {/* Search toggle */}
            <div style={{ position: "relative" }}>
              <BiSearch
                style={{ fontSize: "20px", color: "#252B42", cursor: "pointer" }}
                onClick={toggleSearch}
              />
              {isSearchVisible && (
                <Input
                  placeholder="Search..."
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "0",
                    width: "200px",
                    border: "1px solid #d9d9d9",
                    padding: "5px",
                    zIndex: 1000,
                    background: "#fff",
                  }}
                />
              )}
            </div>

            {/* Cart toggle */}
            <div style={{ position: "relative" }}>
              <Badge count={2} overflowCount={99}>
                <BiCart
                  style={{ fontSize: "20px", color: "#252B42", cursor: "pointer" }}
                  onClick={toggleCart}
                />
              </Badge>
              {isCartVisible && (
                <div
                  style={{
                    position: "absolute",
                    top: "30px",
                    right: "0",
                    width: "300px",
                    background: "#fff",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                    padding: "10px",
                    zIndex: 1000,
                  }}
                >
                  <h3>Your Cart</h3>
                  <p>Item 1: $10</p>
                  <p>Item 2: $15</p>
                  <p>Total: $25</p>
                </div>
              )}
            </div>

            {/* Hamburger icon button for mobile */}
            <Button
              type="default"
              style={{ background: "transparent", border: "none" }}
              size="large"
              onClick={toggleDrawer}
              className="mobile-menu-button"
            >
              <BiMenuAltRight style={{ fontSize: "24px", color: "#252B42" }} />
            </Button>
          </Flex>

          {/* Drawer for mobile menu */}
          <Drawer
            placement="right"
            closable={true}
            onClose={toggleDrawer}
            visible={isDrawerVisible}
            bodyStyle={{ padding: 0 }}
          >
            <Menu
              theme="light"
              mode="vertical"
              defaultSelectedKeys={["1"]}
              style={{ background: "transparent", textAlign: "center" }}
            >
              <Menu.Item key="1" onClick={toggleDrawer}>
                Home
              </Menu.Item>
              <Menu.Item key="2" onClick={toggleDrawer}>
                Product
              </Menu.Item>
              <Menu.Item key="3" onClick={toggleDrawer}>
                Pricing
              </Menu.Item>
              <Menu.Item key="4" onClick={toggleDrawer}>
                Contact
              </Menu.Item>
            </Menu>
          </Drawer>
        </Flex>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .desktop-menu {
            display: none !important 
          }
          .mobile-menu-button {
            display: none !important 
          }
          .container {
            padding: 0 15px !important
          }
        }

        @media (max-width: 767px) {
          .mobile-menu-button {
            display: block 
          }
          .header-menu {
            display: none 
          }
        }
      `}</style>
    </Header>
  )
}

export default SiteHeader
