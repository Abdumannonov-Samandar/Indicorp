import { Button, Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import Text from "antd/es/typography/Text";
import { BiMap } from "react-icons/bi";
import { IoCall } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";

const cardDatas = [
  {
    id: 1,
    icon: <IoCall style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    title: "Phone Support",
    text: "+123-456-7890",
  },
  {
    id: 2,
    icon: <BiMap style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    title: "Visit Us",
    text: "123 Main Street, Anytown",
  },
  {
    id: 3,
    icon: <FaTelegramPlane style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    title: "Email Us",
    text: "support@example.com",
  },
];

const Touch = () => {
  return (
    <section style={{ padding: "80px 0 148px 0", background: "#F3F3F3" }}>
      <div
        className="container"
        style={{
          width: "100%",
          maxWidth: "1206px",
          margin: "0 auto",
          padding: "0 15px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: "50px",
            textAlign: "center",
          }}
        >
          <Title
            level={2}
            style={{
              fontSize: "40px",
              lineHeight: "57px",
              fontWeight: "700",
              color: "#252B42",
              marginBottom: "10px",
            }}
          >
            Get In Touch
          </Title>
          <Text
            type="secondary"
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              color: "#737373",
            }}
          >
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: Newtonian mechanics
          </Text>
        </div>
        <Row gutter={[16, 16]} style={{ width: "100%", textAlign: "center" }}>
          {cardDatas.map((item) => (
            <Col xs={24} sm={12} md={8} key={item.id}>
              <Card
                hoverable
                className="custom-card"
                style={{ transition: "transform 0.3s, opacity 0.3s", borderRadius: "0" }}
                bodyStyle={{ padding: "54px 80px" }}
              >
                <div className="icon-wrapper" style={{ transition: "color 0.3s" }}>
                  {item.icon}
                </div>
                <Title
                  level={4}
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: "600",
                    marginBottom: "10px",
                  }}
                >
                  {item.title}
                </Title>
                <Text
                  type="secondary"
                  style={{
                    fontSize: "14px",
                    lineHeight: "24px",
                    fontWeight: "600",
                  }}
                >
                  {item.text}
                </Text>
                <Title
                  level={3}
                  style={{
                    fontSize: "24px",
                    lineHeight: "32px",
                    fontWeight: "700",
                    marginTop: "20px",
                  }}
                >
                  Get Support
                </Title>
                <Button size="large" className="ant-btn" style={{ marginTop: "20px", borderRadius: "5px", border: "1px solid #FFA62B", color: "#FFA62B"}}>
                  Submit Request
                </Button>
              </Card>
            </Col>
          ))}
        </Row>
      </div>

      <style>{`
        .custom-card {
          opacity: 1;
          transition: transform 0.3s, opacity 0.3s;
        }
        .custom-card:hover {
          background-color: #252B42;
          color: #fff;
          opacity: 1 !important;
          transform: scale(1.05);
        }
        .custom-card:hover .icon-wrapper > * {
          color: #fff !important;
        }
        .custom-card:hover .ant-typography {
          color: #fff;
        }
        .custom-card:hover .ant-btn {
          color: #fff;
          border: 1px solid #fff;
          background-color: transparent;
        }
        .ant-row:hover .custom-card:not(:hover) {
          opacity: 0.6;
        }
        .ant-btn {
        color: "#FFA62B", 
        border: "1px solid #FFA62B"
        }
      `}</style>
    </section>
  );
};

export default Touch;
