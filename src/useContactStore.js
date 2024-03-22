
import axiosIns from './axios'

export class contactStore {

    // 👉 get all contacts
   static getAllContacts() {
    
    return axiosIns.get(`/contact`)
    }

    // 👉 Add contact
    static createContact(ContactData) {
        
      return axiosIns.post(`/contact`,ContactData)
      }
   

    // 👉 get contact
    static getContact(id) {
    
      return axiosIns.get(`/contact/${id}` )
     
    }

    // 👉 Delete Contact
    static deleteContact(id) {
      return axiosIns.delete(`/contact/${id}`)
    }
  }
