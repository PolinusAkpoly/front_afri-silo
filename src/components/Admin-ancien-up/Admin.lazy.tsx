//Generate with new-react-cli : Fri, 01 Jul 2022 17:34:12 GMT
//Free training on https://mudey.fr
import React, { lazy, Suspense } from 'react';

const LazyAdmin = lazy(() => import('./Admin-ancien'));

const Admin = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAdmin {...props} />
  </Suspense>
);

export default Admin;



















































//Generate with new-react-cli : Fri, 01 Jul 2022 17:34:12 GMT
//Free training on sur https://mudey.fr
//Teacher Profile : https://mudey.fr/user/espero-akpoli
//Teacher Email : eakpoli@mudey.fr
//Teacher WhatsApp : +33 7 77 67 41 57
