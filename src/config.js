const data =[{
"info": {
"id": "14552",
"name": "Pizza Hut",
"cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
"locality": "Airport Road",
"areaName": "Murugeshpalya",
"costForTwo": "₹300 for two",
"cuisines": [
"Pizzas"
],
"avgRating": 4.2,
"parentId": "721",
"avgRatingString": "4.2",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 55,
"lastMileTravel": 8.5,
"serviceability": "SERVICEABLE",
"slaString": "50-55 mins",
"lastMileTravelString": "8.5 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-27 07:00:00",
"opened": true
},
"badges": {},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {}
}
},
"aggregatedDiscountInfoV3": {
"header": "₹100 OFF",
"subHeader": "ABOVE ₹399",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/pizza-hut-airport-road-murugeshpalya-bangalore-14552",
"type": "WEBLINK"
}
},
{
"info": {
"id": "5934",
"name": "Burger King",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/7f76a072-c1bc-4d74-ac56-33e0eea20c1e_5934.JPG",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹350 for two",
"cuisines": [
"Burgers",
"American"
],
"avgRating": 4.2,
"parentId": "166",
"avgRatingString": "4.2",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 34,
"lastMileTravel": 5.6,
"serviceability": "SERVICEABLE",
"slaString": "30-35 mins",
"lastMileTravelString": "5.6 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-06-27 06:55:00",
"opened": true
},
"badges": {
"imageBadges": [
{
"imageId": "Rxawards/_CATEGORY-Burger.png",
"description": "Delivery!"
}
]
},
"isOpen": true,
"aggregatedDiscountInfoV2": {},
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {
"badgeObject": [
{
"attributes": {
"description": "Delivery!",
"imageId": "Rxawards/_CATEGORY-Burger.png"
}
}
]
},
"textBased": {},
"textExtendedBadges": {}
}
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/burger-king-koramangala-bangalore-5934",
"type": "WEBLINK"
}
},
{
"info": {
"id": "74444",
"name": "Samosa Party",
"cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/9/3de49675-5a5a-470e-a30b-0eef986793d0_74444.jpg",
"locality": "Koramangala",
"areaName": "Koramangala",
"costForTwo": "₹100 for two",
"cuisines": [
"Fast Food",
"Snacks",
"Beverages",
"Chaat",
"North Indian",
"Street Food",
"Sweets",
"Desserts",
"Punjabi",
"Bakery"
],
"avgRating": 4.3,
"parentId": "6364",
"avgRatingString": "4.3",
"totalRatingsString": "10K+",
"sla": {
"deliveryTime": 29,
"lastMileTravel": 5.7,
"serviceability": "SERVICEABLE",
"slaString": "25-30 mins",
"lastMileTravelString": "5.7 km",
"iconType": "ICON_TYPE_EMPTY"
},
"availability": {
"nextCloseTime": "2024-07-04 00:00:00",
"opened": true
},
"badges": {
"textExtendedBadges": [
{
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available",
"fontColor": "#7E808C"
}
]
},
"isOpen": true,
"type": "F",
"badgesV2": {
"entityBadges": {
"imageBased": {},
"textBased": {},
"textExtendedBadges": {
"badgeObject": [
{
"attributes": {
"description": "",
"fontColor": "#7E808C",
"iconId": "guiltfree/GF_Logo_android_3x",
"shortDescription": "options available"
}
}
]
}
}
},
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "ABOVE ₹1500",
"discountTag": "FLAT DEAL"
},
"differentiatedUi": {
"displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
"differentiatedUiMediaDetails": {
"mediaType": "ADS_MEDIA_ENUM_IMAGE",
"lottie": {},
"video": {}
}
},
"reviewsSummary": {},
"displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
"restaurantOfferPresentationInfo": {}
},
"analytics": {},
"cta": {
"link": "https://www.swiggy.com/restaurants/samosa-party-koramangala-bangalore-74444",
"type": "WEBLINK"
}
}
];
const imgUrl = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const intialData_URL = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
const instamart_img_URL = "https://instamart-media-assets.swiggy.com/swiggy/image/upload/";


export{ data, imgUrl, intialData_URL, instamart_img_URL} ;