import { TitleSEO } from '../utils/TitleSEO';

import { SectionPp1 } from '../exports/SectionPp1';

const PoliticasPage = () => {
    return (
        <main>
            <TitleSEO
                title="GMM | Política de Privacidad"
                description="Conoce cómo protegemos y utilizamos tu información personal en nuestra plataforma de Gastos Medicos Mayores."
                canonical="https://gastosmedicosmayores.com.mx/politica-privacidad"
            />

            <SectionPp1 />
        </main>
    );
};

export default PoliticasPage;
