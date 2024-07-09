
import { profiles } from "../../../data/Profiles";

type SingleContactProp = {
  desc: string;
};

const SingleContact = ({ props }: { props: SingleContactProp }) => {
  return (
    <>
      <li>
        <a
          href={props.desc}
          className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white"
        >
          <span className="flex-1 ml-3 whitespace-nowrap">
            {props.desc}
          </span>
        </a>
      </li>
    </>
  );
};

function ContactList() {
  return (
    <div>
      {/* <!-- Main modal --> */}
   
        <div>
          {/* <!-- Modal content --> */}
          <div className="">
            {/* <!-- Modal body --> */}
            <div className="p-6">
              {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p> */}
              <ul className="my-4 space-y-3">
                {profiles[0].contact.map((prop) => 
                  <SingleContact key={`ContactList_${prop.id}`} props={prop} />)
                }
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
  );
}

export default ContactList;
