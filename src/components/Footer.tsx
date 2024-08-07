import { Flex } from "antd"
import Title from "antd/es/typography/Title"
import { BiMap } from "react-icons/bi"
import { FaFacebook, FaInstagram, FaTelegramPlane, FaTwitter, FaYoutube } from "react-icons/fa"
import { IoCall } from "react-icons/io5"
import Text from "antd/es/typography/Text"

const Item = [
  {
    id: 1,
    title: 'Company Info', 
    link: "About Us",
    link1: "Carrier",
    link2: "We are hiring",
    link3: "Blog",
  },
  {
    id: 2,
    title: 'Legal', 
    link: "About Us",
    link1: "Carrier",
    link2: "We are hiring",
    link3: "Blog",
  },
  {
    id: 3,
    title: 'Features', 
    link: "Business Marketing",
    link1: "User Analytic",
    link2: "Live Chat",
    link3: "Unlimited Support",
  },
  {
    id: 4,
    title: 'Resources', 
    link: "IOS & Android",
    link1: "Watch a Demo",
    link2: "Customers",
    link3: "API",
  },
]

const Footer = () => {
  return (
    <footer style={{ padding: "50px 0 25px 0", backgroundImage: "linear-gradient(to bottom, #16697A 75%, #FAFAFA 25%)" }}>
      <div className="container" style={{ width: "100%", maxWidth: "1206px", margin: "0 auto", padding: "0 15px" }}>
        <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-between", flexWrap: "wrap", padding: "0", margin: "0", paddingBottom: "50px" }}>
          {Item.map((item) => (
            <li key={item.id}>
              <Title level={3} style={{ color: "#fff", fontWeight: "700", fontSize: '16px', lineHeight: "24px", marginBottom: "20px" }}>
                {item.title}
              </Title>
              <ul style={{ listStyle: "none", padding: "0", margin: "0" }}>
                <li>
                  <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none' }}>{item.link}</a>
                </li>
                <li>
                  <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none' }}>{item.link1}</a>
                </li>
                <li>
                  <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none' }}>{item.link2}</a>
                </li>
                <li>
                  <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none' }}>{item.link3}</a>
                </li>
              </ul>
            </li>
          ))}
          <li style={{display: "flex", flexDirection: "column"}}>
            <Title level={3} style={{ color: "#fff", fontWeight: "700", fontSize: '16px', lineHeight: "24px", marginBottom: "20px" }}>
              Get In Touch
            </Title>
            <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none', marginBottom: "5px" }}>
                <IoCall style={{ width: "20px", height: "20px", color: "#fff", marginRight: "10px" }} />
            (480) 555-0103
            </a>
            <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none',  marginBottom: "5px" }}>
              <BiMap style={{ width: "20px", height: "20px", color: "#fff", marginRight: "10px" }} />
            123 Main Street, Anytown, NY 12345
            </a>
            <a href="#" style={{ fontSize: '14px', lineHeight:'24px', color: '#fff', textDecoration: 'none' }}>
              <FaTelegramPlane style={{ width: "20px", height: "20px", color: "#fff", marginRight: "10px" }} />
            support@example.com
            </a>
          </li>
        </ul>
        <Flex justify="space-between" align="center" style={{ padding: "25px 0 0 0" }}>
          <Text type="secondary" style={{ fontSize: "14px", lineHeight: "20px", fontWeight: "500", color: "#737373", textAlign: "center",}}>
          Made With Love By Figmaland All Right Reserved 
          </Text>
           <Flex align="center" gap={"20px"}>
            <FaFacebook style={{ width: "20px", height: "20px", color: "#335BF5",}} />
            <FaInstagram style={{ width: "20px", height: "20px", color: "#E51F5A"}} />
            <FaTwitter style={{ width: "20px", height: "20px", color: "#21A6DF"}} />
            <FaYoutube style={{ width: "20px", height: "20px", color: "#E42F08"}} />
           </Flex>
        </Flex>
      </div>
    </footer>
  )
}

export default Footer
