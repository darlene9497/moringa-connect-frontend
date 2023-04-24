import React, { useState, useEffect } from "react";
import './News.css'

function TechNews() {
  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [latestNews, setLatestNews] = useState([]);

  useEffect(() => {
    // Generate fake upcoming events
    const fakeEvents = [      
    {
      id: 1,        
      name: "Tech Conference",        
      description: "A conference on the latest trends in technology",       
      date: "2023-05-15",        
      location: "New York City",    
      image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"  
    },      
    {        
      id: 2,        
      name: "Startup Summit",        
      description: "A summit for startups and entrepreneurs",        
      date: "2023-06-22",        
      location: "San Francisco",
      image: "https://images.unsplash.com/photo-1477281765962-ef34e8bb0967?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=733&q=80"      
    },      
    {        
      id: 3,        
      name: "AI Workshop",        
      description: "A workshop on artificial intelligence and machine learning",        
      date: "2023-07-30",        
      location: "Chicago",
      image: "https://images.unsplash.com/photo-1520110120835-c96534a4c984?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80"      
    },      
    {        
      id: 4,        
      name: "Blockchain Expo",        
      description: "An expo on blockchain and cryptocurrency",        
      date: "2023-08-18",        
      location: "London", 
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80"              
    } 
  ];
    setUpcomingEvents(fakeEvents.slice(0, 4));

    // Generate fake latest news
    const fakeNews = [      
    {        
        id: 1,        
        title: "Apple unveils new MacBook Pro with M2 chip",        
        description: "Apple has announced its latest MacBook Pro with a new M2 chip and improved performance.",        
        source: { name: "CNET" },        
        publishedAt: "2023-04-16T10:30:00Z", 
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"      
    },           
    {        
        id: 2,        
        title: "Facebook to launch new social media platform",       
        description: "Facebook is planning to launch a new social media platform called Horizon that will focus on virtual reality.",        
        source: { name: "The Verge" },        
        publishedAt: "2023-04-15T14:45:00Z",   
        image: "https://images.unsplash.com/photo-1417733403748-83bbc7c05140?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"      
    },         
    {        
        id: 3,        
        title: "Google releases new version of Android",        
        description: "Google has released the latest version of its Android operating system, Android 13, with new features and improvements.",        
        source: { name: "TechCrunch" },        
        publishedAt: "2023-04-14T09:00:00Z",      
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"      
    },            
    {        
      id: 4,        
      title: "Amazon acquires streaming service Twitch",        
      description: "Amazon has acquired the popular streaming service Twitch for $1 billion.",        
      source: { name: "CNBC" },        
      publishedAt: "2023-04-12T16:20:00Z",      
      image: "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=921&q=80"      
    }     
  ];

    // Add a new article to the fakeNews array
    const latestNews = [...fakeNews, {      
      id: 5,      
      title: "Microsoft introduces new Surface Laptop",      
      description: "Microsoft has unveiled its latest Surface Laptop with a new design and improved performance.",      
      source: { name: "Engadget" },      
      publishedAt: "2023-04-10T11:15:00Z",    
    }];

    setLatestNews(latestNews.slice(0, 4));
  }, []);

  return (
    <div className="tech-news">
      <h2>Upcoming Tech Events:</h2>
      {upcomingEvents && upcomingEvents.length > 0 ? (
  <ul>
    {upcomingEvents.map((event) => (
      <li key={event.id}>
        {event.image && <img src={event.image} alt={event.name} />}
        <h3>{event.name}</h3>
        <p>{event.description}</p>
        <p>Location: {event.location}</p>
        <p>Date: {event.date}</p>
      </li>
    ))}
  </ul>
) : (
  <p>Loading upcoming events...</p>
)}

<h2>Latest Tech News:</h2>
{latestNews && latestNews.length > 0 ? (
  <ul>
    {latestNews.map((news) => (
      <li key={news.id}>
        {news.image && <img src={news.image} alt={news.title} />}
        <h3>{news.title}</h3>
        <p>{news.description}</p>
        <p>Source: {news.source.name}</p>
        <p>Date: {news.publishedAt}</p>
      </li>
    ))}
  </ul>
) : (
  <p>Loading latest news...</p>
)}
   </div>
  );
}

export default TechNews;