import HomeHero from './HomeHero';
import HomeFeatures from './HomeFeatures';
import HomeServices from './HomeServices';
import HomeProcess from './HomeProcess';
import HomeIntegrations from './HomeIntegrations';
import HomePricing from './HomePricing';
import HomeTestimonials from './HomeTestimonials';
import HomeBlog from './HomeBlog';
import HomeFAQ from './HomeFAQ';
import HomeCTA from './HomeCTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <HomeHero />
      <HomeFeatures />
      <HomeServices />
      <HomeProcess />
      {/* <HomeIntegrations /> */}
       <HomeTestimonials />
      <HomeFAQ />

      {/* <HomePricing />
     
      <HomeBlog />
      <HomeFAQ />
      <HomeCTA /> */}
      {/* <Footer /> */}
    </main>
  );
}
