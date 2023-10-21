import Card from '../components/Card';
import WizzAir from '../assets/images/WizzAir.png';
import AirAlbania from '../assets/images/AirAlbania.svg';
import Alitalia from '../assets/images/Alitalia.svg';
import Landways from '../assets/images/Landways.png';
import CarouselComponent from '../components/Carousel';
import Layout from '../layout/user/Layout';
import DescriptiveCard from '../components/DescriptiveCard';

const TestingCards = () => {
  return (
    <Layout>
      <div className="flex h-full flex-col align-center justify-center w-full">
        <div
          style={{
            backgroundImage: 'linear-gradient(#845EC2, #DCB0FF)',
            boxShadow: '0px 1px 17px 3px rgb(220, 176, 255)'
          }}>
          <div className="container mx-auto">
            <DescriptiveCard />
            <section
              style={{
                margin: '20px 0 20px 0'
              }}>
              <CarouselComponent />
            </section>
          </div>
        </div>
        <div className="flex flex-row justify-between px-2 py-10 h-full container mx-auto">
          <Card
            imageSrc={WizzAir}
            date="3 shkurt "
            title="Latest Wizz news"
            description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
            onClick={() => console.log('testing')}
          />
          <Card
            imageSrc={AirAlbania}
            date="3 shkurt "
            title="Latest Wizz news"
            description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
            onClick={() => console.log('testing')}
          />
          <Card
            imageSrc={Alitalia}
            date="3 shkurt "
            title="Latest Wizz news"
            description="CHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
            onClick={() => console.log('testing')}
          />
        </div>
      </div>
    </Layout>
  );
};
export default TestingCards;
