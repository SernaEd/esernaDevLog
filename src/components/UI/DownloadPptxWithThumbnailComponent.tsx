import React from 'react';
import '../../styles.css';

const DownloadPptxWithThumbnailComponent: React.FC = () => {
    return (
        <div>
            <h5>¡Descarga nuestra presentación!</h5>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="/COMCAPLA2024.pptx" download="COMCAPLA.pptx">
                    <img
                        className="hoverAble"
                        src="/thumbnail.png"
                        alt="Thumbnail de la presentación"
                        style={{ width: '60%', cursor: 'pointer' }}
                    />
                </a>
                {/*<a*/}
                {/*    href="/COMCAPLA2024.pptx"*/}
                {/*    download="COMCAPLA.pptx"*/}
                {/*    style={{ textDecoration: 'none', color: 'blue' }}*/}
                {/*>*/}
                {/*    Descargar presentación*/}
                {/*</a>*/}
            </div>
        </div>
    );
};

export default DownloadPptxWithThumbnailComponent;