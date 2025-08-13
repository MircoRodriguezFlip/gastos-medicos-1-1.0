import styles from '../../styles/modules/sectionLp3.module.css';

import { BotonNav } from '../utils/BotonNav';

export const SectionLp3 = () => {
    return (
        <section className={styles.sectionContainer}>
            <header className={styles.sectionHeader}>
                <h2 className="bold-text-2">COTIZA AHORA</h2>
            </header>

            <div className={styles.sectionContenido}>
                <p className="bold-text">
                    Para cotizar un seguro de Gastos Médicos Mayores (GMM) evaluamos cuatro factores principales: la edad de cada asegurado, ya que
                    influye directamente en el nivel de riesgo y el costo; el sexo, debido a que algunas coberturas y probabilidades de siniestro
                    pueden variar; el lugar de residencia, ya que la red médica y los costos hospitalarios cambian según la región; y el número de
                    asegurados, lo cual permite calcular la tarifa total considerando a todos los beneficiarios que se incluirán en la póliza.
                </p>

                <BotonNav to="#top" className="boton-2 bold-text" dataCta="section-3-lp-btn" />
            </div>
        </section>
    );
};
