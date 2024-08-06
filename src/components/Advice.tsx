import { Typography, Card, Col, Row } from 'antd'
import Media from '/media.jpg'
import Cover from '/cover.jpg'
import Media_2 from '/media-2.jpg'
import Media_3 from '/media-3.jpg'

const { Title, Text } = Typography

const mediaDatas = [
  {
    id: 1,
    title: 'A single source of truth',
    text: 'Newton thought that light was made up of particles, but then it',
    img: Media,
  },
  {
    id: 2,
    title: 'Fastest way to organize',
    text: '“Quantum mechanics” is the description of the behaviour of',
    img: Cover,
  },
  {
    id: 3,
    title: 'Fastest way to take action',
    text: 'They describe a universe consisting of bodies moving',
    img: Media_2,
  },
  {
    id: 4,
    title: 'Work better together',
    text: 'They finally obtained a consistent description of the behaviour',
    img: Media_3,
  },
]

const AdviceCard = ({ title, text, img }: { title: string; text: string; img: string }) => (
  <Card
    hoverable
    style={{
      width: '100%',
      height: '100%',
      border: 'none',
      display: 'flex',
      flexDirection: 'column-reverse',

    
    }}
    cover={
      <img
        src={img}
        alt={title}
        style={{
          borderRadius: '0px',
          width: '100%',
          height: 'auto',
          objectFit: 'cover',
        }}
      />
    }
  >
      <Title
        level={3}
        style={{
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '24px',
          letterSpacing: '0.1px',
          marginBottom: '15px',
          color: '#252B42',
        }}
      >
        {title}
      </Title>
      <Text
        style={{
          fontWeight: 500,
          fontSize: '14px',
          lineHeight: '20px',
          letterSpacing: '0.2px',
          color: '#737373',
        }}
      >
        {text}
      </Text>
  </Card>
)

const Advice = () => {
  return (
    <section style={{ padding: '100px 0 80px 0', background: '#FAFAFA' }}>
      <div
        className="container"
        style={{
          width: '100%',
          maxWidth: '1206px',
          margin: '0 auto',
          padding: '0 15px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            maxWidth: '700px',
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: '50px',
          }}
        >
          <Title
            level={2}
            style={{
              fontWeight: 700,
              fontSize: '40px',
              lineHeight: '57px',
              letterSpacing: '0.1px',
              color: '#252B42',
              marginBottom: '10px',
            }}
          >
            Practice Advice
          </Title>
          <Text
            style={{
              fontWeight: 500,
              fontSize: '14px',
              lineHeight: '20px',
              letterSpacing: '0.2px',
              color: '#737373',
            }}
          >
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </Text>
        </div>
        <Row
          gutter={[16, 16]}
          style={{
            textAlign: 'center',
          }}
        >
          {mediaDatas.map((data) => (
            <Col
              xs={24}
              sm={12}
              md={8}
              lg={6}
              key={data.id}
              style={{ display: 'flex', justifyContent: 'center' }}
            >
              <AdviceCard title={data.title} text={data.text} img={data.img} key={data.id} />
            </Col>
          ))}
        </Row>
      </div>
    </section>
  )
}

export default Advice
