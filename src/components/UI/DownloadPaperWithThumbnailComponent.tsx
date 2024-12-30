import React from 'react';
import '../../styles.css';

const DownloadPaperWithThumbnailComponent: React.FC = () => {
    return (
        <div>
            <h5>¡Descarga el artículo!</h5>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href="/COMCAPLA2024.docx" download="COMCAPLA.docx">
                    <img
                        className="hoverAble"
                        src="/articleThumbnail.png"
                        alt="Thumbnail del artículo"
                        style={{ width: '60%', cursor: 'pointer' }}
                    />
                </a>
            </div>
        </div>
    );
};

export default DownloadPaperWithThumbnailComponent;