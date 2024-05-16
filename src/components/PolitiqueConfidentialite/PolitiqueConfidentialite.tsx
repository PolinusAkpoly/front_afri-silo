import React, { FC } from 'react';
import HeaderPage from '../HeaderPage/HeaderPage';
import './PolitiqueConfidentialite.css';

interface PolitiqueConfidentialiteProps {}

const PolitiqueConfidentialite: FC<PolitiqueConfidentialiteProps> = () => (
  <div className="PolitiqueConfidentialite" data-testid="PolitiqueConfidentialite">
    <HeaderPage name="Politique de confidentialité" />
  </div>
);

export default PolitiqueConfidentialite;
