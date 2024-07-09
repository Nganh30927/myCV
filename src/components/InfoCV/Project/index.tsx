
import styles from './Project.module.css'
import { profiles } from '../../../data/Profiles'
import {FaGithub } from 'react-icons/fa'
import MiniProject from './MiniProject';
type SingleProjectProp = {
  day: string;
  name: string;
  desc: string;
  link: string
}

const SingleProject = ({ props }: { props: SingleProjectProp }) => {
  return (
    //     <li className={styles.pject_list}>
    //     <p>{props.day}</p>
    //     <h3>{props.name}</h3>
    //     <strong>{props.desc}</strong>
    //     <p><span className='mr-2'><FaGithub/></span><a href="https://github.com/sonphan301002/SmartHome">{props.link}</a></p>
    // </li>

    <li className="m-5 ml-4">
      <div className="absolute w-4 h-4 bg-sky-500 rounded-full  -left-2 border border-white"></div>
      <time className="mb-1 text-sm font-normal leading-none text-sky-500">{props.day}</time>
      <h4 className="text-base font-bold uppercase text-gray-900 ">{props.name}</h4>
      <p className="mb-4 text-base font-normal text-gray-700 ">{props.desc}</p>
      <a target='_blank' href={props.link} className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700">Learn more 
    <span className='ml-2'>{<FaGithub/>}</span></a>
    </li>
  )
}

const Project = () => {
  return (
    <div className={styles.pject_wrapper}>
      <h2 className='flex'>Dự án đã thực hiện</h2>

      <ol className="relative border-l border-gray-300 mb-3">
        {
          profiles[0].project.map((prop) => <SingleProject key={`Workexperience_${prop.id}`} props={prop} />)
        }
      </ol>

      <>
      <MiniProject/>
      </>
    </div>
  )
}

export default Project