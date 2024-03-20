import { Card } from '../../Components/Card';
import Footer from '../../Components/Footer/Footer';
import { Header } from '../../Components/Header/Header';
import { Tab, Tabs } from '../../Components/Tabs';
import { drinksData, foodData, groceryData, promotionsData } from '../../data/data';

const Home = () => {
  return (
    <div>
      <Header />
      <div className="py-16">
        <Tabs>
          <Tab label="PROMOÇÕES">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {promotionsData.map((promotion) => (
                <Card
                  key={promotion.id}
                  image={promotion.image}
                  name={promotion.name}
                  description={promotion.description}
                  price={+promotion.price}
                />
              ))}
            </div>
          </Tab>
          <Tab label="LANCHES">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {drinksData.map((drink) => (
                <Card
                  key={drink.id}
                  image={drink.image}
                  name={drink.name}
                  description={drink.description}
                  price={+drink.price}
                />
              ))}
            </div>
          </Tab>
          <Tab label="BEBIDAS">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {foodData.map((food) => (
                <Card
                  key={food.id}
                  image={food.image}
                  name={food.name}
                  description={food.description}
                  price={food.price}
                />
              ))}
            </div>
          </Tab>
          <Tab label="MERCEARIA">
            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
              {groceryData.map((grocery) => (
                <Card
                  key={grocery.id}
                  image={grocery.image}
                  name={grocery.name}
                  description={grocery.description}
                  price={+grocery.price}
                />
              ))}
            </div>
          </Tab>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
