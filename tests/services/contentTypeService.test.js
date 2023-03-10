const { describe, it } = require('@jest/globals');
const { ContentType } = require('../../db/models');
const { HttpError, NotFoundError } = require('../../src/errors');

const contentTypeServices = require('../../src/services/content/contentType.service');
const contentDataServices = require('../../src/services/content/contentData.service');

describe('update content Type', () => {
  const contentType =
  {
    'type_name': 'firstName1',
    'data_type': 'string',
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z',
    save: jest.fn()
  };

  it('should return an updated content Type', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'findByPk')
      .mockResolvedValue(contentType);
    const spiedDeleteAllEntries = jest.spyOn(contentDataServices, 'deleteTypeObjectValueFromData')
      .mockResolvedValue();
    const returedVal = await contentTypeServices.updateContentTypeById(ContentType.id, 1, contentType);
    expect(contentType.save).toBeCalled();
    expect(spiedFindAll).toBeCalled();
    expect(spiedDeleteAllEntries).toBeCalled();
    expect(returedVal)
      .toEqual(contentType);
  });

  it('should return Err when no types found ', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'findByPk')
      .mockResolvedValue(contentType);
    contentTypeServices.updateContentTypeById(ContentType.id, 1, contentType).catch(e =>
      expect(e).toEqual(
        new NotFoundError(403, `content with ${ContentType.id} has no data with ${1} - NOT FOUND.`)
      )
    );
    expect(spiedFindAll).toBeCalled();
  });
});

describe('create content types', () => {
  const contentType =
  {
    'type_name': 'firstName1',
    'data_type': 'string',
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z',
    save: jest.fn()
  };

  it('should return a new created content types', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'create')
      .mockResolvedValue(contentType);
    const returedVal = await contentTypeServices.createContentType(ContentType.id, 'CEO', '1234@mail.com');
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(contentType);
  });

  it('should return Err when no types found ', async () => {
    contentTypeServices.createContentType(ContentType.id, 1, contentType).catch(e =>
      expect(e).toEqual(new HttpError())
    );
  });
});

describe('delete content Data', () => {

  const contentType =
  {
    'type_name': 'firstName1',
    'data_type': 'string',
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z',
    save: jest.fn()
  };

  it('should return a 204 status code deleted content types', async () => {
    const spiedDestroy = jest.spyOn(ContentType, 'destroy')
      .mockResolvedValue();
    const spiedFindAll = jest.spyOn(ContentType, 'findByPk')
      .mockResolvedValue(contentType);
    const spiedDeleteAllEntries = jest.spyOn(contentDataServices, 'deleteTypeObjectValueFromData')
      .mockResolvedValue();
    const returedVal = await contentTypeServices.deleteContentTypeById(ContentType.id, 1);
    expect(spiedDestroy).toBeCalled();
    expect(spiedFindAll).toBeCalled();
    expect(spiedDeleteAllEntries).toBeCalled();
    expect(returedVal)
      .toEqual();
  });

  it('should return Err when no types found ', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'findByPk')
      .mockResolvedValue(contentType);
    expect(spiedFindAll).toBeCalled();

    contentTypeServices.deleteContentTypeById(ContentType.id, null, null).catch(e =>
      expect(e).toEqual(new NotFoundError())
    );
  });

  it('should return Err NOT FOUND when no types found ', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'destroy')
      .mockResolvedValue(0);
    const returedVal = await contentTypeServices.deleteContentTypeById(ContentType.id, 1);
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(new NotFoundError(`content with ${ContentType.id} has no data with ${ContentType.data} - NOT FOUND.`));
  });
});