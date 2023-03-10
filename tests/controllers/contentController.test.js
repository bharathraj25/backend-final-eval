const { describe, it } = require('@jest/globals');

const contentController = require('../../src/controllers/content/content.controller');
const contentService = require('../../src/services/content/content.service');

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

  it('should return list of all contents ', async () => {
    const mockReq = {
      email: 'hello',
      query: {},
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(contentService, 'getAllContents').mockResolvedValue(contents);

    await contentController.getAllContentsController(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(contents);
  });

  it('should return error if something goes wrong on service promise', async () => {
    const mockReq = {
      query: {},
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    jest.spyOn(contentService, 'getAllContents').mockRejectedValue(new Error('Service error message'));
    await contentController.getAllContentsController(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Service error message'));
  });
});

describe('update content name', () => {
  const content =
  {
    'id': 1,
    'content_name': 'Company Hello',
    'user_email': '1234@mail.com',
    'createdAt': '2023-03-10T12:16:13.639Z',
    'updatedAt': '2023-03-10T14:13:08.531Z'
  };

  it('should return updated content object when name is passed', async () => {
    const mockReq = {
      query: {},
      params: {
        'contentId': 1,
      },
      body: {
        'contentName': 'Company Hello'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(contentService, 'updateContentNameById').mockResolvedValue(content);

    await contentController.updateContentController(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(content);
  });
  it('should return error if something goes wrong on service promise', async () => {
    const mockReq = {
      query: {},
      params: {
        'contentId': 1,
      },
      body: {
        'contentName': 'Company Hello'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    jest.spyOn(contentService, 'updateContentNameById').mockRejectedValue(new Error('Service error message'));
    await contentController.updateContentController(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Service error message'));
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

  it('should return new created content object when details is passed', async () => {
    const mockReq = {
      query: {},
      params: {
      },
      body: {
        'contentName': 'Company Hello'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(contentService, 'createContent').mockResolvedValue(content);

    await contentController.createContentController(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith(content);
  });
  it('should return error if something goes wrong on service promise', async () => {
    const mockReq = {
      query: {},
      params: {
      },
      body: {
        'contentName': 'Company Hello'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    jest.spyOn(contentService, 'createContent').mockRejectedValue(new Error('Service error message'));
    await contentController.createContentController(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Service error message'));
  });
});