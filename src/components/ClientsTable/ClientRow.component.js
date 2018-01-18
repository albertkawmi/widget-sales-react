import React from 'react'
import ClickableRow from '../ClickableRow'
import LinkButton from '../LinkButton'

// Can't use an arrow function as Enzyme renders it 'Unknown'
function ClientRow({
  id,
  firstName,
  lastName,
  company,
  telephone,
  country,
  isSelected
}) {
  return (
    <ClickableRow
      key={isSelected}
      isClickable={!isSelected}
      to={`/clients/${id}`}
      className={isSelected ? 'selected' : ''}
    >
      <td>
        <LinkButton
          to={`/clients/${id}`}
          text="Select"
          options={{ disabled: isSelected }}
          buttonClassName="select-client-btn"
        />
      </td>
      <td>{id}</td>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{company}</td>
      <td>{telephone}</td>
      <td>{country}</td>
    </ClickableRow>
  )
}

export default ClientRow
