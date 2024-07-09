
import styles from './Lybraries.module.css';
import { profiles } from '../../../../data/Profiles'




type SingleLybrariesProp ={
  img: string;
}



const SingleLibraries = ({props}: { props: SingleLybrariesProp }) => {

  return (
    <li className=''>
      <img className={styles.img_ly} src={props.img}/>
    </li>
  );
};
function Lybraries() {
  return (
    <>
     <h4>Thư viện:</h4>
      <ul className={styles.set_library}>
          {
            profiles[0].libraries.map((prop) => <SingleLibraries key={`Libraries_${prop.id}`} props={prop}/>)
          }
      </ul>
    </>
  );
}

export default Lybraries;