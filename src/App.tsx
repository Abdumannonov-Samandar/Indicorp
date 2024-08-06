import { Content } from "antd/es/layout/layout"
import Hero from "./components/Hero"
import SiteHeader from "./components/SiteHeader"
import { Layout } from "antd"
import Features from "./components/Features"

const App = () => {
  return (
    <Layout style={{width: "100%", backgroundImage: "url(/bg.png)", backgroundSize: "cover", margin: "0", padding: "0"}}>
      <SiteHeader/>
      <Content>
        <Hero/>
        <Features/>
      </Content>
    </Layout>
  )
}

export default App