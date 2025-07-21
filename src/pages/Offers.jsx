import { useEffect, useRef, useState } from 'react';


const Offers = () => {
  const containerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  
  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const scrollTop = containerRef.current.scrollTop || document.documentElement.scrollTop;
        setScrollPosition(scrollTop);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    { id: 1, title: 'Card 1', content: 'محتوای کارت اول' },
    { id: 2, title: 'Card 2', content: 'محتوای کارت دوم' },
    { id: 3, title: 'Card 3', content: 'محتوای کارت سوم' },
    { id: 4, title: 'Card 4', content: 'محتوای کارت چهارم' },
    { id: 5, title: 'Card 5', content: 'محتوای کارت پنجم' },
  ];

  return (
    <div className="cards-container" ref={containerRef}>
      {cards.map((card, index) => {
        // محاسبه افست بر اساس موقعیت اسکرول و اندیس کارت
        const offset = Math.min(50, Math.max(0, scrollPosition - index * 20));
        
        return (
          <div 
            key={card.id}
            className="stack-card"
            style={{
              transform: `translateY(${offset}px) scale(${1 - index * 0.05})`,
              zIndex: cards.length - index,
              opacity: 1 - (offset / 100)
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Offers;