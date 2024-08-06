import {  Row, Col, Card, Typography } from "antd";
import { HomeOutlined, AppstoreOutlined, TeamOutlined } from "@ant-design/icons";
const { Title, Text } = Typography;

const Features = () => {
  return (
    <section style={{ padding: "50px 0" }}>
      <div className="container" style={{ width: "100%" , maxWidth: "1206px", margin: "0 auto", padding: "0 15px"}}>
      <Row gutter={16} style={{ width: "100%", textAlign: "center"}}>
          <Col span={8}>
            <Card hoverable style={{ height: "210px", borderRadius: '0', border: '0' }}>
              <HomeOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Title level={3} style={{fontWeight: '700', fontSize:'24px', lineHeight: '31px', letterSpacing: '0.1px', color: '#252B42'}}>Digital Marketing</Title>
              <Text style={{fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', color: '#737373'}}>We focus on ergonomics and 
              meeting you where you work. </Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ height: "210px", borderRadius: '0', border: '0' }}>
              <AppstoreOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Title level={3} style={{fontWeight: '700', fontSize:'24px', lineHeight: '31px', letterSpacing: '0.1px', color: '#252B42'}}>National top 50 firms</Title>
              <Text style={{fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', color: '#737373'}}>Just type what's on your mind 
              and we'll get you there.</Text>
            </Card>
          </Col>
          <Col span={8}>
            <Card hoverable style={{ height: "210px", borderRadius: '0', border: '0' }}>
              <TeamOutlined style={{ fontSize: "48px", color: "#1890ff" }} />
              <Title level={3} style={{fontWeight: '700', fontSize:'24px', lineHeight: '31px', letterSpacing: '0.1px', color: '#252B42'}}>Digital Marketing</Title>
              <Text style={{fontWeight: '500', fontSize: '14px', lineHeight: '20px', letterSpacing: '0.2px', color: '#737373'}}>the quick fox jumps over the 
              lazy dog</Text>
            </Card>
          </Col>
        </Row>
      </div>
    </section>
  )
}

export default Features