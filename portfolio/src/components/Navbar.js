import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className='p-4'>
            <ul className='flex items-center w-full'>
                <li className='mr-auto'>
                    <Link href="/">
                        Logo
                    </Link>
                </li>
                <div className='ml-auto flex space-x-4'>
                    <li>
                        <Link href="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="/resume">
                            Resume
                        </Link>
                    </li>
                </div>

            </ul>
        </nav>
    );
};

export default Navbar;
