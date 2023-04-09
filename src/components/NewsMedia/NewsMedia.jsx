import * as React from 'react';
import { useState } from 'react'

import './NewsMedia.css'

const NewsMedia = () => {
  const [blogData, setBlogData] = useState([
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/MicrosoftTeams-image-65-e1676805663682.jpg?fit=768%2C768&ssl=1",
      title: "NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/MicrosoftTeams-image-64.png?fit=768%2C768&ssl=1",
      title: "2 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/ads.jpg?fit=768%2C534&ssl=1",
      title: "3 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/blogpics-scaled.jpg?fit=768%2C512&ssl=1",
      title: "4 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      image: "https://i0.wp.com/www.nepalcanmove.com/wp-content/uploads/2023/02/4194776-scaled.jpg?fit=768%2C512&ssl=1",
      title: "5 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
  ]);

  return (
    <section id='newsMedia'>
      <div id='newsMediaChild2'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {blogData.map((blog) => (
   
            <div className="col">
              <div className="card h-100">
                <img
                  src={blog.image}
                  className="card-img-top"
                  alt="Skyscrapers"
                  height={"300rem"}
                />
                <div className="card-body">
                  <h5 className="card-title">{blog.title}</h5>
                  <p className="card-text">
                    {blog.content}
                  </p>
                </div>
                <div className="card-footer">
                  <small className="text-muted">{blog.date}</small>
                </div>
                <hr></hr>
                <div className="card-footer">
                  <small className="text-muted">{blog.tags}</small>
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