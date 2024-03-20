import { Tabs } from './index';
import {
  drinksData,
  foodData,
  groceryData,
  promotionsData,
} from '../../services/data/data';
import { Card } from '../Card';

export const ContentTabs = () => {
  return (
    <div className="py-16">
      <Tabs.Root>
        <Tabs.Tab label="PROMOÇÕES">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {promotionsData.map((promotion) => (
              <Card key={promotion.id} data={promotion} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="LANCHES">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {foodData.map((food) => (
              <Card key={food.id} data={food} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="BEBIDAS">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {drinksData.map((drink) => (
              <Card key={drink.id} data={drink} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="MERCEARIA">
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {groceryData.map((grocery) => (
              <Card key={grocery.id} data={grocery} />
            ))}
          </div>
        </Tabs.Tab>
      </Tabs.Root>
    </div>
  );
};
