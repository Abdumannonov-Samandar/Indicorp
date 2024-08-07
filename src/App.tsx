import { Content } from "antd/es/layout/layout"
import Hero from "./components/Hero"
import SiteHeader from "./components/SiteHeader"
import Contentt from "./components/Content"
import Features from "./components/Features"
import Advice from "./components/Advice"
import Service from "./components/Service"
import Clients from "./components/Clients"
import Touch from "./components/Touch"
import { Layout } from "antd"

const App = () => {
  return (
    <>
    <Layout style={{width: "100%", backgroundImage: "url(/bg.png)", backgroundSize: "cover", margin: "0", padding: "0"}}>
      <SiteHeader/>
        <Hero/>
        <Features/>
    </Layout>
    <Content>
      <Contentt/>
      <Advice/>
      <Service/>
      <Clients/>
      <Touch/>
    </Content>
    
    </>
  )
}

export default App