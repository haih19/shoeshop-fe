import {Form, Input} from 'antd'
import {Rule} from 'antd/es/form'
import {memo, useState} from 'react'
import {twMerge} from 'tailwind-merge'
import './styles.less'

interface Props {
   onChange?: (e: React.FormEvent<HTMLInputElement>) => void
   label?: string
   value?: string
   placeholder?: string
   type?: string
   name: string
   rules?: Rule[] | undefined
   isPassword?: boolean
}

export const FloatInput = memo((props: Props) => {
   const [focus, setFocus] = useState(false)
   const [required] = useState(true)
   let {label, value, placeholder, type, name, rules, isPassword} = props

   if (!placeholder) placeholder = label

   const isOccupied = focus || (value && value.length !== 0)

   const labelClass = isOccupied ? 'label as-label' : 'label as-placeholder'

   const requiredMark = required ? <span className="text-red-warning">*</span> : null

   return (
      <>
         <div
            className="float-label relative"
            onBlur={() => setFocus(false)}
            onFocus={() => setFocus(true)}>
            <Form.Item
               name={name}
               rules={rules}>
               {isPassword && isPassword ? (
                  <Input.Password
                     onChange={props.onChange}
                     type={type}
                     size="large"
                     style={{padding: 10}}
                     placeholder=" "
                     autoComplete="on"
                  />
               ) : (
                  <Input
                     onChange={props.onChange}
                     type={type}
                     size="large"
                     style={{padding: 10}}
                     placeholder=" "
                  />
               )}
            </Form.Item>
            <label className={twMerge(labelClass, 'absolute')}>
               {isOccupied ? label : placeholder}
               {requiredMark}
            </label>
         </div>
      </>
   )
})
