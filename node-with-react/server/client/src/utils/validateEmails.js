import { isEmail, isEmpty } from 'validator';

const isNotEmpty = value => !isEmpty(value);
const isNotEmail = value => !isEmail(value);

export default emails => {
  const invalid = emails
    .split(',')
    .map(email => email.trim())
    .filter(isNotEmpty)
    .filter(isNotEmail)
    .join(', ');

  return !!invalid ? `These emails are invalid: ${invalid}` : null;
};
