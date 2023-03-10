import Nav from "./Nav";
import Search from "./Search";

export default function Header() {
  return (
    <header className="bg-yellow">
      <div className="max-w-[1184px] mx-auto pb-2">
        <Search />
        <Nav />
      </div>
    </header>
  );
}
