import { Card, Col, Statistic } from "antd"
import Flex from "antd/es/flex"
import Row from "antd/es/row"
// import { Typography } from "antd"
import Text from "antd/es/typography/Text"
import Title from "antd/es/typography/Title"
import { PiUsersThreeBold } from "react-icons/pi";
import { MdOutlineSettingsSuggest } from "react-icons/md"
import { FaAward } from "react-icons/fa"
import { PiSuitcaseSimpleBold } from "react-icons/pi";


const Content = () => {
  return (
    <section style={{ padding: "100px 0", background: "#FAFAFA" }}>
      <div className="container" style={{ maxWidth: "1206px", margin: "0 auto", padding: "0 15px" }}>
        <Flex vertical={true} justify="center" align="center" gap={'50px'}>
        <Flex vertical={true} justify="center" align="center" style={{ width: "100%", maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
          <Title level={2} style={{ fontSize: "48px", lineHeight: "72px", fontWeight: "700", margin: "0", color: "#252B42", marginBottom: "10px" }}>WHY CHOOSE US</Title>
          <Text style={{ fontSize: "20px", lineHeight: "30px", fontWeight: "500", color: "#737373" }}>Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </Text>
        </Flex>
        <Row gutter={16} style={{ width: "100%", maxWidth: "1034px", margin: "0 auto", textAlign: "center" }}>
          <Col span={6}>
            <Card hoverable style={{ width: "230px", background: '#fff', borderRadius: '0', border: '0', padding: '0'}}>
              <PiUsersThreeBold style={{ fontSize: "48px", color: "#1890ff" }} />
              <Statistic  value={3} suffix={'K'} valueStyle={{fontSize: '40px', lineHeight: '52px', color: '#252B42', fontWeight: '700', margin: '10px 0'}}/>
              <Title level={5} style={{fontWeight: '700', fontSize: '16px', lineHeight:'24px', letterSpacing: '0.1px', margin: '0 0', color: '#979797'}}>CASES DONE</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: "230px", background: '#fff', borderRadius: '0', border: '0', padding: '0'}}>
              <MdOutlineSettingsSuggest style={{ fontSize: "48px", color: "#1890ff" }} />
              <Statistic  value={45} suffix={'+'} valueStyle={{fontSize: '40px', lineHeight: '52px', color: '#252B42', fontWeight: '700', margin: '10px 0'}}/>
              <Title level={5} style={{fontWeight: '700', fontSize: '16px', lineHeight:'24px', letterSpacing: '0.1px', margin: '0 0', color: '#979797'}}>HAPPY CUSTOMERS</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: "230px", background: '#fff', borderRadius: '0', border: '0', padding: '0'}}>
              <FaAward style={{ fontSize: "48px", color: "#1890ff" }} />
              <Statistic  value={12} suffix={'+'} valueStyle={{fontSize: '40px', lineHeight: '52px', color: '#252B42', fontWeight: '700', margin: '10px 0'}}/>
              <Title level={5} style={{fontWeight: '700', fontSize: '16px', lineHeight:'24px', letterSpacing: '0.1px', margin: '0 0', color: '#979797'}}>AWARD WINNING</Title>
            </Card>
          </Col>
          <Col span={6}>
            <Card hoverable style={{ width: "230px", background: '#fff', borderRadius: '0', border: '0', padding: '0'}}>
              <PiSuitcaseSimpleBold style={{ fontSize: "48px", color: "#1890ff" }} />
              <Statistic  value={1.5} suffix={'K'} valueStyle={{fontSize: '40px', lineHeight: '52px', color: '#252B42', fontWeight: '700', margin: '10px 0'}}/>
              <Title level={5} style={{fontWeight: '700', fontSize: '16px', lineHeight:'24px', letterSpacing: '0.1px', margin: '0 0', color: '#979797'}}>CASES DONE</Title>
            </Card>
          </Col>
        </Row>
        </Flex>
      </div>
    </section>
  )
}

export default Content