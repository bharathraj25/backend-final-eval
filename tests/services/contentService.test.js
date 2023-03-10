const { describe, it } = require('@jest/globals');
const { Content } = require('../../db/models');
const { HttpError } = require('../../src/errors');

const contentServices = require('../../src/services/content/content.service');

describe('get all contents', () => {

  const contents = [
    {
      'id': 1,
      'content_name': 'Company 11',
      'user_email': '1234@mail.com',
      'createdAt': '2023-03-10T02:54:39.242Z',
      'updatedAt': '2023-03-10T02:54:39.242Z',
      'types': [
        {
          'id': 1,
          'content_id': 1,
          'type_name': 'firstName',
          'data_type': 'string',
          'createdAt': '2023-03-10T03:13:33.861Z',
          'updatedAt': '2023-03-10T03:13:33.861Z'
        },
        {
          'id': 2,
          'content_id': 1,
          'type_name': 'lastName',
          'data_type': 'string',
          'createdAt': '2023-03-10T03:13:42.611Z',
          'updatedAt': '2023-03-10T03:13:42.611Z'
        }
      ],
      'datas': [
        {
          'data': {
            'firstName': 'hello FirstName',
            'lastName': 'hello LastName'
          },
          'id': 2,
          'content_id': 1,
          'createdAt': '2023-03-10T03:03:19.081Z',
          'updatedAt': '2023-03-10T03:03:19.081Z'
        },
        {
          'data': {
            'firstName': 'hello FirstName',
            'lastName': 'hello LastName'
          },
          'id': 3,
          'content_id': 1,
          'createdAt': '2023-03-10T03:04:20.175Z',
          'updatedAt': '2023-03-10T03:04:20.175Z'
        }
      ]
    }
  ];

  it('should return list of all companies with scores', async () => {
    const spiedFindAll = jest.spyOn(Content, 'findAll')
      .mockResolvedValue(contents);

    const returedVal = await contentServices.getAllContents();
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(contents);
  });
});

describe('update content name', () => {
  const content =
  {
    'id': 1,
    'content_name': 'Company Hello',
    'user_email': '1234@mail.com',
    'createdAt': '2023-03-10T12:16:13.639Z',
    'updatedAt': '2023-03-10T14:13:08.531Z',
    save: jest.fn()
  };

  it('should return an updated content with type & data', async () => {
    const spiedFindAll = jest.spyOn(Content, 'findByPk')
      .mockResolvedValue(content);
    const returedVal = await contentServices.updateContentNameById(Content.id, 'CEO', '1234@mail.com');
    expect(content.save).toBeCalled();
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(content);
  });

  it('should return Err when no data found ', async () => {
    contentServices.updateContentNameById(Content.id, null, null).catch(e =>
      expect(e).toEqual(
        new HttpError(403, `content with contentId: ${Content.id} - Not Accessable.`)
      )
    );
  });
});

describe('create content name', () => {
  const content =
  {
    'id': 1,
    'content_name': 'Company Hello',
    'user_email': '1234@mail.com',
    'createdAt': '2023-03-10T12:16:13.639Z',
    'updatedAt': '2023-03-10T14:13:08.531Z'
  };

  it('should return a new created content with type & data', async () => {
    const spiedFindAll = jest.spyOn(Content, 'create')
      .mockResolvedValue(content);
    const returedVal = await contentServices.createContent(Content.id, 'CEO', '1234@mail.com');
    expect(spiedFindAll).toBeCalled();
    expect(returedVal)
      .toEqual(content);
  });

  it('should return Err when no data found ', async () => {
    contentServices.createContent(Content.id, null, null).catch(e =>
      expect(e).toEqual(new HttpError())
    );
  });
});