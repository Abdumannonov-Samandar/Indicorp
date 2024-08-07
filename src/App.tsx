import { Content } from "antd/es/layout/layout"
import Hero from "./components/Hero"
import SiteHeader from "./components/SiteHeader"
import Contentt from "./components/Content"
// import { Layout } from "antd"
import Features from "./components/Features"
import Advice from "./components/Advice"
import Service from "./components/Service"
import Clients from "./components/Clients"

const App = () => {
  return (
    <>
    <div style={{width: "100%", backgroundImage: "url(/bg.png)", backgroundSize: "cover", margin: "0", padding: "0"}}>
      <SiteHeader/>
        <Hero/>
        <Features/>
    </div>
    <Content>
      <Contentt/>
      <Advice/>
      <Service/>
      <Clients/>
    </Content>
    
    </>
  )
}

export default App