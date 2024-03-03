import Link from 'next/link';

export const Header = () => {
  return (
    <header className="mb-2 border-b-2">
      <h1 className="text-lg uppercase">Header</h1>
      <nav className="flex list-none flex-row">
        <li className="mr-4">
          <Link href="/">Home</Link>
        </li>
        <li className="mr-4">
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </nav>
    </header>
  );
};
