import { ContactsCollection } from '../db/models/contact.js';
import { calculatePaginationData } from '../utils/calculatePaginationData.js';
import { SORT_ORDER } from '../constants/index.js';

export const getAllContacts = async ({
  page = 1,
  perPage = 10,
  sortOrder = SORT_ORDER.ASC,
  sortBy = 'name',
  filter = {},
}) => {
  const limit = perPage;
  const skip = (page - 1) * perPage;

  const contactsQuery = ContactsCollection.find();

  if (filter?.type) {
    contactsQuery.where('type').equals(filter.type);
  }
  if (filter?.isFavorite !== undefined) {
    contactsQuery.where('isFavorite').equals(filter.isFavorite);
  }

  const contactsCount = await ContactsCollection.find()
    .merge(contactsQuery)
    .countDocuments();

  const contacts = await contactsQuery
    .skip(skip)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const paginationData = calculatePaginationData(contactsCount, page, perPage);

  return {
    data: contacts,
    ...paginationData,
  };
};

export const getContactById = async (contactId) => {
  const contact = await ContactsCollection.findById(contactId);
  return contact;
};

export const createContact = async (payload) => {
  const contact = await ContactsCollection.create(payload);
  return contact;
};

export const patchContact = async (contactId, payload, options) => {
  const updatedContact = await ContactsCollection.findOneAndUpdate(
    { _id: contactId },
    { $set: payload },
    { new: true },
  );
  return updatedContact;
};

export const deleteContact = async (contactId) => {
  const deletedContact = await ContactsCollection.findOneAndDelete({
    _id: contactId,
  });
  return deletedContact;
};
