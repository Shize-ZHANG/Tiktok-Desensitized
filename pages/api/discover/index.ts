import { NextApiRequest, NextApiResponse } from 'next'
// import dbConnect from '~/lib/dbConnection'
// import DiscoverModel from '~/models/discover.model'

import { Discover, DiscoverRequestQuery, DiscoverResponse } from '~/services/discover'

const mockData: Discover[] = [
  {
    id: '1',
    name: 'Sarah Chen',
    username: 'sarahchen',
    avatar: 'https://i.imgur.com/1QZxK3Y.jpg',
    is_followed: false,
    is_liked: false,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    caption: '✨ Neon vibes in the city ✨ #neon #citylife #nightlife',
    likes: 1234,
    comments: 89,
    shares: 45,
    timestamp: new Date().toISOString(),
    button_visible: true,
    music_name: 'Neon Dreams - Sarah Chen',
    has_tick: true
  },
  {
    id: '2',
    name: 'Alex Wong',
    username: 'alexwong',
    avatar: 'https://i.imgur.com/2QZxK3Y.jpg',
    is_followed: false,
    is_liked: false,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    caption: 'Spring is here! 🌸 #spring #nature #beautiful',
    likes: 856,
    comments: 42,
    shares: 23,
    timestamp: new Date().toISOString(),
    button_visible: true,
    music_name: 'Spring Breeze - Alex Wong',
    has_tick: false
  },
  {
    id: '3',
    name: 'Emma Lee',
    username: 'emmalee',
    avatar: 'https://i.imgur.com/3QZxK3Y.jpg',
    is_followed: false,
    is_liked: false,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    caption: 'Family time in nature 🏕️ #family #nature #camping',
    likes: 2345,
    comments: 156,
    shares: 78,
    timestamp: new Date().toISOString(),
    button_visible: true,
    music_name: 'Family Moments - Emma Lee',
    has_tick: true
  },
  {
    id: '4',
    name: 'David Kim',
    username: 'davidkim',
    avatar: 'https://i.imgur.com/4QZxK3Y.jpg',
    is_followed: false,
    is_liked: false,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
    caption: "Dance like nobody's watching 💃 #dance #party #vibes",
    likes: 3456,
    comments: 234,
    shares: 123,
    timestamp: new Date().toISOString(),
    button_visible: true,
    music_name: 'Dance Floor - David Kim',
    has_tick: true
  },
  {
    id: '5',
    name: 'Sophie Zhang',
    username: 'sophiezhang',
    avatar: 'https://i.imgur.com/5QZxK3Y.jpg',
    is_followed: false,
    is_liked: false,
    video: 'https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4',
    caption: 'Ocean vibes 🌊 #ocean #summer #beach',
    likes: 5678,
    comments: 345,
    shares: 234,
    timestamp: new Date().toISOString(),
    button_visible: true,
    music_name: 'Ocean Waves - Sophie Zhang',
    has_tick: true
  }
];

const handler = async (req: NextApiRequest, res: NextApiResponse<DiscoverResponse>) => {
  if (req.method === 'GET') {
    const { page = '1', offset = '5' } = req.query as unknown as DiscoverRequestQuery

    try {
      // await dbConnect()
      // const data = await DiscoverModel.find<Discover>({})
      //   .skip(parseInt(offset as string) * (parseInt(page as string) - 1))
      //   .limit(parseInt(offset as string))
      //   .lean()

      const startIndex = parseInt(offset as string) * (parseInt(page as string) - 1);
      const endIndex = startIndex + parseInt(offset as string);
      const data = mockData.slice(startIndex, endIndex);

      const cookies = req.cookies
      if (!cookies['next-auth.session-token'] && !cookies['__Secure-next-auth.session-token']) {
        const dataNotLogin = data.map((item) => ({ ...item, is_followed: false, is_liked: false }))
        return res.status(201).send({ message: 'Success', data: dataNotLogin })
      }

      return res.status(201).send({ message: 'Success', data: data })
    } catch (e: any) {
      res.status(422).send({ message: 'Fetch data fail' })
    }
  }

  return res.status(404).send({ message: 'Invalid request' })
}

export default handler
