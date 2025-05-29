import { NextApiRequest, NextApiResponse } from 'next'
// import dbConnect from '~/lib/dbConnection'
// import CommentModel from '~/models/comment.model'
import { Comment, CommentRequestQuery } from '~/services/comment'
import { ApiResponse } from '~/types/common'

const mockComments: Comment[] = [
  {
    _id: '1',
    videoId: '1',
    content: 'Amazing neon vibes! ✨',
    username: 'alexwong',
    userImage: 'https://i.imgur.com/2QZxK3Y.jpg',
    reply: [
      {
        _id: '1-1',
        videoId: '1',
        content: 'Thanks! The city lights are magical at night 🌃',
        username: 'sarahchen',
        userImage: 'https://i.imgur.com/1QZxK3Y.jpg'
      }
    ]
  },
  {
    _id: '2',
    videoId: '1',
    content: 'Where is this? The lighting is perfect!',
    username: 'emmalee',
    userImage: 'https://i.imgur.com/3QZxK3Y.jpg',
    reply: []
  },
  {
    _id: '3',
    videoId: '2',
    content: 'Beautiful spring flowers! 🌸',
    username: 'sophiezhang',
    userImage: 'https://i.imgur.com/5QZxK3Y.jpg',
    reply: [
      {
        _id: '3-1',
        videoId: '2',
        content: 'Thank you! Spring is my favorite season',
        username: 'alexwong',
        userImage: 'https://i.imgur.com/2QZxK3Y.jpg'
      }
    ]
  },
  {
    _id: '4',
    videoId: '3',
    content: 'Such a precious family moment ❤️',
    username: 'davidkim',
    userImage: 'https://i.imgur.com/4QZxK3Y.jpg',
    reply: []
  },
  {
    _id: '5',
    videoId: '4',
    content: 'The dance moves are fire! 🔥',
    username: 'sarahchen',
    userImage: 'https://i.imgur.com/1QZxK3Y.jpg',
    reply: [
      {
        _id: '5-1',
        videoId: '4',
        content: 'Thanks! Been practicing a lot 💃',
        username: 'davidkim',
        userImage: 'https://i.imgur.com/4QZxK3Y.jpg'
      }
    ]
  }
];

const handler = async (req: NextApiRequest, res: NextApiResponse<ApiResponse<Comment>>) => {
  if (req.method === 'GET') {
    const { videoId, page = '1', offset = '5' } = req.query as unknown as CommentRequestQuery

    try {
      // await dbConnect()
      // const data = await CommentModel.find<Comment>({ videoId })
      //   .sort({ createdAt: -1 })
      //   .skip(parseInt(offset as string) * (parseInt(page as string) - 1))
      //   .limit(parseInt(offset as string))

      const filteredComments = mockComments.filter(comment => comment.videoId === videoId);
      const startIndex = parseInt(offset as string) * (parseInt(page as string) - 1);
      const endIndex = startIndex + parseInt(offset as string);
      const data = filteredComments.slice(startIndex, endIndex);

      return res.status(201).send({ message: 'Success', data: data })
    } catch (e: any) {
      res.status(422).send({ message: e || 'Something went wrong at Server' })
    }
  }

  return res.status(404).send({ message: 'Invalid request' })
}

export default handler
