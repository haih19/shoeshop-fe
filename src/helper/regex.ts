export class RegexConstant {
   static USERNAME = new RegExp(/^[A-Za-z0-9_.].{6,10}$/)
   static PASSWORD = new RegExp(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$&*?;:'".,])(?=.*[0-9]).{6,16}$/
   )
   static EMAIL = new RegExp(
      /^^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
   )
}
