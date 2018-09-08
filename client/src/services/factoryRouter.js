import routerAccountant from '../layouts/RouterAccountant';
import routerAdmin from '../layouts/RouterAdmin';
import routerDoctor from '../layouts/RouterDoctor';
import routerNurse from '../layouts/RouterNurse';
import routerPatient from '../layouts/RouterPatient';
import routerPharmacist from '../layouts/RouterPharmacist';
import routerReceptionist from '../layouts/RouterReceptionist';

/**
 * The function return a router according with parameter.     
 * @param  {String} String - The name of router. 
 * @returns {String} String - Return Router.    
 */

export default function (router) {
    if (router) {
        switch (router) {
            case ('accountant'):
                return routerAccountant
            case ('admin'):
                return routerAdmin;
            case ('doctor'):
                return routerDoctor;
            case ('nurse'):
                return routerNurse;
            case ('patient'):
                return routerPatient;
            case ('pharmacist'):
                return routerPharmacist;
            case ('Receptionist'):
                return routerReceptionist;
            default:
                return ;    
        }

    }
}