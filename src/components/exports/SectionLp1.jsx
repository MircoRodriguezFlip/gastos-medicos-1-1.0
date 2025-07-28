import styles from '../../styles/modules/sectionLp1.module.css';

import img1 from '../../assets/images/img-section-1-lp-1.webp';

import { Form } from './Form';

export const SectionLp1 = () => {
    return (
        <section className={styles.sectionContainer}>
            <div>
                <header className={styles.sectionHeader}>
                    <h1 className="bold-text-2">Protege tu salud y la de tu familia</h1>

                    <h2 className="bold-text">¡Cotiza tu seguro de gastos médicos mayores hoy mismo!</h2>
                </header>

                <img src={img1} alt="Familia segura y feliz, disfrutando juntos y sin preocupaciones gracias a su seguro de gastos médicos mayores" />
            </div>

            <div className={styles.form}>
                <Form />
            </div>
        </section>
    );
};
