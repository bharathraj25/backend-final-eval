const { describe, it } = require('@jest/globals');
const { ContentType } = require('../../db/models');
const { HttpError, NotFoundError } = require('../../src/errors');

const contentTypeServices = require('../../src/services/content/contentType.service');

describe('update content Type', () => {
  const contentType =
  {
    'type': {
      'type_name': 'firstName1',
      'data_type': 'string'
    },
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z',
    save: jest.fn()
  };

  it('should return an updated content Type', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'findByPk')
      .mockResolvedValue(contentType);
    const returedVal = await contentTypeServices.updateContentTypeById(ContentType.id, 'CEO', '1234@mail.com');
    expect(contentType.save).toBeCalled();
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(contentType);
  });

  it('should return Err when no types found ', async () => {
    contentTypeServices.updateContentTypeById(ContentType.id, null, null).catch(e =>
      expect(e).toEqual(
        new NotFoundError(403, `content with ${ContentType.id} has no data with ${1} - NOT FOUND.`)
      )
    );
  });
});

describe('create content types', () => {
  const contentType =
  {
    'type': {
      'type_name': 'firstName1',
      'data_type': 'string'
    },
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
    contentTypeServices.createContentType(ContentType.id, null, null).catch(e =>
      expect(e).toEqual(new HttpError())
    );
  });
});

describe('delete content Data', () => {

  it('should return a 204 status code deleted content types', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'destroy')
      .mockResolvedValue();
    const returedVal = await contentTypeServices.deleteContentTypeById(ContentType.id, 'CEO', '1234@mail.com');
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual();
  });

  it('should return Err when no types found ', async () => {
    contentTypeServices.deleteContentTypeById(ContentType.id, null, null).catch(e =>
      expect(e).toEqual(new NotFoundError())
    );
  });

  it('should return Err NOT FOUND when no types found ', async () => {
    const spiedFindAll = jest.spyOn(ContentType, 'destroy')
      .mockResolvedValue(0);
    const returedVal = await contentTypeServices.deleteContentTypeById(ContentType.id, ContentType.data);
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(new NotFoundError(`content with ${ContentType.id} has no data with ${ContentType.data} - NOT FOUND.`));
  });
});