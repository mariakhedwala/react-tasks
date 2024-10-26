import { useRef } from 'react';

export default function CatFriends() {
    const listRef = useRef(null);

    function scrollToIndex(index) {
        const listNode = listRef.current;
        // This line assumes a particular DOM structure:
        const imgNode = listNode.querySelectorAll('li > img')[index];
        imgNode.scrollIntoView({
            behavior: 'smooth',
            block: 'nearest',
            inline: 'center'
        });
    }

    return (
        <>
            <h3 className='mt-5'>Scrolling into view by react refs</h3>
            <nav className='mt-2'>
                <button onClick={() => scrollToIndex(0)}>
                    Neo
                </button>
                <button onClick={() => scrollToIndex(1)}>
                    Millie
                </button>
                <button onClick={() => scrollToIndex(2)}>
                    Bella
                </button>
            </nav>
            <div className='view-wrap'>
                <ul ref={listRef}>
                    <li>
                        <img
                            src="https://placecats.com/neo/300/200"
                            alt="Neo"
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/millie/200/200"
                            alt="Millie"
                        />
                    </li>
                    <li>
                        <img
                            src="https://placecats.com/bella/199/200"
                            alt="Bella"
                        />
                    </li>
                </ul>
            </div>
        </>
    );
}