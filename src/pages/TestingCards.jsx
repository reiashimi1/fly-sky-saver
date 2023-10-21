import Card from '../components/Card';
import WizzAir from '../assets/images/WizzAir.svg';
import AirAlbania from '../assets/images/AirAlbania.svg';
import Alitalia from '../assets/images/Alitalia.svg';
import Landways from '../assets/images/Landways.png';
import CarouselComponent from '../components/Carousel';

const TestingCards = () => {
  return (
    <div className="flex flex-col">
      <section
        style={{
          margin: '20px 0 20px 0'
        }}>
        <CarouselComponent />
      </section>
      <div className="flex flex-row space-x-6">
        <Card
          imageSrc={WizzAir}
          date="3 shkurt "
          title="Latest Wizz news"
          description="cHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
        <Card
          imageSrc={AirAlbania}
          date="3 shkurt "
          title="Latest Wizz news"
          description="cHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
        <Card
          imageSrc={Alitalia}
          date="3 shkurt "
          title="Latest Wizz news"
          description="cHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
        <Card
          imageSrc={Landways}
          date="3 shkurt "
          title="Latest Wizz news"
          description="cHECK OUT HERE THE LATEST NEWS FROM WIZZAIR"
          onClick={() => console.log('testing')}
        />
      </div>
    </div>
  );
};
export default TestingCards;
