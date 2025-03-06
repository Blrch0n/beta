import { BsThreeDots } from "react-icons/bs";

const blogPosts = [
  {
    date: "14 January 2021",
    author: "By Md.Shaharai",
    title: "I like the body. I like to design everything to do",
    image: "./blog1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharai",
    title: "ways to quickly increase traffic to your website",
    image: "./blog2.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
  {
    date: "14 January 2021",
    author: "By Md.Shaharai",
    title: "I like the body. I like to design everything to do",
    image: "./blog3.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
  },
];

const Section11 = () => {
  return (
    <section className="w-full h-[681px] bg-white p-[100px] relative flex justify-center items-center">
      <span className="w-[336px] h-[347px] absolute top-[100px] -left-[150px]">
        <img src="/dot_01.png" alt="Decorative Dots" />
      </span>
      <div className="w-[1140px] h-full flex flex-col gap-8">
        <div className="font-montserrat font-bold">
          <h4 className="text-[18px] text-[#f783aa]">LATEST NEWS</h4>
          <h3 className="text-[32px] text-black font-extrabold">
            publish what <span className="text-[#a762e9]">you think</span>
          </h3>
        </div>
        <div className="w-full h-fit flex justify-between items-center gap-7">
          {blogPosts.map((post, index) => (
            <div
              key={index}
              className="w-full h-[280px] flex flex-col relative rounded-[15px] items-start overflow-hidden justify-between group z-10"
            >
              <img src={post.image} className="w-full" alt="Blog Post" />
              <div className="absolute flex flex-col bottom-0 p-[25px] text-black right-0 w-full h-[156px] group-hover:h-[228px] transition-all border-[#f2f2f2] border-[1px] duration-500 rounded-[15px] bg-white">
                <div className="flex flex-row justify-between">
                  <a>{post.date}</a>
                  <a>{post.author}</a>
                </div>
                <a className="font-bold text-[20px]">{post.title}</a>
                <p className="text-[16px] hidden font-medium font-mulish group-hover:flex duration-300 text-[#999]">
                  {post.description}
                </p>
                <BsThreeDots size={20} color="black" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <span className="w-[736px] h-[624px] absolute bottom-0 right-0 z-[0]">
        <img src="/Latest-news.png" alt="Latest News" />
      </span>
    </section>
  );
};

export default Section11;
