
import { FaCircle, FaPuzzlePiece } from 'react-icons/fa';
import styles from './Expertise.module.css';
import { profiles } from '../../../data/Profiles'



type SingleExpertiseProp ={
    exname: string;
    level: number
}

const SingleExpertise = ({props}: { props: SingleExpertiseProp }) => {
  const circles = [...Array(5)].map((_, index) => (
    <FaCircle
      key={index}
      className={index < (props.level || 0) ? styles.filled : styles.empty}
    />
  ));

  return (
    <li className='flex  m-1'>
      <strong className={styles.name}>{props.exname}</strong>
      <span className={styles.icons}>{circles}</span>
    </li>
  );
};

function Expertise() {
  return (
    <div className={styles.exper_wrapper}>
      <h2 className='flex'><span className='mt-1 mr-2'><FaPuzzlePiece/></span>Các kỹ năng</h2>
      <ul className={styles.skill_bar}>
          {
            profiles[0].experience.map((prop) => <SingleExpertise key={`Expertise_${prop.id}`} props={prop}/>)
          }
      </ul>
    </div>
  );
}

export default Expertise;