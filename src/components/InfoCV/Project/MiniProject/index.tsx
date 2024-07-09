

import { profiles } from '../../../../data/Profiles'


type SingleMiniProjectProp = {
  name: string;
  link: string
}

const SingleMiniProject = ({ props }: { props: SingleMiniProjectProp }) => {
  return (
    <a target='_blank' href={props.link} className="inline-flex items-center rounded-md bg-sky-300 px-2 py-2 text-sm font-medium text-black ring-1 ring-inset ring-gray-500/10">
    {props.name}
  </a>
  )
}

const MiniProject = () => {
  return (
        
    <>
    <h3 className='uppercase mb-3'>Một số dự án nhỏ</h3>
      <div className='grid grid-cols-4 gap-4'>
     
     {
          profiles[0].miniproject.map((prop) => <SingleMiniProject key={`Workexperience_${prop.id}`} props={prop} />)
        }
      </div>
    </>
  )
}

export default MiniProject