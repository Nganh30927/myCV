
import styles from './Aboutme.module.css'
import { profiles } from '../../../data/Profiles'

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
        <h2 className='flex'>Giới Thiệu</h2>
        <ul>
            {
              profiles[0].aboutme.map((prop) => <SingleAboutme key={`Aboutme_${prop.id}`} props={prop}/>)
            }
        </ul>
    </div>
  )
}

export default Aboutme