
import pageAccountant from '../pages/PageAccountant';
import pageAdmin from '../pages/PageAdmin';
import pageDoctor from '../pages/PageDoctor';
import pageNurse from '../pages/PageNurse';
import pagePatient from '../pages/PagePatient';
import pagePharmacist from '../pages/PagePharmacist';
import pageReceptionist from '../pages/PageReceptionist';

/**
 * The function return a router according with parameter.     
 * @param  {String} String - The name of layout. 
 * @returns {Routers} callback - Return Router    
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