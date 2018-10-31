import _ from 'lodash'
import useFormInput from './useFormInput'

const isFieldInvalid = (item) => {
  // need to think about validators
  return {
    name: item.name,
    invalid: item.required ? !item.value : false
  }
}

const isFormInvalid = ({ formItems, values }) => {
  // need to get values in here
  const formattedItems = formItems.map(item => {
    const value = values[item.name]
    return {
      ...item,
      value
    }
  })
  const validatedItems = formattedItems.map(isFieldInvalid)
  const foundInvalid = validatedItems.find(item => item.invalid)
  return foundInvalid
}

const useForm = ({formItems}) => {
  const inputs = formItems.map(() => useFormInput(''))
  const names = formItems.map(item => item.name)
  const transformedItems = _.zipObject(names, inputs)
  const values = _.mapValues(transformedItems, item => item.value)
  const isInvalid = true
  return {
    formItems: transformedItems,
    values,
    isInvalid: isFormInvalid({ formItems, values })
  }
}

export default useForm
