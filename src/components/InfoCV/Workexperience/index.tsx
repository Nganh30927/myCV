
import styles from './Workexperience.module.css'
import { profiles } from '../../../data/Profiles'

type SingleWorkExperProp ={
    day: string;
    name: string;
    desc: string
}

const SingleWorkExper =({props}:{props: SingleWorkExperProp})=>{
    return(
        
      <li className="m-5 ml-6">
      <span className="absolute flex items-center justify-center  w-3 h-3 rounded-full -left-2 ring-8 ring-white">
          <svg className="w-3 h-3 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
          </svg>
      </span>
      <h4 className="mb-1 text-sm font-bold text-gray-900 ">{props.name}</h4>
      <time className="block mb-2 text-sm font-normal leading-none text-sky-700">{props.day}</time>
      <p className="text-base font-normal text-gray-900">{props.desc}</p>
    </li>
        
    )
}

const Workexperience = () => {
  return (
    <div className={styles.work_wrapper}>
        <h2 className='flex'>Kinh nghiệm làm việc</h2>

       <ol className="relative border-l border-gray-300 mt-5">
       {
                profiles[0].workexperience.map((prop) => <SingleWorkExper key={`Workexperience_${prop.id}`} props={prop}/>)
        } 
       </ol>
    </div>
  )
}

export default Workexperience
