
import { profiles } from "../../../data/Profiles";
import styles from './Introduce.module.css'

type SingleIntroProps={
    imgUser?: string;
    uname: string;
    profession: string;
}

const SingleIntro = ({intros}: {intros : SingleIntroProps}) =>{
    return(
        // <div className="">
        //     <div className="thumb">
        //         <img src={intros.imgUser} alt="" />
        //     </div>
        //     <div className={styles.content}>
        //         <h2>{intros.uname}</h2>
        //         <h4>{intros.profession}</h4>
        //     </div>
        // </div>
        <div className="text-center">
        <img
            src={intros.imgUser}
            className="mx-auto mb-4 w-32 rounded-lg"
            alt="Avatar" />
        <h2 className="mb-2 text-xl font-medium leading-tight">{intros.uname}</h2>
        <p className="text-neutral-500 dark:text-neutral-400">{intros.profession}</p>
        </div>
    )
}

const Introduce = () => {
  return (
    <div className={styles.intro_wrapper}>
        {
            profiles.map((intro)=> <SingleIntro key={`Introduce_${intro.id}`} intros={profiles[0]}/>)
        }
    </div>
  )
}

export default Introduce