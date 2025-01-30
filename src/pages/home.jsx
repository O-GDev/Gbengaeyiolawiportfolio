import GetInTouch from "../components/about/getInTouch"
import MyExperience from "../components/about/myExperience"
import ProfessionalAff from "../components/about/professionalAff"
import Recognitions from "../components/awards/recognitions"
import BlogList from "../components/blog/blogList"
import ContactHero from "../components/contact/hero"
import HomeHero from "../components/home/hero"
import HomeProfile from "../components/home/profile"
import Testimonials from "../components/home/testimonials"
import Layout from "../layout"

function Home() {
  return (
    <Layout>
      <HomeHero/>
      <HomeProfile/>
      <MyExperience/>
      <ContactHero />
      <ProfessionalAff />
      <Recognitions />
      <BlogList />
      <Testimonials/>
      <GetInTouch/>
    </Layout>
  )
}

export default Home