import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const items = [
  {
    id: 1,
    foodName: "Pasta",
    discount: "20%",
    margin: "-right-10",
    price: "Rs.119",
    image: "/assets/pasta.webp",
    description: "On First Order",
    bgColor: "bg-[--primary-text-color]",
  },
  {
    id: 2,
    foodName: "Burger",
    discount: "25%",
    margin: "-right-20",
    price: "Rs.149",
    image: "/assets/burger.webp",
    description: "On Fast Order",
    bgColor: "bg-black",
  },
  {
    id: 3,
    foodName: "Combo",
    discount: "35%",
    margin: "-right-10",
    price: "Rs.299",
    image: "/assets/combo.webp",
    description: "On Fast Order",
    bgColor: "bg-[--accent-color]",
  },
];

export const AboutFoods = () => {
  return (
    <>
      <section className="container mx-auto text-white px-4 lg:px-6 py-8 lg:py-12">
        <div
          data-aos="fade-up"
          className="grid grid-cols-1 md:grid-cols-3 py-12 lg:px-4 "
        >
          {items.map((item) => (
            <div
              key={item.id}
              className={`${item.bgColor} w-full overflow-hidden relative h-56 flex flex-col justify-center pl-4 hover:-translate-y-4 transition-all hover:scale-105 cursor-pointer`}
            >
              <img
                className={`absolute h-52 md:h-64 ${item.margin}`}
                src={item.image}
                alt={item.foodName}
              />
              <h1 className="md:text-4xl text-3xl font-extrabold italic">
                {item.foodName}
              </h1>
              <p className="mt-4">
                Get a <span className="font-extrabold">{item.discount}</span>{" "}
                discount <br />
                {item.description}
              </p>
              <p className="mt-4 md:text-4xl text-2xl font-extrabold">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-12 items-center gap-8 text-black">
          <div className="col-span-12 md:col-span-6 items-center flex justify-center relative">
            <img
              data-aos="fade-up"
              data-aos-delay="20"
              data-aos-duration="1000"
              data-aos-once="true"
              className="z-10 hover:scale-105 transition-all h-40 md:h-full"
              src="/assets/combo2.webp"
              alt="hero picture"
            />
            <img
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-once="true"
              className="absolute overflow-hidden top-1 lg:top-14"
              src="/assets/brush.webp"
              alt="hero background"
            />
          </div>

          <div className="flex flex-col items-center md:items-start justify-center col-span-12 md:col-span-6 w-full z-10 sm:text-center lg:text-start text-center">
            <h1
              data-aos="fade-up"
              data-aos-once="true"
              data-aos-duration="1000"
              className="text-5xl lg:text-6xl md:text-7xl font-extrabold italic text-center mt-8 md:mt-0"
            >
              About <span className="text-[--primary-text-color]">Foodey</span>
            </h1>
            <p
              data-aos="fade-up"
              data-aos-delay="10"
              data-aos-once="true"
              data-aos-duration="1000"
              className="text-lg mt-8 md:mt-4 mb-4"
            >
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem, cumque id! Accusantium perferendis laborum error
              illum? Aliquid doloribus sapiente quidem atque a aut, culpa eos
              cupiditate?
              <br />
              <br />
              Id fugiat iure mollitia? consectetur adipisicing elit. Esse
              aliquid quo autem. Impedit, quod inventore. Lorem ipsum dolor sit
              amet,
            </p>
            <ul>
              <li
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-once="true"
                data-aos-duration="1000"
                className="flex items-center gap-2 pb-4 mt-4"
              >
                <CheckCircleIcon style={{ color: "red" }} />
                Delicious & Healthy Foods
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-once="true"
                data-aos-duration="1000"
                className="flex items-center gap-2 pb-4"
              >
                <CheckCircleIcon style={{ color: "red" }} />
                Best Price & Offers
              </li>
              <li
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-once="true"
                data-aos-duration="1000"
                className="flex items-center gap-2 pb-4"
              >
                <CheckCircleIcon style={{ color: "red" }} />
                Made By Fresh Ingredients
              </li>
            </ul>
            <div className="mt-4 lg:mt-8">
              <button
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-once="true"
                data-aos-duration="1000"
                className="mt-4 text-[--black] bg-[--accent-color] px-4 py-2 rounded-3xl text-lg font-semibold hover:text-[--accent-color] hover:bg-white border border-[--accent-color] transition-all active:translate-y-0.5 mr-4"
              >
                Order Now
              </button>
              <button
                data-aos="fade-up"
                data-aos-delay="10"
                data-aos-once="true"
                data-aos-duration="1000"
                className="text-[--black] bg-[--white] px-4 py-2 rounded-3xl text-lg font-semibold hover:text-white hover:bg-black border border-[--black] transition-all active:translate-y-0.5"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
