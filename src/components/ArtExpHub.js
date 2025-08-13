import React from 'react';
// import './ArtExpHub.css';
import { Container } from 'react-bootstrap';


function ArtExpHub() {
    const underconstructor = () => {
        window.open('/underconstructor', '_parent');
      };

      const reclaimedrelics = () => {
        window.open('/reclaimedrelics', '_parent');
      };
      const booksiconography = () => {
        window.open('/booksiconography', '_parent');
      };
    return (
        <Container>
            <div class="retriv-art-grid-container">
                <div class="retriv-art-grid-item" id="pan-india" onClick={underconstructor}>
                    {/* NOTE: After clicking on it, this page is redirecting to the stories page and it should be in parallelX*/}
                    <div class="retriv-art-overlay">Essay: india’s stolen antiques</div>
                </div>
                <div class="retriv-art-grid-item" id="folk" onClick={reclaimedrelics}>
                    <div class="retriv-art-overlay">Reclaimed Relics:Glipmses coming soon</div>
                </div>
                <div class="retriv-art-grid-item" id="tribal" onClick={booksiconography}>
                    <div class="retriv-art-overlay">Books on Indian artand iconography</div>
                </div>
                <div class="retriv-art-grid-item" id="fairs" onClick={underconstructor}>
                    <div class="retriv-art-overlay">Treaties, laws and conventionsrelated to artefacts repatriation</div>
                </div>
            </div>
        </Container>
    )
}

export default ArtExpHub
