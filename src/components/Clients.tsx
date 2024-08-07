import { Button, Flex, Image, Input } from "antd"
import Title from "antd/es/typography/Title"
import { MdEmail } from "react-icons/md"

const Clients = () => {
  return (
    <section style={{ padding: "50px 0 20px 0", backgroundImage: "linear-gradient(to bottom, #FAFAFA 75%, #252B42 25%)"  }}>
        <div className="container" style={{ width: "100%", maxWidth: "1206px", margin: "0 auto", padding: "0 15px" }}>
            <Flex justify="space-between" align="center" wrap style={{ paddingBottom: "50px" }}>
                <Image preview={false} src="/brands_hooli.svg" />
                <Image preview={false} src="/brands_lyft.svg" />
                <Image preview={false} src="/smile-2.svg" />
                <Image preview={false} src="/smile.svg" />
                <Image preview={false} src="/reddit-alien.svg" />
                <Image preview={false} src="/piper-hat.svg" />
            </Flex>
            <Flex justify="space-between" align="center" wrap style={{ padding: "30px 50px", backgroundColor: "#16697A", borderRadius: "2px" }} >
                <Title level={2} style={{ fontSize: "24px", lineHeight: "32px", fontWeight: "700", color: "#fff" }}>Subscribe For Latest 
                Newsletter</Title>
                <Flex align="center" gap="0px">
                    <Input prefix={<MdEmail style={{ width: "20px", height: "20px", color: "#737373" }} />} type="email" placeholder="Enter your email" style={{ width: "300px", height: "40px", borderTopRightRadius: "0px", borderBottomRightRadius: "0px", background: "#fff", padding: "0 15px", color: "#737373" }} />
                    <Button style={{ width: "120px", height: "40px", borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px", background: "#1890FF", backgroundColor: "#FFA62B", color: "#fff", borderLeft: "none" }}>Subscribe</Button>
                </Flex>
            </Flex>
        </div>
    </section>
  )
}

export default Clients