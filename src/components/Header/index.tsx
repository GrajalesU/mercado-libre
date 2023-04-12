import { Nav } from './Nav';
import { Search } from './Search';

export const Header = () => (
  <header className='bg-yellow'>
    <div className='mx-auto max-w-[1184px] pb-2'>
      <Search />
      <Nav />
    </div>
  </header>
);
