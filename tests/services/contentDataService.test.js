const { describe, it } = require('@jest/globals');
const { ContentData } = require('../../db/models');
const { HttpError, NotFoundError } = require('../../src/errors');

const contentDataServices = require('../../src/services/content/contentData.service');

// describe('get all content datas', () => {

//   const contents = [
//     {
//       'id': 1,
//       'content_name': 'Company 11',
//       'user_email': '1234@mail.com',
//       'createdAt': '2023-03-10T02:54:39.242Z',
//       'updatedAt': '2023-03-10T02:54:39.242Z',
//       'types': [
//         {
//           'id': 1,
//           'content_id': 1,
//           'type_name': 'firstName',
//           'data_type': 'string',
//           'createdAt': '2023-03-10T03:13:33.861Z',
//           'updatedAt': '2023-03-10T03:13:33.861Z'
//         },
//         {
//           'id': 2,
//           'content_id': 1,
//           'type_name': 'lastName',
//           'data_type': 'string',
//           'createdAt': '2023-03-10T03:13:42.611Z',
//           'updatedAt': '2023-03-10T03:13:42.611Z'
//         }
//       ],
//       'datas': [
//         {
//           'data': {
//             'firstName': 'hello FirstName',
//             'lastName': 'hello LastName'
//           },
//           'id': 2,
//           'content_id': 1,
//           'createdAt': '2023-03-10T03:03:19.081Z',
//           'updatedAt': '2023-03-10T03:03:19.081Z'
//         },
//         {
//           'data': {
//             'firstName': 'hello FirstName',
//             'lastName': 'hello LastName'
//           },
//           'id': 3,
//           'content_id': 1,
//           'createdAt': '2023-03-10T03:04:20.175Z',
//           'updatedAt': '2023-03-10T03:04:20.175Z'
//         }
//       ]
//     }
//   ];

//   it('should return list of all companies with scores', async () => {
//     const spiedFindAll = jest.spyOn(ContentData, 'findAll')
//       .mockResolvedValue(contents);

//     const returedVal = await contentServices.getAllContents();
//     expect(spiedFindAll).toBeCalled();
//     expect(returedVal)
//       .toEqual(contents);
//   });
// });

describe('update content Data', () => {
  const contentData =
  {
    'data': {
      'firstName': 'hello FirstName',
      'lastName': 'hello LastName'
    },
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z',
    save: jest.fn()
  };

  it('should return an updated content Data', async () => {
    const spiedFindAll = jest.spyOn(ContentData, 'findByPk')
      .mockResolvedValue(contentData);
    const returedVal = await contentDataServices.updateContentDataById(ContentData.id, 'CEO', '1234@mail.com');
    expect(contentData.save).toBeCalled();
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(contentData);
  });

  it('should return Err when no data found ', async () => {
    contentDataServices.updateContentDataById(ContentData.id, null, null).catch(e =>
      expect(e).toEqual(
        new NotFoundError(403, `content with ${ContentData.id} has no data with ${1} - NOT FOUND.`)
      )
    );
  });
});

describe('create content Data', () => {
  const contentData =
  {
    'data': {
      'firstName': 'hello FirstName',
      'lastName': 'hello LastName'
    },
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z',
    save: jest.fn()
  };

  it('should return a new created content Data', async () => {
    const spiedFindAll = jest.spyOn(ContentData, 'create')
      .mockResolvedValue(contentData);
    const returedVal = await contentDataServices.createContentData(ContentData.id, 'CEO', '1234@mail.com');
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(contentData);
  });

  it('should return Err when no data found ', async () => {
    contentDataServices.createContentData(ContentData.id, null, null).catch(e =>
      expect(e).toEqual(new HttpError())
    );
  });
});

describe('delete content Data', () => {

  it('should return a 204 status code deleted content Data', async () => {
    const spiedFindAll = jest.spyOn(ContentData, 'destroy')
      .mockResolvedValue();
    const returedVal = await contentDataServices.deleteContentDataById(ContentData.id, 'CEO', '1234@mail.com');
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual();
  });

  it('should return Err when no data found ', async () => {
    contentDataServices.deleteContentDataById(ContentData.id, null, null).catch(e =>
      expect(e).toEqual(new NotFoundError())
    );
  });

  it('should return Err NOT FOUND when no data found ', async () => {
    const spiedFindAll = jest.spyOn(ContentData, 'destroy')
      .mockResolvedValue(0);
    const returedVal = await contentDataServices.deleteContentDataById(ContentData.id, ContentData.data);
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(new NotFoundError(`content with ${ContentData.id} has no data with ${ContentData.data} - NOT FOUND.`));
  });
});