
import styles from './Expertise.module.css';
import { profiles } from '../../../data/Profiles'
import Lybraries from './Lybrary';



type SingleExpertiseProp ={
      img: string;
}



const SingleExpertise = ({props}: { props: SingleExpertiseProp }) => {

  return (
    <li className='w-24 '>
      <img className="" src={props.img}/>
    </li>
  );
};



function Expertise() {
  return (
    <div className={styles.exper_wrapper}>
     <h2 className=''>Kỹ năng nghề nghiệp</h2>
     
     <h4>Công nghệ:</h4>
      <ul className={styles.set_Image}>
          {
            profiles[0].technologys.map((prop) => <SingleExpertise key={`Expertise_${prop.id}`} props={prop}/>)
          }
      </ul>

      <Lybraries/>
    </div>
  );
}

export default Expertise;