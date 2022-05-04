import React from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { useDeleteContactMutation } from 'redux/contactsSlice';
import Button from '../Button';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from 'utils/stringAvatar';
import { ContactItem, ContactText, ContactAvatarBox } from './Contact.styled';

function Contact({ name, number, id }) {
  const [deleteItem, { isLoading }] = useDeleteContactMutation();

  const deleteContact = () => {
    deleteItem(id);
    toast.success('Selected contact deleted');
  };

  const verifyName = name => {
    if (name.split(' ').length < 2) {
      return `${name} ${name.split('').slice(1, 2).join()}`;
    }
    return name;
  };

  let verifiedName = verifyName(name);

  return (
    <ContactItem>
      <ContactAvatarBox>
        <Avatar {...stringAvatar(`${verifiedName}`)} />
        <ContactText>
          <b>{name}:</b> {number}
        </ContactText>
      </ContactAvatarBox>
      <Button
        label={isLoading ? 'Deleting...' : 'Delete'}
        type="submit"
        onClick={deleteContact}
        disabled={isLoading}
      />
    </ContactItem>
  );
}

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default Contact;
