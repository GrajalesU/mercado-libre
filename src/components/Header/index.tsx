import Nav from "./Nav";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-yellow">
      <div className="px-[156px] pb-2">
        <Search />
        <Nav />
      </div>
    </header>
  );
}
