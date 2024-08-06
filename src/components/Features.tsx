import { Row, Col, Card, Typography } from "antd";
import { PiSuitcaseSimpleBold } from "react-icons/pi";
import { BsShop } from "react-icons/bs";
import { RiBookReadLine } from "react-icons/ri";

const { Title, Text } = Typography;

const datas = [
  {
    id: 1,
    icon: <PiSuitcaseSimpleBold style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    title: "Digital Marketing",
    text: "We focus on ergonomics and meeting you where you work.",
  },
  {
    id: 2,
    icon: <BsShop style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    title: "Content Marketing",
    text: "We focus on ergonomics and meeting you where you work.",
  },
  {
    id: 3,
    icon: <RiBookReadLine style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    title: "Social Marketing",
    text: "We focus on ergonomics and meeting you where you work.",
  },
];

const Features = () => {
  return (
    <section style={{ padding: "50px 0" }}>
      <div
        className="container"
        style={{ width: "100%", maxWidth: "1206px", margin: "0 auto", padding: "0 15px" }}
      >
        <Row gutter={[16, 16]} style={{ width: "100%", textAlign: "center" }}>
          {datas.map((data) => (
            <Col xs={24} sm={12} md={8} key={data.id}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  height: "210px",
                  borderRadius: "0",
                  border: "0",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                bodyStyle={{ padding: "0" }}
              >
                {data.icon}
                <Title
                  level={3}
                  style={{
                    fontWeight: "700",
                    fontSize: "24px",
                    lineHeight: "31px",
                    letterSpacing: "0.1px",
                    color: "#252B42",
                    margin: "10px 0",
                  }}
                >
                  {data.title}
                </Title>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0.2px",
                    color: "#737373",
                    textAlign: "center",
                  }}
                >
                  {data.text}
                </Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Features;
