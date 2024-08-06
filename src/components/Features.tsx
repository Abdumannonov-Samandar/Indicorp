import {  Row, Col, Card, Typography } from "antd";
import { HomeOutlined, AppstoreOutlined, TeamOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const Features = () => {
  return (
    <section style={{ padding: "50px 0" }}>
      <div className="container" style={{ width: "100%" , maxWidth: "1206px", margin: "0 auto", padding: "0 15px"}}>
      <Row gutter={16}>
          <Col span={8}>
            <Card hoverable style={{ height: "210px"}}>
              <HomeOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Title level={4}>Digital Marketing</Title>
              <Text>We focus on ergonomics and 
              meeting you where you work. </Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ height: "210px"}}>
              <AppstoreOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Title level={4}>National top 50 firms</Title>
              <Text>Just type what's on your mind 
              and we'll get you there.</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ height: "210px"}}>
              <TeamOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Title level={4}>Digital Marketing</Title>
              <Text>the quick fox jumps over the 
              lazy dog</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Features