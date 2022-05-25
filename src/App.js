import { NumberedList } from './NumberedList';
import { LargePersonListItem } from './peoples/LargePersonListItem';
import { SmallPersonListItem } from './peoples/SmallPersonListItem';
import { LargeProductListItem } from './products/LargeProductListItem';
import { SmallProductListItem } from './products/SmallProductListItem';
import { RegularList } from './RegularList';

const people = [{
	name: 'John Doe',
	age: 54,
	hairColor: 'brown',
	hobbies: ['swimming', 'bicycling', 'video games'],
}, {
	name: 'Brenda Smith',
	age: 33,
	hairColor: 'black',
	hobbies: ['golf', 'mathematics'],
}, {
	name: 'Jane Garcia',
	age: 27,
	hairColor: 'blonde',
	hobbies: ['biology', 'medicine', 'gymnastics'],
}];

const products = [{
	name: 'Flat-Screen TV',
	price: '$300',
	description: 'Huge LCD screen, a great deal',
	rating: 4.5,
}, {
	name: 'Basketball',
	price: '$10',
	description: 'Just like the pros use',
	rating: 3.8,
}, {
	name: 'Running Shoes',
	price: '$120',
	description: 'State-of-the-art technology for optimum running',
	rating: 4.2,
}];

function App() {
  return (
    <>
    <h1>Small Person Item List</h1>
    <RegularList items={people} resourceName = 'person' itemComponent={SmallPersonListItem} />
    <h1>Large Person Item List</h1>
    <RegularList items={people} resourceName = 'person' itemComponent={LargePersonListItem} />
    <h1>Small Product List Item</h1>
    <NumberedList items={products} resourceName = 'product' itemComponent={SmallProductListItem} />
    <h1>Large Product List Item</h1>
    <NumberedList items={products} resourceName = 'product' itemComponent={LargeProductListItem} />
    
    </>

  )
}

export default App;
