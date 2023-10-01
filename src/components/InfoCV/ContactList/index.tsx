
import styles from './ContactList.module.css'
import { FaGlobe, FaLink } from 'react-icons/fa'
import { profiles } from '../../../data/Profiles'

type SingleContactProp = {
    icons?: React.ReactNode;
    desc: string
}

const SingleContact = ({ props }: { props: SingleContactProp }) => {
    return (
        <>

          
            <li>
                        <a href={props.desc} className="flex items-center p-3 text-base font-normal text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                            {<FaGlobe/>}
                            <span className="flex-1 ml-3 whitespace-nowrap">{props.icons}{props.desc}</span>
                        </a>
            </li>
        </>
    )
}


function ContactList() {
    const handleClick = (): void => {
        const modal = document.getElementById("crypto_modal");
        if (modal) {
            // Thực hiện các hành động sau khi nhấp vào nút
            // Ví dụ: hiển thị modal
            modal.style.display = "block";
        }
    };

    document.addEventListener("click", (event: Event) => {
        const target = event.target as HTMLElement;
        const modalId = target.getAttribute("data-modal-hide");
        if (modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = "none";
            }
        }
    });
    return (
        <div className={styles.contact_wrapper}>
            <button id={styles.btn_modal} type="button" onClick={handleClick} className="relative text-gray-900 bg-white hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-6 py-2.5  text-center mx-10 my-5 items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700">
                <span className='mr-2'>{<FaLink/>}</span> LIÊN HỆ
            </button>

            {/* <!-- Main modal --> */}
            <div  id='crypto_modal'  aria-hidden="true"  className=" fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div className={styles.child_modal}>
                    {/* <!-- Modal content --> */}
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button
                            type="button"
                            className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="crypto_modal"
                            onClick={(event) => {
                                const target = event.currentTarget as HTMLButtonElement;
                                const modalId = target.getAttribute("data-modal-hide");
                                if (modalId) {
                                    const modal = document.getElementById(modalId);
                                    if (modal) {
                                        modal.style.display = "none";
                                    }
                                }
                            }}
                        >
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        {/* <!-- Modal header --> */}
                        <div className="px-6 py-4 border-b rounded-t dark:border-gray-600">
                            <h3 className="flex text-base font-semibold text-gray-900 lg:text-xl dark:text-white">
                                <span className='mt-1 mr-2'>{<FaLink/>}</span> Liên Hệ
                            </h3>

                        </div>
                        {/* <!-- Modal body --> */}
                        <div className="p-6">
                            {/* <p className="text-sm font-normal text-gray-500 dark:text-gray-400">Connect with one of our available wallet providers or create a new one.</p> */}
                            <ul className='my-4 space-y-3'>
                                {
                                    profiles[0].contact.map((prop) => <SingleContact key={`ContactList_${prop.id}`} props={prop} />)
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactList