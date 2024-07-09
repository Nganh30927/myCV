
import styles from './Education.module.css'
import { profiles } from '../../../data/Profiles'

type SingleEducationProp = {
    day: string;
    name: string;
    title: string
}
const SingleEducation = ({ props }: { props: SingleEducationProp }) => {
    return (
        //     <li className={styles.edu_list}>
        //         <p>{props.day}</p>
        //         <h3>{props.name}</h3>
        //         <strong>{props.title}</strong>
        //   </li >


        <li>
            <div className="flex-start flex items-center">
                <div className="-ml-[7px] -mt-2 mr-3 flex h-3 w-3 items-center justify-center rounded-full bg-blue-700"></div>
                <h4 className="-mt-2 text-sm font-semibold">{props.name}</h4>
            </div>
            <div className="mb-4 mt-1 ml-4 pb-4">
                <p className="text-sm w-32 py-1 rounded-xl text-center text-white bg-blue-500 ">
                    {props.day}
                </p>
                <p className="text-base mb-4 mt-2 text-neutral-900">
                    {props.title}
                </p>

            </div>
        </li>


    )
}

const Education = () => {
    return (
        <div className={styles.edu_wrapper}>
            <h2 className=''>Học vấn</h2>
            <ol className="border-l-2 border-blue-400 mt-5">
                {
                    profiles[0].education.map((prop) => <SingleEducation key={`Education_${prop.id}`} props={prop} />)
                }
            </ol>
        </div>
    )




}

export default Education