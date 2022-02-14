import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

//import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>My-pizza sahifasiga hush kelibsiz</h1>
    <p>Mazali va sifatli pizzalar faqat bizda.</p>
    <p>Biz bilan boglaning. Tel: +998990 040 8008</p>
    <StaticImage
      src="../images/image-1.png"
      width={1170}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="main-image"
      style={{ marginBottom: `1.45rem` }}
    />

    <StaticImage
      src="../images/image-2.png"
      width={1170}
      quality={95}
      formats={["auto", "webp", "avif"]}
      alt="main-image"
      style={{ marginBottom: `1.45rem` }}
    />

   
  </Layout>
)

export default IndexPage
