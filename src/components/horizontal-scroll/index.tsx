import './styles.less'
const HorizontalScroll = () => {
   const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
   return (
      <ul className="horizontal-list w-[880px]">
         {arr.map((_, index) => (
            <li
               key={index}
               className="horizontal-list__item">
               <div className="horizontal-list__item__img">
                  <img
                     src="https://picsum.photos/1920"
                     alt=""
                  />
               </div>
            </li>
         ))}
      </ul>
   )
}

export default HorizontalScroll
