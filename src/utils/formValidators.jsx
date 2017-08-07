import React from 'react'

const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined

const minLength = min => value =>
  value && value.length < min ? `Must be ${min} characters or more` : undefined


const required = value =>
  (value ? undefined : 'Required field')

const maxLength32 = maxLength(32)

const minLength3 = minLength(3)

const email = value =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? 'Invalid email address'
    : undefined

export {required, email, minLength, maxLength32, minLength3}