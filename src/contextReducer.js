export default (state, action) => {
  switch (action.type) {
    case "REMOVE_CONTACT":
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };

    case "ADD_CONTACT":
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };

    default:
      return { ...state };
  }
};
