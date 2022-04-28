import Card from '../card/card.component'

import './card-list.styles.css';
import './card.styles.css';

const CardList = ({ monsters }) => {
  return (
    <div className='card-list'>
      {
        monsters.map(monster => <Card monster={monster} />)
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