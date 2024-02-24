

const productsArr = [
    {
        id: 1,
        title: 'Camera',
        price: 10000,
        imageUrl: 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=400',
        quantity: 1,
        details: {
            brand: 'Nikon',
            resolution: '24MP',
            weight: '500g'
        }
    },
    {
        id: 2,
        title: 'Laptop',
        price: 50000,
        imageUrl: 'https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quantity: 1,
        details: {
            brand: 'Apple',
            processor: 'Intel Core i7',
            ram: '16GB'
        }
    },
    {
        id: 3,
        title: 'Kors Watch',
        price: 700000,
        imageUrl: 'https://images.pexels.com/photos/2783873/pexels-photo-2783873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quantity: 1,
        details: {
            brand: 'Michael Kors',
            material: 'Stainless Steel',
            waterResistance: '50m'
        }
    },
    {
        id: 4,
        title: 'Ball',
        price: 2500,
        imageUrl: 'https://images.pexels.com/photos/7702229/pexels-photo-7702229.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quantity: 1,
        details: {
            sport: 'Football',
            size: '5'
        }
    },
    {
        id: 5,
        title: 'Elegant Chairs',
        price: 6500,
        imageUrl: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quantity: 2,
        details: {
            material: 'Wood',
            color: 'Brown',
            dimensions: '20" x 20" x 40"'
        }
    },
    {
        id: 6,
        title: 'Luxury Sofa Set',
        price: 6500,
        imageUrl: 'https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        quantity: 2,
        details: {
            material: 'Leather',
            color: 'Black',
            seatingCapacity: '5-seater'
        }
    },
        {
            id: 7,
            title: 'Smartphone',
            price: 80000,
            imageUrl: 'https://images.pexels.com/photos/11772523/pexels-photo-11772523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Samsung',
                model: 'Galaxy S21 Ultra',
                screenSize: '6.8 inches',
                storage: '256GB',
                color: 'Phantom Black',
                network: '5G'
            }
        },
        {
            id: 8,
            title: 'Bicycle',
            price: 15000,
            imageUrl: 'https://images.pexels.com/photos/8755526/pexels-photo-8755526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add your image URL here
            quantity: 1,
            details: {
                type: 'Mountain Bike',
                frameMaterial: 'Aluminum',
                wheelSize: '29 inches',
                suspension: 'Front Suspension',
                gears: '21-speed'
            }
        },
        {
            id: 9,
            title: 'Headphones',
            price: 3000,
            imageUrl: 'https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=400', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Sony',
                model: 'WH-1000XM4',
                type: 'Over-Ear',
                noiseCancellation: 'Active Noise Cancellation',
                connectivity: 'Bluetooth',
                color: 'Black'
            }
        },
        {
            id: 10,
            title: 'Television',
            price: 60000,
            imageUrl: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'LG',
                model: 'OLED65C1PUB',
                screenSize: '65 inches',
                resolution: '4K Ultra HD',
                smartFeatures: 'WebOS, Google Assistant, Amazon Alexa',
                ports: 'HDMI x4, USB x3'
            }
        },
        {
            id: 11,
            title: 'Coffee Maker',
            price: 5000,
            imageUrl: 'https://images.pexels.com/photos/2878712/pexels-photo-2878712.jpeg?auto=compress&cs=tinysrgb&w=400', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Keurig',
                model: 'K-Elite',
                brewSizes: '4, 6, 8, 10, 12 oz',
                waterReservoir: '75 oz',
                brewType: 'Single Serve'
            }
        },
        {
            id: 12,
            title: 'Gaming Console',
            price: 35000,
            imageUrl: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Sony',
                model: 'PlayStation 5',
                storage: '825GB SSD',
                resolution: 'Up to 8K',
                rayTracing: 'Yes',
                controller: 'DualSense Wireless Controller'
            }
        },
        {
            id: 13,
            title: 'Fitness Tracker',
            price: 2000,
            imageUrl: 'https://images.pexels.com/photos/4498482/pexels-photo-4498482.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Fitbit',
                model: 'Charge 5',
                display: 'AMOLED',
                features: 'Heart Rate Monitoring, Sleep Tracking, SpO2',
                waterResistance: '50m',
                batteryLife: 'Up to 7 days'
            }
        },
        {
            id: 14,
            title: 'Cookware Set',
            price: 12000,
            imageUrl: 'https://images.pexels.com/photos/5825374/pexels-photo-5825374.jpeg?auto=compress&cs=tinysrgb&w=400', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Calphalon',
                setIncludes: '8" & 10" Fry Pan, 1.5 Qt & 2.5 Qt Saucepan with Cover, 3 Qt Saute Pan with Cover, 5 Qt Dutch Oven with Cover',
                material: 'Hard-Anodized Aluminum',
                nonStickCoating: 'Yes',
                ovenSafe: 'Up to 450°F'
            }
        },
        {
            id: 15,
            title: 'Vacuum Cleaner',
            price: 8000,
            imageUrl: 'https://images.pexels.com/photos/4107276/pexels-photo-4107276.jpeg?auto=compress&cs=tinysrgb&w=400', // Add your image URL here
            quantity: 1,
            details: {
                brand: 'Dyson',
                model: 'V11 Torque Drive',
                suctionPower: '185 AW',
                filtration: 'Whole-machine filtration',
                batteryLife: 'Up to 60 minutes',
                includedAttachments: 'Torque drive cleaner head, Mini motorized tool, Combination tool, Crevice tool, Mini soft dusting brush'
            }
        }
];

export default  productsArr
    