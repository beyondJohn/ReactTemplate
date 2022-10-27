import { BehaviorSubject } from "rxjs";

let myAddress = 'init address'
let myAddressObject = {}

const addressBehaviorSubject = new BehaviorSubject(myAddress)

const addressService = {
    send: function (msg) {
        addressBehaviorSubject.next(msg)
    }
}


const addressObjectBehaviorSubject = new BehaviorSubject(myAddressObject)

const addressObjectService = {
    send: function (msg) {
        addressObjectBehaviorSubject.next(msg)
    }
}

export { addressBehaviorSubject, addressService, addressObjectBehaviorSubject, addressObjectService }

