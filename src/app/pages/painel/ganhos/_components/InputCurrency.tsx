import { useState } from 'react'
import { dynamicMask } from 'simple-currency-mask'

export const InputCurrency = () => {
  const [valueInput, setValueInput] = useState()
  function changeMonetaryValue(e) {
    const config = { decimalSeparator: ',', currency: 'R$', negative: true }

    setValueInput(dynamicMask(e.target.value, config))

    setValueInput(e.target.value)
  }

  return (
    <input
      value={valueInput}
      type="text"
      inputMode="numeric"
      pattern="[0-9]*" // Permite apenas números como entrada
      onKeyDown={handleEnterKey}
      onChange={changeMonetaryValue}
      className="h-full pl-3 bg-zinc-700/70 rounded-none w-full text-sm rounded-l-md outline-none max-sm:rounded max-sm:py-3"
      placeholder="Digite um número"
    />
  )
}
