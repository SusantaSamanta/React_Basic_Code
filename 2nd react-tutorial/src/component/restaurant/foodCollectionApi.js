const foodCollection = [
    {
        id: 1,
        category: "Breakfast",
        name: "Maggi",
        description: "Maggi noodles, a quick and flavorful dish, is a favorite across India. It's seasoned with masala and sometimes enhanced with veggies or eggs for a delicious, comforting breakfast.",
        image: "./foodImg/maggi.jpg",
        price: "40 $"
    },
    {
        id: 2,
        category: "Breakfast",
        name: "Chole Bhature",
        description: "A popular Delhi breakfast, Chole Bhature pairs spicy chickpeas with fluffy deep-fried bread. It's rich, indulgent, and bursting with North Indian spices and flavors.",
        image: "./foodImg/chole.jpg",
        price: "60 $"
    },
    {
        id: 3,
        category: "Snack",
        name: "Kolkata Kathi Roll",
        description: "Kathi Rolls are Kolkata’s iconic street food. They’re made with a paratha rolled around spiced fillings like egg, chicken, or paneer, often garnished with onions and chutney.",
        image: "./foodImg/dhokla.jpg",
        price: "50 $"
    },
    {
        id: 4,
        category: "Lunch",
        name: "Rajma Chawal",
        description: "A comforting Punjabi dish, Rajma Chawal consists of red kidney beans cooked in a thick tomato gravy, served over steamed rice. It’s hearty, simple, and soul-satisfying.",
        image: "./foodImg/chawal.jpg",
        price: "80 $"
    },
    {
        id: 5,
        category: "Dinner",
        name: "Butter Chicken",
        description: "Butter Chicken is a creamy, tomato-based chicken curry loved across India. It’s mildly spiced and best enjoyed with naan or basmati rice, especially at dinner time.",
        image: "./foodImg/chicken.jpg",
        price: "120 $"
    },
    {
        id: 6,
        category: "Lunch",
        name: "Biryani",
        description: "Kolkata-style Biryani is aromatic and subtle, often made with fragrant rice, tender meat, and a signature potato. It’s a royal dish perfect for lunch feasts.",
        image: "./foodImg/biryani.jpg",
        price: "130 $"
    },
    {
        id: 7,
        category: "Snack",
        name: "Samosa",
        description: "Samosas are crispy, deep-fried snacks filled with spiced potatoes and peas. Perfect for tea-time or an evening bite with tamarind or mint chutney.",
        image: "./foodImg/samosa.jpg",
        price: "20 $"
    },
    {
        id: 8,
        category: "Breakfast",
        name: "Aloo Paratha",
        description: "Aloo Parathas are stuffed flatbreads made with spiced mashed potatoes, pan-fried in ghee, and served with curd or pickle. A North Indian breakfast favorite.",
        image: "./foodImg/puri.jpg",
        price: "50 $"
    },
    {
        id: 9,
        category: "Dinner",
        name: "Paneer Butter Masala",
        description: "A rich, creamy curry made with cottage cheese cubes simmered in a tomato-based sauce. Paneer Butter Masala is a vegetarian dinner delight served with naan or rice.",
        image: "./foodImg/paneer.jpg",
        price: "110 $"
    },
    {
        id: 10,
        category: "Lunch",
        name: "Litti Chokha",
        description: "A Bihari delicacy, Litti Chokha features wheat balls stuffed with spiced sattu, served with mashed vegetables and mustard oil. Rustic and earthy, it's full of flavor.",
        image: "./foodImg/chole.jpg",
        price: "70 $"
    },
    {
        id: 11,
        category: "Snack",
        name: "Pav Bhaji",
        description: "Mumbai’s iconic street food, Pav Bhaji includes buttery bread served with a spicy mashed vegetable curry. It’s fast, filling, and full of vibrant spices.",
        image: "./foodImg/samosa.jpg",
        price: "60 $"
    },
    {
        id: 12,
        category: "Dinner",
        name: "Chicken Tikka",
        description: "Marinated chicken pieces grilled to perfection, Chicken Tikka is smoky, spicy, and served with mint chutney. A great protein-packed dinner or starter option.",
        image: "./foodImg/chicken.jpg",
        price: "140 $"
    },
    {
        id: 13,
        category: "Lunch",
        name: "Palak Paneer",
        description: "A healthy vegetarian dish, Palak Paneer features paneer cubes in a smooth spinach gravy. Rich in flavor and nutrients, it pairs well with roti or rice.",
        image: "./foodImg/paneer.jpg",
        price: "100 $"
    },
    {
        id: 14,
        category: "Snack",
        name: "Dahi Puri",
        description: "Crispy puris filled with yogurt, chutneys, and spices, Dahi Puri is a popular Mumbai street snack known for its mix of tangy, sweet, and spicy flavors.",
        image: "./foodImg/puri.jpg",
        price: "45 $"
    },
    {
        id: 15,
        category: "Breakfast",
        name: "Idli Sambar",
        description: "Though South Indian, Idli Sambar is a popular breakfast even in North India. Soft steamed rice cakes are served with tangy, spicy lentil soup (sambar).",
        image: "./foodImg/chole.jpg",
        price: "50 $"
    },
    {
        id: 16,
        category: "Dinner",
        name: "Dal Makhani",
        description: "A Punjabi specialty made with black lentils and kidney beans, slow-cooked with butter and cream. Dal Makhani is rich, flavorful, and perfect with naan or jeera rice.",
        image: "./foodImg/dal-pakora.jpg",
        price: "90 $"
    },
    {
        id: 17,
        category: "Snack",
        name: "Veg Cutlet",
        description: "Crispy on the outside and soft inside, veg cutlets are made with mashed vegetables, breadcrumbs, and spices. They're shallow-fried and served with ketchup or green chutney.",
        image: "./foodImg/fish-curry.jpg",
        price: "35 $"
    },
    {
        id: 18,
        category: "Lunch",
        name: "Baingan Bharta",
        description: "Smoky mashed brinjal cooked with onions, tomatoes, and spices. Baingan Bharta is a North Indian favorite usually enjoyed with roti or paratha.",
        image: "./foodImg/samosa.jpg",
        price: "70 $"
    },
    {
        id: 19,
        category: "Breakfast",
        name: "Poha",
        description: "A light, fluffy dish made with flattened rice, mustard seeds, turmeric, onions, and peanuts. Poha is a quick and healthy breakfast popular in many Indian states.",
        image: "./foodImg/maggi.jpg",
        price: "30 $"
    },
    {
        id: 20,
        category: "Snack",
        name: "Dhokla",
        description: "Dhokla is a spongy, steamed snack made from fermented rice and gram flour batter. It's light, tangy, and served with green chutney and fried mustard seeds.",
        image: "./foodImg/dhokla.jpg",
        price: "40 $"
    },
    {
        id: 21,
        category: "Lunch",
        name: "Fish Curry",
        description: "Bengali-style fish curry made with fresh fish, mustard seeds, green chilies, and mustard oil. A tangy and spicy delicacy usually served with plain rice.",
        image: "./foodImg/fish-curry.jpg",
        price: "150 $"
    },
    {
        id: 22,
        category: "Dinner",
        name: "Kofta Curry",
        description: "Kofta Curry consists of soft vegetable or meat balls simmered in a rich, creamy gravy. It’s a popular dish for dinner parties across North India.",
        image: "./foodImg/chole.jpg",
        price: "120 $"
    },
    {
        id: 23,
        category: "Snack",
        name: "Moong Dal Pakora",
        description: "Crispy fritters made from ground moong dal, onions, and spices. These pakoras are deep-fried and perfect for monsoon evenings with hot chai.",
        image: "./foodImg/dal-pakora.jpg",
        price: "25 $"
    },
    {
        id: 24,
        category: "Breakfast",
        name: "Thepla",
        description: "Thepla is a Gujarati flatbread made with whole wheat flour, fenugreek leaves, and spices. It’s mildly spicy and ideal for breakfast or travel snacks.",
        image: "./foodImg/puri.jpg",
        price: "40 $"
    },
    {
        id: 25,
        category: "Dinner",
        name: "Shahi Paneer",
        description: "A rich North Indian curry made with paneer cubes in a creamy, spiced tomato and cashew gravy. Shahi Paneer is luxurious and best paired with naan.",
        image: "./foodImg/paneer.jpg",
        price: "115 $"
    },
    {
        id: 26,
        category: "Nashta",
        name: "Moong Dal Pakora",
        description: "Crispy fritters made from ground moong dal, onions, and spices. These pakoras are deep-fried and perfect for monsoon evenings with hot chai.",
        image: "./foodImg/dal-pakora.jpg",
        price: "25 $",
    },
];


// console.log(foodCollection.length)
export default foodCollection;