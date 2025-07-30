import styles from '../../styles/modules/sectionLp2.module.css';

import { iconosSectionLp2 } from '../utils/iconosSectionLp2';
import img1 from '../../assets/images/img-section-2-lp-1.webp';

export const SectionLp2 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionHeader}>
                <h2 className="bold-text-2">Beneficios</h2>
            </header>

            <div className={styles.sectionContenido}>
                <div className={styles.iconos}>
                    <div>
                        {iconosSectionLp2.map(({ id, icon, text }) => (
                            <div key={id} className={styles.iconContainer}>
                                <img src={icon} alt={text} />
                                <p className="light-text">{text}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.img1}>
                    <img
                        src={img1}
                        alt="Mujer embarazada y su hija, felices por estar aseguradas con gastos médicos mayores"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
};
