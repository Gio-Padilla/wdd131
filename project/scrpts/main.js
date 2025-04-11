// Get the current year
const currentYear = new Date().getFullYear();

// Get the last time the document was modified
let lastModified = new Date(document.lastModified);

// Insert it into the HTML by ID
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = lastModified;

// Header Menu Show and hide
const menuToggle = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");
menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    menuToggle.classList.toggle("show");
});

const usesList = [
    {
        title: "Useful Things",
        imageLocation: "images/useful-3d-print.webp",
        description: "3D printers are revolutionizing the way we produce useful objects, offering the ability to create custom tools, replacement parts, and everyday items on demand. From functional household items like hooks, organizers, and phone holders to specialized components for machines, 3D printing allows for rapid creation and customization. The convenience of printing on demand not only reduces waste but also eliminates the need to wait for shipments or find specific items in stores. Whether it’s a hard-to-find part for a broken appliance or a new tool for a DIY project, 3D printing makes it easy to produce exactly what is needed when it’s needed."
    },{
        title: "Hobby Figures",
        imageLocation: "images/figure-3d-print.webp",
        description: "In the realm of hobbies, 3D printers have opened up a world of possibilities for enthusiasts to create intricate figures and models. Hobbyists can design and print custom figurines, detailed miniatures for tabletop games, or even collectibles that reflect their personal style. 3D printing gives hobbyists the freedom to craft pieces with precise detail, ensuring that every figure is exactly as envisioned. Whether it’s a one-of-a-kind sculpture or a part of a larger diorama, 3D printing provides the perfect medium for bringing these creative visions to life."
    },{
        title: "Design Testing",
        imageLocation: "images/prototype-3d-print.webp",
        description: "Design testing becomes significantly easier with 3D printing, as it allows designers to quickly prototype and test their concepts before committing to mass production. Rapid prototyping with 3D printing offers an efficient way to experiment with different designs, materials, and features, all in real-world conditions. This process cuts down on the need for expensive tooling and lengthy production times, enabling designers to iterate and improve their products faster. Whether for consumer goods, automotive parts, or tech gadgets, 3D printing helps bring better designs to market more quickly and cost-effectively."
    },{
        title: "Robotics",
        imageLocation: "images/robot-3d-print.webp",
        description: "In the field of robotics, 3D printing is transforming the way custom parts and components are created. Engineers and robotics enthusiasts can print specialized parts that are tailored to specific needs, whether it’s lightweight structures, intricate joints, or custom sensors. This flexibility not only accelerates the development process but also reduces the cost of producing unique parts that might otherwise be expensive or hard to obtain. With the ability to rapidly prototype and produce functioning robotic systems, 3D printing is driving innovation and empowering creators to experiment and push the boundaries of what’s possible in robotics."
    },{
        title: "Education and Learning",
        imageLocation: "images/education-3d-print.webp",
        description: "3D printing has become a powerful tool in education, providing students and educators with hands-on learning experiences that were previously difficult to achieve. From creating models of historical artifacts to building complex geometric shapes, 3D printers help bring abstract concepts to life in a tactile and engaging way. In engineering and science classrooms, students can design and test their own projects, fostering creativity and problem-solving skills. Additionally, 3D printing can be used to produce educational materials like visual aids, anatomical models, and interactive learning tools, enhancing the educational experience and helping to bridge the gap between theory and practical application."
    },{
        title: "Fashion and Accessories",
        imageLocation: "images/fashion-3d-print.webp",
        description: "3D printing is making waves in the fashion industry by allowing designers to create unique clothing and accessories that were previously impossible to produce with traditional methods. From intricate jewelry to custom footwear, 3D printing enables the creation of personalized, one-of-a-kind fashion pieces. Designers can experiment with different materials, textures, and structures to push the boundaries of fashion innovation. This technology also allows for sustainable fashion by reducing waste and enabling on-demand production, making it a game changer for both designers and consumers."
    },{
        title: "Medical Devices and Prosthetics",
        imageLocation: "images/medical-3d-print.webp",
        description: "3D printing is revolutionizing the medical field by providing innovative solutions for creating custom prosthetics, implants, and medical devices. Surgeons and medical professionals can design and print highly personalized prosthetics that fit the unique needs of individual patients, improving comfort and functionality. Additionally, 3D printing is used to create complex surgical models that help doctors plan procedures with greater precision. From affordable prosthetics for underserved communities to highly advanced medical devices, 3D printing is changing the way healthcare is delivered and improving patient outcomes."
    },{
        title: "Architecture and Construction",
        imageLocation: "images/architecture-3d-print.webp",
        description: "In architecture and construction, 3D printing is paving the way for more efficient and sustainable building practices. Architects and builders are using 3D printers to create intricate architectural models, customized building components, and even full-scale structures. This technology allows for faster and more cost-effective construction, while also reducing waste and utilizing eco-friendly materials. From designing complex facades to constructing entire houses, 3D printing is set to transform the way we think about and build our environments."
    },{
        title: "Automotive Parts and Customization",
        imageLocation: "images/automotive-3d-print.webp",
        description: "3D printing is transforming the automotive industry by enabling the rapid prototyping and production of custom parts. Whether it’s for designing lightweight components, creating custom body parts, or testing new features, 3D printing offers a fast and cost-effective way to innovate. Car enthusiasts can also use 3D printing to create personalized car accessories, such as dashboard parts or unique emblems, all while ensuring that the parts are tailored to specific needs. This technology allows manufacturers and hobbyists alike to enhance performance and aesthetics with precision."
    },{
        title: "Food and Culinary Arts",
        imageLocation: "images/food-3d-print.webp",
        description: "In the culinary world, 3D printing is opening up new possibilities for creating intricate designs, textures, and even personalized food items. Chefs can print complex shapes, custom ingredients, and even entire dishes with precision and consistency. Whether for creating decorative elements, personalized chocolates, or even printing food directly from ingredients like dough or purees, 3D printing is redefining the future of food design and presentation. This technology allows for innovation in both the artistic and nutritional aspects of food production."
    },{
        title: "Aerospace and Aviation",
        imageLocation: "images/aerospace-3d-print.webp",
        description: "In the aerospace and aviation industries, 3D printing is playing a crucial role in reducing the weight and cost of components, while maintaining high levels of precision and durability. Manufacturers are able to print lightweight parts for aircraft and spacecraft, from engine components to structural elements, which helps improve fuel efficiency and overall performance. 3D printing also accelerates the prototyping process, allowing engineers to test designs more quickly and make adjustments in real-time. With the ability to create complex, customized parts that traditional methods can’t easily achieve, 3D printing is becoming an essential tool in aerospace innovation."
    },{
        title: "Home Decor and Furniture",
        imageLocation: "images/furniture-3d-print.webp",
        description: "3D printing is revolutionizing the home decor and furniture industries by enabling the creation of customized and unique pieces. Designers and homeowners can print everything from intricate vases and light fixtures to fully functional furniture like chairs, tables, and shelves. The ability to experiment with different shapes, sizes, and materials allows for the production of one-of-a-kind, personalized designs that reflect individual tastes. Additionally, 3D printing allows for more sustainable manufacturing, reducing material waste and enabling on-demand production."
    },{
        title: "Sports Equipment and Gear",
        imageLocation: "images/sports-3d-print.webp",
        description: "3D printing is playing a significant role in the creation of customized sports equipment and gear. Athletes can benefit from personalized gear that fits their unique needs, whether it’s custom-fit shoes, protective padding, or specialized training tools. The technology also enables the rapid prototyping of new sports equipment designs, allowing manufacturers to test and refine products quickly. With the ability to create lightweight, durable, and tailored equipment, 3D printing is enhancing athletic performance and safety across various sports."
    },{
        title: "Toys and Games",
        imageLocation: "images/toys-3d-print.webp",
        description: "In the toy and gaming industries, 3D printing is enabling the production of highly customizable and creative products. Designers can create intricate toys, action figures, and game pieces that reflect individual preferences and specifications. Parents and collectors can also use 3D printers to create one-of-a-kind toys or accessories for existing games. Whether it’s creating miniature models for tabletop games or crafting unique plush toys, 3D printing allows for endless creative possibilities in the world of toys and games."
    }
    
];


const posLocation = document.getElementById("uses-list");
if (posLocation) {
    usesList.forEach(theUse => {
        posLocation.append(createUseCard(theUse));
    });
}

function createUseCard(theCard) {
    // Creating all of the elements
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("display-card");
    const cardHead = document.createElement("h3");
    cardHead.textContent = theCard.title;
    const cardImg = document.createElement("img");
    cardImg.src = theCard.imageLocation;
    cardImg.alt = `${theCard.title} 3d Print`;
    cardImg.width = "900";
    cardImg.height = "600";
    cardImg.loading = "lazy";
    const cardDesc = document.createElement("p");
    cardDesc.textContent = theCard.description;
    // Combining all of the elements
    cardDiv.append(cardHead);
    cardDiv.append(cardImg);
    cardDiv.append(cardDesc);
    // Returning the fill card
    return cardDiv
}