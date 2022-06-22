import { Monster } from '../../App';
import Card from '../card/card.component'

import './card-list.styles.css';
import './card.styles.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => {
  let i = 0
  return (
    <div className='card-list'>
      {
        monsters.map(monster => <Card monster={monster} key={i++} />)
      }
    </div>
  );
}

export default CardList;

// class CardList extends Component {

//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className='card-list'>
//         {
//           monsters.map(monster => <Card monster={monster} />)
//         }
//       </div>
//     )
//   }
// }

// export default CardList;