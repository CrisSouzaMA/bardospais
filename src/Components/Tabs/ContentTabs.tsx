import { Tabs } from './index';
import {
  drinksData,
  foodData,
  groceryData,
  promotionsData,
} from '../../services/data/data';
import { Card } from '../Card';
import { FiGift, FiCoffee, FiShoppingBag, FiDollarSign } from 'react-icons/fi';
import { BiSolidDrink } from 'react-icons/bi';
import { IoFastFoodOutline } from 'react-icons/io5';

export const ContentTabs = () => {
  return (
    <div className="py-16">
      <Tabs.Root>
        <Tabs.Tab label="PROMOÇÕES" icon={<FiGift />}>
          {' '}
          {/* Adicione o ícone FiGift como prop 'icon' */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {promotionsData.map((promotion) => (
              <Card key={promotion.id} data={promotion} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="LANCHES" icon={<IoFastFoodOutline />}>
          {' '}
          {/* Adicione o ícone FiCoffee como prop 'icon' */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {foodData.map((food) => (
              <Card key={food.id} data={food} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="BEBIDAS" icon={<BiSolidDrink />}>
          {' '}
          {/* Adicione o ícone FiDollarSign como prop 'icon' */}
          <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-4">
            {drinksData.map((drink) => (
              <Card key={drink.id} data={drink} />
            ))}
          </div>
        </Tabs.Tab>
        <Tabs.Tab label="MERCEARIA" icon={<FiShoppingBag />}>
          {' '}
          {/* Adicione o ícone FiShoppingBag como prop 'icon' */}
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
