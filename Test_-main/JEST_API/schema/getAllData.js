export default {
  type: 'array',
  items: [
    {
      type: 'object',
      properties: {
        userId: {
          type: 'integer'
        },
        id: {
          type: 'integer'
        },
        title: {
          type: 'string'
        },
        body: {
          type: 'string'
        }
      },
      additionalProperties: false,
      required: [
        'userId',
        'id',
        'title',
        'body'
      ]
    }
  ]
}
