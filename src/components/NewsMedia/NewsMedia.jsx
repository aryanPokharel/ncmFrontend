import * as React from 'react';
import { useState } from 'react'
import Button from '@mui/material/Button';


import './NewsMedia.css'

const NewsMedia = () => {
  const [blogData, setBlogData] = useState([
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/MicrosoftTeams-image-65-e1676805663682.jpg?fit=768%2C768&ssl=1",
      title: "NCM delivery service in winter",
      date: "FEBRUARY 14, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/MicrosoftTeams-image-64.png?fit=768%2C768&ssl=1",
      title: "Why Is Valentine’s Day Celebrated?",
      date: "FEBRUARY 19, 2023",
      content: "Happy Valentine’s Day! I hope you will have a great time with your partner. And at the same time, NCM will deliver the packages to your loved ones. Many of us may not be aware of why Valentine’s Day is celebrated.We may define Valentine’s Day as a season of love where couples express their love for each other.With time, the way we celebrate Valentine’s Day is changing. It is celebrated in the name of love,remembering Saint Valentine for his scarification for the purpose of love.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/ads.jpg?fit=768%2C534&ssl=1",
      title: "Why does a Facebook ad account get disabled",
      date: "FEBRUARY 2, 2023",
      content: "When your Facebook ad account is disabled, you cannot post ads. Surely you can appeal on Facebook, but there is no certainty that it will work.A lot of work is involved in creating agood social media page.And the ad account being disabled will make all the hard work go towaste.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/blogpics-scaled.jpg?fit=768%2C512&ssl=1",
      title: "How To Effectively Boost And Advertise",
      date: "FEBRUARY 19, 2023",
      content: "If you are running a business, you must have social media. Generally, businesses have social media accounts on Facebook, Instagram, YouTube, LinkedIn, and Twitter. In the current generation, it is said that “if your business is not on the internet, you are out of business.” A social media page can be used as a platform for a business to connect with current customers and reach out to new ones. Many businesses make mistakes when it comes to boosting and advertising on social media, which can lead to wasted resources and ineffective campaigns. So, firstly, we should know what social media boost and advertise are and how we should use them.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/4194776-scaled.jpg?fit=768%2C512&ssl=1",
      title: "NCM courier service for all",
      date: "JANUARY 11, 2023",
      content: "Nepal Can Move (NCM) has been serving the general public since its establishment. Our journey started with the delivery of a single parcel, and now we deliver millions of them. We have quickly gained popularity among Nepalese citizens since our establishment in 2018. With 216 branches spread across the country, NCM has made it easier for people to send their parcels and packages within Nepal.",
      tags: "NCM, Nepal Can Move"
    },
  ]);

  return (
    <section id='newsMedia'>
      <div id='newsMediaChild1'>
        <h2>We always have contents for you...</h2>
      </div>
      <div id='newsMediaChild2'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogData.map((blog) => (

            <div className="col">
              <div className="card h-100" id='blogCard'>
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt="Skyscrapers"
                  height={"300rem"}
                />
                <div className="card-body">
                  <h2 className="card-title">{blog.title}</h2>
                  <hr></hr>
                  <p className="card-text">
                    {blog.content.slice(0, 100)}..
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{blog.date}</small>
                </div>
                <hr></hr>
                <div className="card-footer">
                  <small className="text-muted">{blog.tags}</small>
                </div>
                <div className="card-footer">
                  <Button variant="contained" color="success">
                    Read More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewsMedia;