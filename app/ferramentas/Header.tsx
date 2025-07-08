
interface Props {
  tool: string;
}

const Header = ({ tool }: Props) => {
  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-gray-800">
          Tools<span className="font-light text-gray-500">/{tool}</span>
        </span>
      </div>
      <nav className="flex items-center gap-6 text-gray-600">
        <a href="#" className="hover:text-purple-600 transition-colors">
          Share
        </a>
      </nav>
    </header>
  );
};

export default Header;
