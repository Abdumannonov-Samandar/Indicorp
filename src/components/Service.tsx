import { Flex } from "antd"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"
import Image from "antd/es/image"
import { FaUsers } from "react-icons/fa6";
import { LuClock4 } from "react-icons/lu";


const Service = () => {
  return (
    <section style={{ padding: "100px 0" }}>
        <div className="container" style={{width: "100%", maxWidth: "1206px", margin: "0 auto", padding: "0 15px"}}>
            <Flex vertical style={{maxWidth: "540px", margin: "0 auto", textAlign: "center", marginBottom: "100px"}}>
                <Title level={2} style={{fontSize: "40px", lineHeight: "57px", fontWeight: "700", color: "#252B42", marginBottom: "15px"}}>
                We are providing best 
                business service.
                </Title>
                <Text type="secondary" style={{fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#737373"}}>Problems trying to resolve the conflict between the two major realms 
                of Classical physics: Newtonian mechanics </Text>
            </Flex>
            <Flex align="start" gap={'120px'}>
                <Image src="/servece.png"  style={{width: "750px", height: "482px"}} />
                <Flex vertical style={{maxWidth: "333px"}}>
                    <Title level={3} style={{fontSize: "40px", lineHeight: "57px", fontWeight: "700", color: "#252B42", marginBottom: "10px", marginTop: "0px"}}>Most trusted in 
                    our field</Title>
                    <Text type="secondary" style={{fontSize: "16px", lineHeight: "24px", fontWeight: "500", color: "#737373", marginBottom: "50px"}}>Most calendars are designed for teams.
                    Slate is designed for freelancers who want a simple way to plan their schedule.</Text>
                        <Flex gap={'21px'}>
                            <FaUsers style={{width: '32px', height: '32px', color: "#FFA62B"}}/>
                            <Flex vertical gap={"10px"}>
                                    <Title level={4} style={{fontSize: "16px", lineHeight: "24px", fontWeight: "700", color: "#252B42", marginBottom: "5px", marginTop: "0px"}}>
                                    the quick fox jumps over the lazy 
                                    dog
                                    </Title>
                                    <Text type="secondary" style={{fontSize: "14px", lineHeight: "24px", fontWeight: "600", color: "#737373"}}>
                                    Things on a very small scale ...
                                    </Text>
                            </Flex>
                        </Flex>
                        <Flex gap={'21px'}>
                            <LuClock4 style={{width: '32px', height: '32px', color: "#FFA62B"}}/>
                            <Flex vertical gap={"10px"}>
                                    <Title level={4} style={{fontSize: "16px", lineHeight: "24px", fontWeight: "700", color: "#252B42", marginBottom: "5px", marginTop: "0px"}}>
                                    the quick fox jumps over the lazy 
                                    dog
                                    </Title>
                                    <Text type="secondary" style={{fontSize: "14px", lineHeight: "24px", fontWeight: "600", color: "#737373"}}>
                                    Things on a very small scale ...
                                    </Text>
                            </Flex>
                        </Flex>
                </Flex>
            </Flex>
        </div>
    </section>
  )
}

export default Service