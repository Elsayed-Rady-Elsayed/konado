import { extend } from "jquery";
import React, { Component } from "react";
import $ from "jquery";
class BlogPage extends Component {
  state = {
    recentPosts: [
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-150x150.jpg",
        name: "Sample post with format link",
        date: "April 10, 2023",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-150x150.jpg",
        name: "Post with Gallery",
        date: "April 9, 2023",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-150x150.jpg",
        name: "Sample post with format link",
        date: "April 10, 2023",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-150x150.jpg",
        name: "Sample post with format audio",
        date: "April 4, 2023",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-150x150.jpg",
        name: "Sample post with format link",
        date: "April 10, 2023",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog2-150x150.jpg",
        name: "Sample post with format link",
        date: "April 10, 2023",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-150x150.jpg",
        name: "Blog image post (sticky)",
        date: "April 5, 2023",
      },
    ],
    blogs: [
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-870x530.jpg",
        head: "Sample post with format link",
        date: "April 10, 2023",
        p: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci.…",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-870x530.jpg",
        head: "Sample post with format audio",
        date: "April 10, 2023",
        p: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci.…",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog2-870x530.jpg",
        head: "Sample post with format image",
        date: "April 10, 2023",
        p: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci.…",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog4-870x530.jpg",
        head: "Blog image post (sticky)",
        date: "April 10, 2023",
        p: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci.…",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog2-870x530.jpg",
        head: "Sample post with format link",
        date: "April 10, 2023",
        p: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci.…",
      },
      {
        img: "https://demo-38.woovinapro.com/wp-content/uploads/2019/07/large-blog3-870x530.jpg",
        head: "Sample post with format link",
        date: "April 10, 2023",
        p: "Maecenas eget congue augue. Sed mollis tempor velit, et tempor justo cursus vel. Phasellus lacinia placerat lacus, vulputate volutpat tellus fringilla eu. Phasellus rhoncus varius tortor, non ultricies felis condimentum eget unc ornare susc Sed mollis, libero ut lacinia ultrices, ex urna sodales tortor, sed pulvinar ex eros vel orci.…",
      },
    ],
  };
  render() {
    let recentList = this.state.recentPosts.map((el) => {
      return (
        <div className="postCard" key={Math.random()}>
          <img src={el.img} />
          <div className="text">
            <p>{el.name}</p>
            <div>{el.date}</div>
          </div>
        </div>
      );
    });
    let BlogsList = this.state.blogs.map((el) => {
      return (
        <div className="BlogCard" key={Math.random()}>
          <img src={el.img} />
          <p className="head">{el.head}</p>
          <div className="date">
            <span>
              <ion-icon name="calendar-outline"></ion-icon>
            </span>
            <span className="dateNum">{el.date}</span>
          </div>
          <p className="parg">{el.p}</p>
          <button>
            Continue Reading{" "}
            <ion-icon name="chevron-forward-outline"></ion-icon>
          </button>
        </div>
      );
    });
    return (
      <div className="container BlogPage">
        <ion-icon
          name="megaphone-outline"
          id="blogSideShow"
          onClick={() => {
            $("#sideBarBlog").fadeToggle();
            window.scrollTo({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        ></ion-icon>
        <p className="blogHead">Blogs</p>
        <span className="line"></span>
        <div className="blogContent">
          <div className="blogContent">{BlogsList}</div>
          <div className="sideBarBlog" id="sideBarBlog">
            <div className="searchPart">
              <p>Search</p>
              <input type="text" placeholder="search" />
            </div>
            <div className="recentPosts">
              <p>Recent Posts</p>
              <div className="postsContainer">{recentList}</div>
            </div>
            <div className="commets">
              <p>Recent Commetns</p>
            </div>
            <div className="archive">
              <p>Archives</p>
              <span className="archEl">Aprial 2023</span>
              <span className="archEl">december 2023</span>
            </div>
            <div className="CategoriesBlog">
              <p>Categories</p>
              <span className="archEl">Business</span>
              <span className="archEl">Fashion</span>
              <span className="archEl">Furniture</span>
              <span className="archEl">Interior</span>
              <span className="archEl">Travel</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default BlogPage;
