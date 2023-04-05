import {RegexConstant} from '../../helper/regex'

export const rules = {
   username: [
      {
         required: true,
         whitespace: false,
         pattern: RegexConstant.USERNAME,
         message: 'Invalid username! Please enter valid value',
      },
   ],
   email: [
      {
         required: true,
         whitespace: false,
         pattern: RegexConstant.EMAIL,
         message: 'Invalid email! Please enter a valid value.',
      },
   ],
   password: [
      {
         required: true,
         whitespace: false,
         pattern: RegexConstant.PASSWORD,
         message:
            'Invalid password!. Please use at least 1 lowercase, 1 uppercase, 1 number and one special character.',
      },
   ],
}
