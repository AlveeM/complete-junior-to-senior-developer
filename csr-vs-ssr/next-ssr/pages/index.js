import Link from 'next/link';

const Index = () => (
    <div>
        <h1>SSR Magician</h1>
        <Link href='/about'>
            <button>
                <a>About</a>
            </button>
        </Link>
        <Link href='/robots'>
            <button>
                <a>Robots</a>
            </button>
        </Link>
        {/* <a href="/about">About</a> */}
    </div>
);

export default Index;