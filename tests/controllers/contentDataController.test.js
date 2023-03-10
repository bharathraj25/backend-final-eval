const { describe, it } = require('@jest/globals');

const contentDataController = require('../../src/controllers/content/contentData.controller');
const contentDataService = require('../../src/services/content/contentData.service');

// describe('get all contents', () => {
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

//   it('should return list of all contents ', async () => {
//     const mockReq = {
//       email: 'hello',
//       query: {},
//     };
//     const mockRes = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     };
//     const next = () => { };

//     jest.spyOn(contentService, 'getAllContents').mockResolvedValue(contents);

//     await contentController.getAllContentsController(mockReq, mockRes, next);
//     expect(mockRes.status).toBeCalledWith(200);
//     expect(mockRes.json).toBeCalledWith(contents);
//   });

//   it('should return error if something goes wrong on service promise', async () => {
//     const mockReq = {
//       query: {},
//     };
//     const mockRes = {
//       status: jest.fn().mockReturnThis(),
//       json: jest.fn()
//     };
//     const next = jest.fn();

//     jest.spyOn(contentService, 'getAllContents').mockRejectedValue(new Error('Service error message'));
//     await contentController.getAllContentsController(mockReq, mockRes, next);
//     expect(next).toBeCalledWith(new Error('Service error message'));
//   });
// });

describe('update content data', () => {
  const contentData =
  {
    'data': {
      'firstName': 'hello FirstName',
      'lastName': 'hello LastName'
    },
    'id': 1,
    'content_id': 1,
    'updatedAt': '2023-03-10T14:31:39.362Z',
    'createdAt': '2023-03-10T14:31:39.362Z'
  };

  it('should return updated content data object when new details is passed', async () => {
    const mockReq = {
      query: {},
      params: {
        'dataId': 1,
      },
      body: {
        'contentId': 1,
        'data': {
          'firstName': 'hello FirstName',
          'lastName': 'hello LastName'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(contentDataService, 'updateContentDataById').mockResolvedValue(contentData);

    await contentDataController.updateContentDataControllerById(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.json).toBeCalledWith(contentData);
  });
  it('should return error if something goes wrong on service promise', async () => {
    const mockReq = {
      query: {},
      params: {
        'dataId': 1,
      },
      body: {
        'contentId': 1,
        'data': {
          'firstName': 'hello FirstName',
          'lastName': 'hello LastName'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = jest.fn();

    jest.spyOn(contentDataService, 'updateContentDataById').mockRejectedValue(new Error('Service error message'));
    await contentDataController.updateContentDataControllerById(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Service error message'));
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
    'createdAt': '2023-03-10T14:31:39.362Z'
  };

  it('should return new created content DATA object when details is passed', async () => {
    const mockReq = {
      query: {},
      params: {
        'dataId': 1,
      },
      body: {
        'contentId': 1,
        'data': {
          'firstName': 'hello FirstName',
          'lastName': 'hello LastName'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(contentDataService, 'createContentData').mockResolvedValue(contentData);

    await contentDataController.createContentDataControllerById(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(201);
    expect(mockRes.json).toBeCalledWith(contentData);
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

    jest.spyOn(contentDataService, 'createContentData').mockRejectedValue(new Error('Service error message'));
    await contentDataController.createContentDataControllerById(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Service error message'));
  });
});

describe('delete content Data', () => {

  it('should return 204 status code when content DATA object is deleted by passing id', async () => {
    const mockReq = {
      query: {},
      params: {
        'dataId': 1,
      },
      body: {
        'contentId': 1,
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    const next = () => { };

    jest.spyOn(contentDataService, 'deleteContentDataById').mockResolvedValue();

    await contentDataController.deleteContentDataControllerById(mockReq, mockRes, next);
    expect(mockRes.status).toBeCalledWith(204);
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

    jest.spyOn(contentDataService, 'deleteContentDataById').mockRejectedValue(new Error('Service error message'));
    await contentDataController.deleteContentDataControllerById(mockReq, mockRes, next);
    expect(next).toBeCalledWith(new Error('Service error message'));
  });
});
