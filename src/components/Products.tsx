import Image from "next/image";
// import Bedroom from "../public/bedroom.png"
export default function Products(){

    interface Card{
        name: string,
        age: number,
        description: string,
        image: string,
        price: string,
      }

    const data: Card[] = [
        {
          name: 'Syltherine',
          price: "Rp 2.500.000",
          age: 30,
          image: "/Hero.png",
          description: 'Stylish cole chair',
        },
        {
          name: 'Leviosa',
          price: "Rp 2.500.000",
          age: 25,
          image: "/img2.png",
          description: 'A stylish cafe chair',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/bedroom.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/dining.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (1).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/images (2).png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/img2.png',
          description: 'A software engineer specializing in backend systems.',
        },
        {
          name: 'Sam Wilson',
          price: "Rp 2.500.000",
          age: 28,
          image: '/img1.png',
          description: 'A software engineer specializing in backend systems.',
        },
      ];
    
    return (
        <>
        <div  className="product">
            <h2 className="text-center p-2 font-bold text-[3rem]">Our Product</h2>
            </div>
            <div className="cardsContainer">
            {data.map((card, index) => (
              
            <div className="card" key={index} style={{ width: "15rem" }}>
                <img
                  src={card.image}
                  style={{ width: "18rem", height: "18rem" }}
                  className="card-img-top"
                //   alt={card.title}
                />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.name}
                  </h5>
                  <p className="card-text">{card.description}</p>
                  <h5 className="card-title" style={{ fontWeight: "bold" }}>
                    {card.price}
                  </h5>
            </div>
            </div>
                    ))}


        </div>
        <div className="flex items-center justify-center mb-12">
       <button className="productBtn text-[#B88E2F] p-2 border-2 border-[#B88E2F]">Show More</button>
        </div>
        </>
    )
}