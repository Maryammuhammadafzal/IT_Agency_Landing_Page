
import '@fontsource/darker-grotesque/300.css';
import '@fontsource/darker-grotesque/400.css';
import '@fontsource/darker-grotesque/500.css';
import '@fontsource/darker-grotesque/600.css';
import '@fontsource/darker-grotesque/700.css';
import '@fontsource/darker-grotesque/800.css';
import '@fontsource/darker-grotesque/700.css';
import '@fontsource/montserrat/800.css';
import Button from '@mui/material/Button';
import HeroPage from './Hero/Page';
import TextSlider from '@/component/TextSlider';
import AboutPage from './About/Page';
import ServicesPage from './Services/Page';
import WorkPage from './Work/Page';
import Rating from '@/component/Rating';
export default function Home() {
  return (
    <div className="main w-full h-auto bg-white overflow-hidden">
 <HeroPage/>
 <TextSlider text="Digital Wallet"/>
 <AboutPage/>
 <TextSlider text="Elevate Your Brand,"/>
 <ServicesPage/>
 <WorkPage/>
 <TextSlider text="Our Achievements at a Glance:"/>
 <Rating/>
    </div>
  );
}
