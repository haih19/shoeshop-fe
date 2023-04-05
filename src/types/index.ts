export interface ILoginParam {
   email: string
   password: string
}

export interface IRegisterParam {
   email: string
   password: string
   username: string
   firt_name: string
   last_name: string
   confirm_password?: string
}
