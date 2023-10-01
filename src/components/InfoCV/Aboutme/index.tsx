
import styles from './Aboutme.module.css'
import { profiles } from '../../../data/Profiles'
import {FaPenNib} from 'react-icons/fa'

type SingleAboutmeProp ={
  title: string;
}

const SingleAboutme = ({props}: {props : SingleAboutmeProp})=> {
    return (
        <li>
            <p className={styles.title}>{props.title}</p>
        </li>
    )
}

function Aboutme() {
  return (
    <div className={styles.about_wrapper}>
        <h2 className='flex'><span className='mt-1 mr-2'><FaPenNib/></span>Giới Thiệu</h2>
        <ul>
            {
              profiles[0].aboutme.map((prop) => <SingleAboutme key={`Aboutme_${prop.id}`} props={prop}/>)
            }
        </ul>
    </div>
  )
}

export default Aboutme