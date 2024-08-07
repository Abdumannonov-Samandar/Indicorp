import { Button, Flex} from "antd"
import Title from "antd/es/typography/Title"
import Text from "antd/es/typography/Text"
const Contact = () => {
  return (
    <section style={{ padding: '40px 0', background: '#FAFAFA' }}>
        <div className="container" style={{width: "100%",maxWidth: "1206px",margin: "0 auto",padding: "0 15px",}}>
            <Flex justify="space-between" align="center">
                <Flex vertical gap="10px">
                    <Title level={2} style={{fontSize: "24px",lineHeight: "32px",fontWeight: "700",color: "#252B42", margin: "0px 0",}}>Consulting Agency For Your Business</Title>
                    <Text style={{fontSize: "14px",lineHeight: "20px",fontWeight: "500",color: "#737373",}}>the quick fox jumps over the lazy dog</Text>
                </Flex>
                <Button size="large" style={{backgroundColor: "#FFA62B", borderRadius: "5px", color: "#fff"}}>Contact Us</Button>
            </Flex>
        </div>
    </section>
  )
}

export default Contact