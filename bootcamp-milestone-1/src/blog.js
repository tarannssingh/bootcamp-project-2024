var blogs = [
    {
        title: "Moosa Village",
        date: "Sept 3, 2024",
        description: "Here I am at Moosa Village: the village of late Punjabi singer, Sidhu Moose Wala.",
        image: "./images/moosa.png",
        imageAlt: "Taran at Moosa Village",
        slug: "moosa-village"
    },
    {
        title: "Bye Punjab",
        date: "Sept 3, 2024",
        description: "Last day in Punjab.",
        image: "./images/punjab.png",
        imageAlt: "Taran at Chandigarh, Punjab",
        slug: "bye-punjab"
    }
];
var blogContainer = document.getElementById('blog-container');
// Call and IIFE
(function () {
    blogs.forEach(function (blog) {
        var newBlog = document.createElement("div");
        newBlog.classList.add("blog-post");
        // Insert all the contents of the blog post
        var blogLink = document.createElement("a");
        blogLink.href = "./src/blogs/".concat(blog.slug, ".html");
        blogLink.textContent = blog.title;
        blogLink.classList.add('blog-link'); //! Create corresponding styling
        var blogTitle = document.createElement("h2");
        blogTitle.classList.add('blog-title');
        blogTitle.appendChild(blogLink);
        var blogDate = document.createElement("h2");
        blogDate.textContent = blog.date;
        blogDate.classList.add('blog-date');
        var blogImage = document.createElement("img");
        blogImage.src = blog.image;
        blogImage.alt = blog.imageAlt;
        blogImage.height = 200;
        blogImage.classList.add("blog-image");
        var blogDescription = document.createElement('p');
        blogDescription.textContent = blog.description;
        blogDescription.classList.add("blog-description");
        newBlog.append(blogTitle);
        newBlog.append(blogImage);
        newBlog.append(blogDescription);
        newBlog.append(blogDate);
        blogContainer.append(newBlog);
    });
})();
