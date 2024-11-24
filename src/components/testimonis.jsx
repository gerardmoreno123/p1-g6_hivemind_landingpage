import '../App.css';

const testimonials = [
    {
        name: "Maria Samntha",
        profession: "Social influencer",
        text: "I am having the best customer experience with this company. They are very professional and always deliver on time.",
        image: "https://www.famousbirthdays.com/headshots/maria-samantha-de-leon-1.jpg", // Replace with the actual path to the image
        rating: 5,
    },
    {
        name: "Lisa Cudrow",
        profession: "Graphic Designer",
        text: "The services are at very affordable price and the quality is top-notch. I would recommend this company to everyone.",
        image: "https://cdn.britannica.com/62/248562-050-310A83C9/Lisa-Kudrow-Friends.jpg?w=400&h=300&c=crop", // Replace with the actual path to the image
        rating: 5,
    },
    {
        name: "John Smith",
        profession: "Software Engineer",
        text: "They are very professional with their API services and the documentation is very detailed. I am very happy with their services.",
        image: "https://cdn-images.dzcdn.net/images/artist/086f50bb1ce0e3033634e5e9c2d75462/1900x1900-000000-80-0-0.jpg", // Replace with the actual path to the image
        rating: 5,
    },
];

function Testimonis() {
    return (
        <div id="testimonials" className="bg-blue-300">
            <h1 className="text-3xl font-semibold mb-8 text-white">Testimonials</h1>
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-6 md:space-y-0">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="backdrop-blur-3xl p-6 rounded-3xl shadow-lg flex flex-col items-center">
                        <img src={testimonial.image} alt={testimonial.name} className="rounded-full w-24 h-24 mb-4" />
                        <h2 className="font-bold text-xl">{testimonial.name}</h2>
                        <p className="text-blue-500">{testimonial.profession}</p>
                        <p className="mt-2 text-lg italic text-white">&quot;{testimonial.text}&quot;</p>
                        <div className="mt-2 text-yellow-500">
                            {'★'.repeat(Math.floor(testimonial.rating))}{'☆'.repeat(5 - Math.floor(testimonial.rating))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonis;
