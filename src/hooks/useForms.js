import { useState } from 'react'

export const useForms = (initialForm = {}) => {
    const [formState, setFormState] = useState(initialForm)

    const onInputChange = ({target}) => {
        const { name, value } = target
        setFormState({
            ...formState,
            [name]: value
        })
    }
  return {
    ...formState, // asi ya mandas el codigo destructuradooooo
    onInputChange
  }
}
