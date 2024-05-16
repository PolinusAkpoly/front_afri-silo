//Generate with new-react-cli : Fri, 01 Jul 2022 17:34:12 GMT
//Free training on https://mudey.fr

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Admin from './Admin';

describe('<Admin />', () => {
  test('it should mount', () => {
    render(<Admin />);
    
    const admin = screen.getByTestId('Admin');

    expect(admin).toBeInTheDocument();
  });
});






















































//Generate with new-react-cli : Fri, 01 Jul 2022 17:34:12 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
