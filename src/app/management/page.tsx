import { FC } from 'react';
import styles from './page.module.scss'

interface pageProps {}

const page: FC<pageProps> =({}) => {
    return (
        <div className={styles.management}>
            <h1 className={styles.header}>Zarząd PFFG</h1>
            <div>
                <div className={styles.member}>
                    <div className={styles.member__shape}>
                        <img src="https://golfguru.pl/wp-content/uploads/2018/07/Adrian-Meronk-ambasador-turnieju-Kram-Junior-Open-2.jpg"
                            alt="Longtail boat in Thailand" 
                            className={styles.member__shape__img}
                            />
                            <figcaption className={styles.member__shape__caption}>Tomasz Jankowski<br /> Prezes Zarządu</figcaption>
                    </div>   
                    <p>
                        How many times were you frustrated while looking
                        out for a good collection of programming/algorithm
                        /interview questions? What did you expect and what
                        did you get? This portal has been created to
                        provide well written, well thought and well
                        explained solutions for selected questions.
                        An IIT Roorkee alumnus and founder of GeeksforGeeks.
                        He loves to solve programming problems in most
                        efficient ways. Apart from GeeksforGeeks, he has
                        worked with DE Shaw and Co. as a software developer
                        and JIIT Noida as an assistant professor. It is a
                        good platform to learn programming. It is an
                        educational website. Prepare for the Recruitment
                        drive of product based companies like Microsoft,
                        Amazon, Adobe etc with a free online placement
                        preparation course. An IIT Roorkee alumnus and founder of GeeksforGeeks.
                        He loves to solve programming problems in most
                        efficient ways. Apart from GeeksforGeeks, he has
                        worked with DE Shaw and Co. as a software developer
                        and JIIT Noida as an assistant professor. It is a
                        good platform to learn programming. It is an
                        educational website. Prepare for the Recruitment
                        drive of product based companies like Microsoft,
                        Amazon, Adobe etc with a free online placement
                        preparation course.
                    </p>
                </div>
                <div className={styles.member}>
                    <div className={styles.member__shape}>
                        <img src="data:image/jpeg;base64,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"
                            alt="Longtail boat in Thailand" 
                            className={styles.member__shape__img}
                            />
                            <figcaption className={styles.member__shape__caption}>Aleksander Barańczyk<br /> Skarbnik</figcaption>
                    </div>   
                    <p>
                        How many times were you frustrated while looking
                        out for a good collection of programming/algorithm
                        /interview questions? What did you expect and what
                        did you get? This portal has been created to
                        provide well written, well thought and well
                        explained solutions for selected questions.
                        An IIT Roorkee alumnus and founder of GeeksforGeeks.
                        He loves to solve programming problems in most
                        efficient ways. Apart from GeeksforGeeks, he has
                        worked with DE Shaw and Co. as a software developer
                        and JIIT Noida as an assistant professor. It is a
                        good platform to learn programming. It is an
                        educational website. Prepare for the Recruitment
                        drive of product based companies like Microsoft,
                        Amazon, Adobe etc with a free online placement
                        preparation course. An IIT Roorkee alumnus and founder of GeeksforGeeks.
                        He loves to solve programming problems in most
                        efficient ways. Apart from GeeksforGeeks, he has
                        worked with DE Shaw and Co. as a software developer
                        and JIIT Noida as an assistant professor. It is a
                        good platform to learn programming. It is an
                        educational website. Prepare for the Recruitment
                        drive of product based companies like Microsoft,
                        Amazon, Adobe etc with a free online placement
                        preparation course.
                    </p>
                </div>
                <div className={styles.member}>
                    <div className={styles.member__shape}>
                        <img src="https://images.squarespace-cdn.com/content/v1/57f954b59de4bb31e603b0d7/1575905107742-1CZDDFMC032U6PZNALBR/Zrzut+ekranu+2019-12-09+o+15.49.33.png?format=750w"
                            alt="Longtail boat in Thailand" 
                            className={styles.member__shape__img}
                            />
                            <figcaption className={styles.member__shape__caption}>Bogdan Jaroszewski<br /> Organizator Imprez</figcaption>
                    </div>   
                    <p>
                        How many times were you frustrated while looking
                        out for a good collection of programming/algorithm
                        /interview questions? What did you expect and what
                        did you get? This portal has been created to
                        provide well written, well thought and well
                        explained solutions for selected questions.
                        An IIT Roorkee alumnus and founder of GeeksforGeeks.
                        He loves to solve programming problems in most
                        efficient ways. Apart from GeeksforGeeks, he has
                        worked with DE Shaw and Co. as a software developer
                        and JIIT Noida as an assistant professor. It is a
                    good platform to learn programming. It is an
                    educational website. Prepare for the Recruitment
                    drive of product based companies like Microsoft,
                    Amazon, Adobe etc with a free online placement
                    preparation course. An IIT Roorkee alumnus and founder of GeeksforGeeks.
                    He loves to solve programming problems in most
                    efficient ways. Apart from GeeksforGeeks, he has
                    worked with DE Shaw and Co. as a software developer
                    and JIIT Noida as an assistant professor. It is a
                    good platform to learn programming. It is an
                    educational website. Prepare for the Recruitment
                    drive of product based companies like Microsoft,
                    Amazon, Adobe etc with a free online placement
                    preparation course.
                </p>
            </div>
        </div>
        </div>
    )
}

export default page;