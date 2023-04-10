const fields = {
  name: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'User name',
  },
  email: {
    type: 'email',
    name: 'email',
    required: true,
    label: 'User email',
  },

  password: {
    type: 'password',
    name: 'password',
    required: true,
    label: 'User password',
  },

  contactName: {
    type: 'text',
    name: 'name',
    required: true,
    label: 'name',
  },
  number: {
    type: 'tel',
    name: 'number',
    required: true,
    label: 'number',
  },

  nameFilter: {
    type: 'text',
    name: 'nameFilter',
    required: true,
    label: 'Find contacts by name',
  },
};

export default fields;
