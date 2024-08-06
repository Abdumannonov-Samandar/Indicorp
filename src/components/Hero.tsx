import { Button, Typography } from "antd"

const { Title, Text } = Typography

const Hero = () => {
  return (
    <section className="hero" style={{ padding: "80px 20px" }}>
      <div style={{width: "100%",maxWidth: "1206px",margin: "0 auto",padding: "0 15px",}}>
        <div className="hero__content"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "30px",
            width: "100%",
            maxWidth: "380px",
          }}
        >
          <Title
            level={1}
            className="title"
            style={{
              fontSize: "48px",
              lineHeight: "72px",
              fontWeight: "700",
              margin: "0",
              color: "#252B42",
            }}
          >
            EMPOWER YOUR BUSINESS
          </Title>
          <Text
          className="text"
            style={{
              fontSize: "20px",
              lineHeight: "30px",
              fontWeight: "500",
              color: "#666",
            }}
          >
            We know how large objects will act, but things on a small scale.
          </Text>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <Button
              type="primary"
              size="large"
              style={{
                background: "#FFA62B",
                border: "none",
                borderRadius: "37px",
                padding: "10px 36px",
              }}
            >
              Get Quote Now
            </Button>
            <Button
              size="large"
              style={{
                background: "transparent",
                border: "1px solid #00A0C1",
                color: "#00A0C1",
                borderRadius: "37px",
                padding: "10px 36px",
              }}
            >
              Learn More
            </Button>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hero {
            padding: 40px 20px
          }
          .title {
            font-size: 36px
            line-height: 48px
            padding-right: 70%
          }
          .hero div > p {
            font-size: 18px
            line-height: 28px
          }
          .hero div > div > button {
            padding: 8px 24px
          }
          .hero__content{
            align-items: start
          }
        }

        @media (max-width: 480px) {
          .title {
            font-size: 30px
            line-height: 42px
            padding-right: 0
          }
          .hero div > p {
            font-size: 16px
            line-height: 24px
            padding-right: 0
          }
          .hero div > div {
            flex-direction: column
            gap: 15px
          }
          .hero__content{
            align-items: center
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
