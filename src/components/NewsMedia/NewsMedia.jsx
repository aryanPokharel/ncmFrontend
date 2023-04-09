import * as React from 'react';
import { useState } from 'react'
import { useTheme } from '@mui/material/styles';

import './NewsMedia.css'
import BlogCard from './BlogCard';

const NewsMedia = () => {
  const theme = useTheme();

  const [blogData, setBlogData] = useState([
    {
      title: "NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      title: "2 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      title: "3 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      title: "4 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
    {
      title: "5 NCM delivery service in winter",
      date: "FEBRUARY 19, 2023",
      content: "Desperate times require desperate measures. In our delivery service, we face hundreds of challenges, especially in winter. That’s why we move forward with the philosophy that our customers should never be deprived of the best service we can provide. There will be severe weather when we deliver your packages. There will be extreme conditions while delivering your packages. These are only a few of the hundreds of situations we face while offering service to our customers.",
      tags: "NCM, Nepal Can Move"
    },
  ]);

  return (
    <section id='newsMedia'>
      <div id='newsMediaChild1'>
        {blogData.map((blog) => (
          <BlogCard key={blog.title} title={blog.title} date={blog.date} content={blog.content} tags={blog.tags} />
        ))}

      </div>
    </section>
  )
}

export default NewsMedia;