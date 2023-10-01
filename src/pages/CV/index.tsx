
import ContactList from '../../components/InfoCV/ContactList'
import styles from './cv.module.css'
import Expertise from '../../components/InfoCV/Expertise'
import Aboutme from '../../components/InfoCV/Aboutme'
import Introduce from '../../components/InfoCV/Introduce'
import Education from '../../components/InfoCV/Education'
import Workexperience from '../../components/InfoCV/Workexperience'
import Project from '../../components/InfoCV/Project'

const Cv = () => {
  return (
    <main className={`${styles.container}`}>
       <div className={`${styles.main_wrapper}`}>
        <aside className={styles.col_left}>
                {/* BEGIN Component Photo */}
                <div className={styles.photo_wrapper}>
                    <img src="" alt="" />
                </div>
                <div className={styles.left_prof}>
                <Introduce/>
                <ContactList/>
                  {/* END Component Contact */}
            
                </div>
          </aside>
          <aside className={styles.col_right}>
           
                <section>
                  <Aboutme/>
                </section>
                 <section className={styles.bg_sec}>
                 <Education/>
                 </section>
                 <section>
                 <Expertise/>
                 </section>
                 <section className={styles.bg_sec}>
                 <Workexperience/>
                 </section>
                 <section>
                 <Project/>
                 </section>
           
          </aside>
       </div>
    </main>
  )
}

export default Cv