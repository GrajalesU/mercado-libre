import { Nav } from './Nav';
import { Search } from './Search';

export const Header = () => (
  <header className="bg-yellow">
  <div className="max-w-[1024px] mx-auto pb-2">
    <Search />
    <Nav />
  </div>
</header>
);
