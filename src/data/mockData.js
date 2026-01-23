// Mock Data for Facebook Clone

export const currentUser = {
  id: 'user-1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@email.com',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
  coverPhoto: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop',
  bio: 'Software Developer | Tech Enthusiast | Coffee Lover ☕',
  location: 'San Francisco, CA',
  workplace: 'Tech Company Inc.',
  education: 'Stanford University',
  joinedDate: 'January 2020',
  friendsCount: 1247,
  mutualFriends: 0
};

export const users = [
  currentUser,
  {
    id: 'user-2',
    firstName: 'Sarah',
    lastName: 'Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    coverPhoto: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200&h=400&fit=crop',
    bio: 'Travel blogger | Photography enthusiast',
    location: 'New York, NY',
    friendsCount: 892,
    mutualFriends: 15
  },
  {
    id: 'user-3',
    firstName: 'Mike',
    lastName: 'Chen',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    coverPhoto: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=400&fit=crop',
    bio: 'Foodie | Chef | Restaurant Owner',
    location: 'Los Angeles, CA',
    friendsCount: 2341,
    mutualFriends: 8
  },
  {
    id: 'user-4',
    firstName: 'Emily',
    lastName: 'Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    coverPhoto: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&h=400&fit=crop',
    bio: 'Fitness Coach | Yoga Instructor',
    location: 'Miami, FL',
    friendsCount: 1567,
    mutualFriends: 23
  },
  {
    id: 'user-5',
    firstName: 'David',
    lastName: 'Wilson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face',
    coverPhoto: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&h=400&fit=crop',
    bio: 'Musician | Producer | DJ',
    location: 'Austin, TX',
    friendsCount: 3421,
    mutualFriends: 12
  }
];

export const posts = [
  {
    id: 'post-1',
    userId: 'user-2',
    user: users[1],
    content: 'Just got back from an amazing trip to Bali! 🌴 The beaches were absolutely stunning and the food was incredible. Already planning my next adventure!',
    images: ['https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&h=600&fit=crop'],
    createdAt: '2 hours ago',
    reactions: { like: 234, love: 56, haha: 12, wow: 8, sad: 0, angry: 0 },
    totalReactions: 310,
    comments: 45,
    shares: 12,
    userReaction: null
  },
  {
    id: 'post-2',
    userId: 'user-3',
    user: users[2],
    content: 'New recipe alert! 🍝 Made this homemade pasta from scratch today. The secret is in the sauce - fresh tomatoes, basil, and a hint of garlic. Who wants the recipe?',
    images: ['https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800&h=600&fit=crop'],
    createdAt: '4 hours ago',
    reactions: { like: 567, love: 123, haha: 5, wow: 34, sad: 0, angry: 0 },
    totalReactions: 729,
    comments: 89,
    shares: 34,
    userReaction: 'like'
  },
  {
    id: 'post-3',
    userId: 'user-4',
    user: users[3],
    content: 'Morning workout complete! 💪 Remember: consistency is key. Even on days when you don\'t feel like it, show up for yourself. Your future self will thank you!',
    images: [],
    createdAt: '6 hours ago',
    reactions: { like: 189, love: 45, haha: 2, wow: 0, sad: 0, angry: 0 },
    totalReactions: 236,
    comments: 28,
    shares: 8,
    userReaction: 'love'
  },
  {
    id: 'post-4',
    userId: 'user-5',
    user: users[4],
    content: 'Just dropped a new track! 🎵 Been working on this one for months. Link in comments. Let me know what you think!',
    images: ['https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&h=600&fit=crop'],
    createdAt: '8 hours ago',
    reactions: { like: 892, love: 234, haha: 12, wow: 156, sad: 3, angry: 1 },
    totalReactions: 1298,
    comments: 156,
    shares: 89,
    userReaction: null
  },
  {
    id: 'post-5',
    userId: 'user-1',
    user: users[0],
    content: 'Excited to announce that I just accepted a new position as Senior Developer! 🎉 Thank you to everyone who supported me on this journey. New chapter begins!',
    images: [],
    createdAt: '1 day ago',
    reactions: { like: 456, love: 189, haha: 0, wow: 23, sad: 0, angry: 0 },
    totalReactions: 668,
    comments: 78,
    shares: 5,
    userReaction: null
  }
];

export const stories = [
  { id: 'story-1', user: users[0], image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=500&fit=crop', isOwn: true, hasNew: false },
  { id: 'story-2', user: users[1], image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&h=500&fit=crop', isOwn: false, hasNew: true },
  { id: 'story-3', user: users[2], image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=300&h=500&fit=crop', isOwn: false, hasNew: true },
  { id: 'story-4', user: users[3], image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=500&fit=crop', isOwn: false, hasNew: true },
  { id: 'story-5', user: users[4], image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=300&h=500&fit=crop', isOwn: false, hasNew: false }
];

export const friendRequests = [
  { id: 'req-1', user: { ...users[1], mutualFriends: 15 }, timestamp: '2 days ago' },
  { id: 'req-2', user: { ...users[2], mutualFriends: 8 }, timestamp: '1 week ago' }
];

export const friendSuggestions = [
  { id: 'sug-1', user: { ...users[3], mutualFriends: 23 } },
  { id: 'sug-2', user: { ...users[4], mutualFriends: 12 } }
];

export const friends = [
  { ...users[1], isOnline: true },
  { ...users[2], isOnline: true },
  { ...users[3], isOnline: false },
  { ...users[4], isOnline: true }
];

export const conversations = [
  {
    id: 'conv-1',
    participant: users[1],
    lastMessage: 'Hey! How are you doing?',
    timestamp: '5 min ago',
    unread: 2,
    isOnline: true
  },
  {
    id: 'conv-2',
    participant: users[2],
    lastMessage: 'Thanks for the recipe! It was delicious 😋',
    timestamp: '1 hour ago',
    unread: 0,
    isOnline: true
  },
  {
    id: 'conv-3',
    participant: users[3],
    lastMessage: 'See you at the gym tomorrow!',
    timestamp: '3 hours ago',
    unread: 0,
    isOnline: false
  },
  {
    id: 'conv-4',
    participant: users[4],
    lastMessage: 'Loved your new track! 🔥',
    timestamp: 'Yesterday',
    unread: 1,
    isOnline: true
  }
];

export const messages = {
  'conv-1': [
    { id: 'm1', senderId: 'user-2', content: 'Hey John!', timestamp: '10:30 AM' },
    { id: 'm2', senderId: 'user-1', content: 'Hi Sarah! How are you?', timestamp: '10:32 AM' },
    { id: 'm3', senderId: 'user-2', content: 'I\'m great! Just got back from Bali', timestamp: '10:33 AM' },
    { id: 'm4', senderId: 'user-1', content: 'I saw your photos! Looks amazing!', timestamp: '10:35 AM' },
    { id: 'm5', senderId: 'user-2', content: 'It was incredible! You should definitely go', timestamp: '10:36 AM' },
    { id: 'm6', senderId: 'user-2', content: 'Hey! How are you doing?', timestamp: '10:40 AM' }
  ],
  'conv-2': [
    { id: 'm1', senderId: 'user-3', content: 'Did you try the pasta recipe?', timestamp: '9:00 AM' },
    { id: 'm2', senderId: 'user-1', content: 'Yes! Made it last night', timestamp: '9:15 AM' },
    { id: 'm3', senderId: 'user-1', content: 'Thanks for the recipe! It was delicious 😋', timestamp: '9:16 AM' }
  ]
};

export const groups = [
  {
    id: 'group-1',
    name: 'Tech Enthusiasts',
    cover: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=300&fit=crop',
    members: 15420,
    privacy: 'Public',
    description: 'A community for tech lovers to share news, discuss trends, and connect with fellow enthusiasts.',
    posts: 234,
    isJoined: true
  },
  {
    id: 'group-2',
    name: 'Foodies United',
    cover: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=300&fit=crop',
    members: 28930,
    privacy: 'Public',
    description: 'Share your favorite recipes, restaurant recommendations, and food photography!',
    posts: 567,
    isJoined: true
  },
  {
    id: 'group-3',
    name: 'Fitness & Wellness',
    cover: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&h=300&fit=crop',
    members: 45210,
    privacy: 'Public',
    description: 'Your go-to community for fitness tips, workout routines, and healthy lifestyle motivation.',
    posts: 892,
    isJoined: false
  },
  {
    id: 'group-4',
    name: 'Photography Masters',
    cover: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&h=300&fit=crop',
    members: 12890,
    privacy: 'Private',
    description: 'For professional and amateur photographers to share their work and learn from each other.',
    posts: 345,
    isJoined: false
  }
];

export const marketplaceItems = [
  {
    id: 'item-1',
    title: 'iPhone 14 Pro Max - Excellent Condition',
    price: 899,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=400&h=400&fit=crop',
    location: 'San Francisco, CA',
    seller: users[1],
    category: 'Electronics',
    condition: 'Like New',
    posted: '2 days ago'
  },
  {
    id: 'item-2',
    title: 'Vintage Leather Sofa',
    price: 450,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    location: 'Los Angeles, CA',
    seller: users[2],
    category: 'Furniture',
    condition: 'Good',
    posted: '1 week ago'
  },
  {
    id: 'item-3',
    title: 'Mountain Bike - Trek',
    price: 650,
    image: 'https://images.unsplash.com/photo-1576435728678-68d0fbf94e91?w=400&h=400&fit=crop',
    location: 'Austin, TX',
    seller: users[3],
    category: 'Sports',
    condition: 'Good',
    posted: '3 days ago'
  },
  {
    id: 'item-4',
    title: 'Sony PlayStation 5',
    price: 450,
    image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=400&fit=crop',
    location: 'Miami, FL',
    seller: users[4],
    category: 'Electronics',
    condition: 'Like New',
    posted: '5 days ago'
  },
  {
    id: 'item-5',
    title: 'Designer Handbag - Gucci',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=400&fit=crop',
    location: 'New York, NY',
    seller: users[1],
    category: 'Fashion',
    condition: 'New',
    posted: '1 day ago'
  },
  {
    id: 'item-6',
    title: 'Standing Desk - Adjustable',
    price: 280,
    image: 'https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=400&h=400&fit=crop',
    location: 'Seattle, WA',
    seller: users[2],
    category: 'Furniture',
    condition: 'Good',
    posted: '4 days ago'
  }
];

export const videos = [
  {
    id: 'video-1',
    title: 'Amazing Sunset Timelapse',
    thumbnail: 'https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    creator: users[1],
    views: '1.2M views',
    duration: '5:32',
    createdAt: '2 weeks ago'
  },
  {
    id: 'video-2',
    title: 'Quick & Easy Pasta Recipe',
    thumbnail: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    creator: users[2],
    views: '890K views',
    duration: '12:45',
    createdAt: '1 week ago'
  },
  {
    id: 'video-3',
    title: '30-Minute Full Body Workout',
    thumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    creator: users[3],
    views: '2.5M views',
    duration: '30:00',
    createdAt: '3 days ago'
  },
  {
    id: 'video-4',
    title: 'Electronic Music Production Tutorial',
    thumbnail: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=600&h=340&fit=crop',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    creator: users[4],
    views: '456K views',
    duration: '18:20',
    createdAt: '5 days ago'
  }
];

export const notifications = [
  { id: 'notif-1', type: 'like', user: users[1], content: 'liked your post', timestamp: '5 min ago', read: false },
  { id: 'notif-2', type: 'comment', user: users[2], content: 'commented on your photo', timestamp: '1 hour ago', read: false },
  { id: 'notif-3', type: 'friend', user: users[3], content: 'accepted your friend request', timestamp: '2 hours ago', read: true },
  { id: 'notif-4', type: 'tag', user: users[4], content: 'tagged you in a post', timestamp: '1 day ago', read: true },
  { id: 'notif-5', type: 'birthday', user: users[1], content: 'has a birthday today', timestamp: 'Today', read: false }
];
