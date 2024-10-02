import { technologiesData } from './technologiesData';
import { Container, Row } from 'react-bootstrap';

export default function Technologies() {
    const gridStyle = {
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
        color: 'white',
        gridGap: '10px'
    };

    const responsiveGridStyle =
        window.innerWidth <= 768
            ? { ...gridStyle, gridTemplateColumns: '1fr 1fr' }
            : window.innerWidth <= 480
              ? { ...gridStyle, gridTemplateColumns: '1fr' }
              : gridStyle;

    const technologyCardContainer = 'flex items-center gap-3 rounded-md p-2 bg-secondary/5 dark:bg-[#ffffff0a] dark:backdrop-blur-2xl';
    const technologyCardImg = 'p-2 items-center justify-center rounded-lg bg-[#007acc26]';
    const technologyCardText = 'text-smaller md:text-small';

    const renderSection = (name, array) => {
        return (
            <>
                <div className="px-4 py-3">{name}</div>
                <div style={responsiveGridStyle}>
                    {array.map((item, index) => (
                        <div key={index} className={technologyCardContainer}>
                            <div className={technologyCardImg}>{item.icon}</div>
                            <span className={technologyCardText}>{item.name}</span>
                        </div>
                    ))}
                </div>
            </>
        );
    };

    return (
        <Container fluid className="expContainer scrollItem">
            <Container>
                <Row>
                    <div className="separator">
                        <h2>Technologies</h2>
                    </div>
                </Row>
                <Row>
                    {renderSection('Frontend', technologiesData.frontEnd)}
                    {renderSection('Backend', technologiesData.backEnd)}
                    {renderSection('Tools', technologiesData.tools)}
                </Row>
            </Container>
        </Container>
    );
}
