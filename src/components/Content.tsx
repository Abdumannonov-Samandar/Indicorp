import { Card, Col, Row, Statistic } from "antd";
import Text from "antd/es/typography/Text";
import Title from "antd/es/typography/Title";
import { PiUsersThreeBold } from "react-icons/pi";
import { IoMdHappy } from "react-icons/io";
import { FaAward } from "react-icons/fa";
import { PiSuitcaseSimpleBold } from "react-icons/pi";

const customersData = [
  {
    id: 1,
    icon: <PiUsersThreeBold style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    value: 3,
    suffix: "K",
    title: "CASES DONE",
  },
  {
    id: 2,
    icon: <IoMdHappy style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    value: 45,
    suffix: "+",
    title: "HAPPY CUSTOMERS",
  },
  {
    id: 3,
    icon: <FaAward style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    value: 12,
    suffix: "+",
    title: "AWARD WINNING",
  },
  {
    id: 4,
    icon: <PiSuitcaseSimpleBold style={{ width: "48px", height: "48px", color: "#1890ff" }} />,
    value: 1.5,
    suffix: "K",
    title: "HOURS OF WORK",
  },
];

const Content = () => {
  return (
    <section style={{ padding: "100px 0", background: "#FAFAFA" }}>
      <div
        className="container"
        style={{ width: "100%", maxWidth: "1206px", margin: "0 auto", padding: "0 15px" }}
      >
        <div
          style={{
            textAlign: "center",
            maxWidth: "640px",
            margin: "0 auto",
            marginBottom: "50px",
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
            WHY CHOOSE US
          </Title>
          <Text
            style={{
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: "500",
              color: "#737373",
            }}
          >
            Problems trying to resolve the conflict between the two major
            realms of Classical physics: Newtonian mechanics{" "}
          </Text>
        </div>

        <Row
          gutter={[16, 16]}
          justify="center"
          style={{
            textAlign: "center",
          }}
        >
          {customersData.map((item) => (
            <Col xs={24} sm={12} md={12} lg={6} key={item.id}>
              <Card
                hoverable
                style={{
                  width: "100%",
                  height: "260px",
                  background: "#fff",
                  border: "0",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                bodyStyle={{ padding: "0" }}
              >
                {item.icon}
                <Statistic
                  value={item.value}
                  suffix={item.suffix}
                  valueStyle={{
                    fontSize: "40px",
                    lineHeight: "52px",
                    color: "#252B42",
                    fontWeight: "700",
                    margin: "10px 0",
                  }}
                />
                <Title
                  level={5}
                  style={{
                    fontWeight: "700",
                    fontSize: "16px",
                    lineHeight: "24px",
                    letterSpacing: "0.1px",
                    margin: "0",
                    color: "#979797",
                    textAlign: "center",
                  }}
                >
                  {item.title.toUpperCase()}
                </Title>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};

export default Content;
