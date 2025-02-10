// File with all the details about events
const eventData = [
  {
    id: 1,
    title: "Tech Conference",
    hostedBy: "Tech Experts",
    details: `Join us for an exciting Tech Conference where industry experts will share insights on the latest trends in technology, including AI, cybersecurity, and blockchain. This online event is perfect for professionals and tech enthusiasts looking to expand their knowledge and network with like-minded individuals. 
      The event will take place on Friday, March 14, 2025, from 10:30 AM to 12:30 PM IST. As an online event, attendees will receive a secure link to join the session after registration. 
      Keynote speakers from leading tech companies will discuss future innovations and the impact of emerging technologies. 
      Engage in interactive Q&A sessions and expand your professional network. 
      Secure your spot now and be a part of this cutting-edge discussion!`,
    dressCode: "Smart Casual",
    ageRestrictions: "18 and above",
    eventTags: "technology, innovation, networking",
    dateAndTime: "Fri, March 14, 2025 | 10:30 AM - 12.30 PM",
    location: "Online",
    fees: 3000,
    type: "Online event",
    imgUrl:
      "https://images.websitebuilderexpert.com/wp-content/uploads/2018/08/Virtual-conferences.jpg",
  },
  {
    id: 2,
    title: "Design Workshop",
    hostedBy: "Creative Minds",
    details: `Step into the world of design with our exclusive Design Workshop, where creativity meets innovation. This hands-on session is designed for artists, designers, and enthusiasts eager to explore the latest trends in graphic design and user experience. 
      The event will be held on Sunday, June 22, 2025, at the Design Hub in Mumbai, from 3:15 PM to 6:15 PM IST. Participants will engage in live demonstrations, interactive exercises, and mentorship sessions led by industry professionals. 
      Gain insights into modern design tools, branding strategies, and the future of digital art.  
      Don't miss this opportunity to elevate your design skills in a collaborative and inspiring environment!`,
    dressCode: "Smart Casual",
    ageRestrictions: "16 and above",
    eventTags: "design, creativity, UX",
    dateAndTime: "Sun, June 22, 2025 | 3:15 PM – 6:15 PM",
    location: "Design Hub, Mumbai",
    fees: 2500,
    type: "Offline event",
    imgUrl:
      "https://spectee.co.jp/wp-content/uploads/2021/09/eyecatch-4-1200x850.jpg",
  },
  {
    id: 3,
    title: "Marketing Seminar",
    hostedBy: "Business Leaders",
    details: `Discover the secrets of successful marketing at our exclusive seminar, featuring top experts from the industry. Learn the latest trends, digital strategies, and innovative approaches that are transforming the marketing landscape. 
      This seminar will take place online on Tuesday, August 5, 2025, from 7:45 PM to 9:45 PM IST. Attendees will receive an exclusive access link upon registration. 
      Engage with professionals, participate in live case studies, and enhance your knowledge with actionable insights. 
      Whether you're a business owner, marketer, or entrepreneur, this event is tailored to help you stay ahead in the competitive market. 
      Don't miss the chance to boost your marketing skills and expand your network in this insightful session!`,
    dressCode: "Business Casual",
    ageRestrictions: "18 and above",
    eventTags: "marketing, business, branding",
    dateAndTime: "Tue, August 5, 2025 | 7:45 PM - 9:45 PM",
    location: "Online",
    fees: 2000,
    type: "Online event",
    imgUrl:
      "https://image.freepik.com/free-vector/businessman-presenting-business-professional-office-teamwork-animation-motion-colleague-seminar-meeting_40876-1625.jpg",
  },
  {
    id: 4,
    title: "Happy Hour Handshakes",
    hostedBy: "Networking Hub",
    details: `Connect with professionals from diverse industries at our exclusive networking event, Happy Hour Handshakes. Build relationships, exchange ideas, and explore business opportunities in a relaxed and vibrant atmosphere. 
      The event will be held on Saturday, October 11, 2025, at The Grand Lounge, Delhi, from 11:00 AM to 2:00 PM IST. 
      Enjoy light refreshments, insightful conversations, and interactive sessions designed to help you expand your professional circle. 
      Whether you're an entrepreneur, job seeker, or business professional, this event is the perfect place to grow your network. 
      Make meaningful connections and take your career to the next level with Happy Hour Handshakes!`,
    dressCode: "Business Casual",
    ageRestrictions: "21 and above",
    eventTags: "networking, business, career",
    dateAndTime: "Sat, October 11, 2025 | 11:00 AM - 2:00 PM",
    location: "The Grand Lounge, Delhi",
    fees: 1500,
    type: "Offline event",
    imgUrl:
      "https://image.freepik.com/free-vector/happy-tiny-business-people-dancing-having-fun-drinking-wine-corporate-party-team-building-activity-corporate-event-idea-concept-pinkish-coral-bluevector-isolated-illustration_335657-1414.jpg",
  },
  {
    id: 5,
    title: "Business Brews",
    hostedBy: "Entrepreneurs Club",
    details: `Join us for an exclusive evening of networking and meaningful conversations at Business Brews. Connect with business professionals, entrepreneurs, and industry leaders over coffee and discussions on emerging business trends. 
The event will be held on Saturday, November 29, 2025, at The Business Café, Bengaluru, from 6:30 PM to 9:00 PM IST. 
Expand your professional circle, exchange ideas, and discover new opportunities in a relaxed atmosphere. 
Whether you're a startup founder, investor, or business enthusiast, this event is perfect for making valuable connections. 
Don't miss this chance to be part of a thriving business community and unlock new opportunities!`,
    dressCode: "Business Casual",
    ageRestrictions: "18 and above",
    eventTags: "business, networking, entrepreneurship",
    dateAndTime: "Sat, November 29, 2025 | 6:30 PM – 9:00 PM",
    location: "The Business Café, Bengaluru",
    fees: 1200,
    type: "Offline event",
    imgUrl: "https://kit8.net/wp-content/uploads/2020/12/meeting_office@2x.png",
  },
  {
    id: 6,
    title: "Networking Evening",
    hostedBy: "Professional Growth Hub",
    details: `Engage with professionals across various industries at our virtual Networking Evening. Whether you're looking for career opportunities, business partnerships, or just meaningful discussions, this event is designed for you. 
The online event will take place on Wednesday, December 17, 2025, from 12:10 PM to 2:00 PM IST. 
Participate in breakout sessions, industry-specific discussions, and one-on-one networking rooms to build valuable professional relationships. 
Register now to receive your exclusive access link and take advantage of this opportunity to grow your network from anywhere in the world! 
Be a part of this exciting event and make connections that could shape your future career!`,
    dressCode: "Smart Casual",
    ageRestrictions: "18 and above",
    eventTags: "networking, career, growth",
    dateAndTime: "Fri, December 12, 2025 | 12:10 PM – 2:00 PM",
    location: "Online",
    fees: 800,
    type: "Online event",
    imgUrl:
      "https://www.corporatevision-news.com/wp-content/uploads/2020/10/virtual-meeting.jpg",
  },
];

export default eventData;
