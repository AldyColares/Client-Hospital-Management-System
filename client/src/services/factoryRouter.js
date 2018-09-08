
import routerAccountant from '../routers/RouterAccountant';
import routerAdmin from '../routers/RouterAdmin';
import routerDoctor from '../routers/RouterDoctor';
import routerNurse from '../routers/RouterNurse';
import routerPatient from '../routers/RouterPatient';
import routerPharmacist from '../routers/RouterPharmacist';
import routerReceptionist from '../routers/RouterReceptionist';

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