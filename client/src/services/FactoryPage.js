import pageAccountant from '../components/Pages/Accountant/AccountantPage';
import pageAdmin from '../components/Pages/Admin/AdminPage';
import pageDoctor from '../components/Pages/Doctor/DoctorPage';
import pageNurse from '../components/Pages/Nurse/NursePage';
import pagePatient from '../components/Pages/Patient/PatientPage';
import pagePharmacist from '../components/Pages/Pharmacist/PharmacistPage';
import pageReceptionist from '../components/Pages/Receptionist/ReceptionistPage';

/**
 * The function return a router according with parameter.     
 * @param  {String} String - The name of layout. 
 * @returns {page} - Return personal page.    
 */

export default function (page) {
    if (page) {
        switch (page) {
            case ('accountant'):
                return pageAccountant
            case ('admin'):
                return pageAdmin;
            case ('doctor'):
                return pageDoctor;
            case ('nurse'):
                return pageNurse;
            case ('patient'):
                return pagePatient;
            case ('pharmacist'):
                return pagePharmacist;
            case ('Receptionist'):
                return pageReceptionist;
            default:
                return erroPage;    
        }

    }
}