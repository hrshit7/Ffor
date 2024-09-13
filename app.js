import React from "react";
import ReactDOM from "react-dom/client";

/**
 * AppLayout
 * 1. Header
 * -logo
 * -Nav items
 * 2. Body 
 * -search
 * -RestaurantContainers
 *   -- restra carts
 *     -img
 *     -name
 *     -cusine
 *     -rating
 *     -timing
 * 3. footer 
 * -copyright 
 * -links
 */

const RestaurantCarts = (props) =>{
    const {resData} = props; //optimize it
    const {name, cuisines, costForTwo, sla.deli}
    return (
        <div className="res-cart">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ resData.info.cloudinaryImageId}></img>
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(", ")}</h4>
            <h4>{resData.info.costForTwo}</h4>
            <h4>{resData.info.avgRating} Star</h4>
            <h4>{resData.info.sla.deliveryTime+" Minute"}</h4>
        </div>
    )
}

const resObj = [
    {
        "info": {
          "id": "882432",
          "name": "Theobroma",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/22/7b64fb9a-5d88-4108-87c2-b953e9f5c0bb_882432.jpg",
          "locality": "Near Janjeerwala Square",
          "areaName": "Darshan Mall, Race Course Rd",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Bakery",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.6,
          "parentId": "1040",
          "avgRatingString": "4.6",
          "totalRatingsString": "243",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 5.9,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-14 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png",
                "description": "Delivery!"
              },
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Desserts.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "isNewlyOnboarded": true,
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/theobroma-near-janjeerwala-square-darshan-mall-race-course-rd-rest882432",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "64708",
          "name": "Jain Mithai Bhandar (JMB)",
          "cloudinaryImageId": "h4khlm6nndlaylfi4meb",
          "locality": "Khajrana",
          "areaName": "Old Palasia",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Chinese",
            "Fast Food",
            "South Indian",
            "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "108938",
          "avgRatingString": "4.5",
          "totalRatingsString": "25K+",
          "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 7.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "7.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 22:15:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Mithai.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Poa%20Kachori.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                "description": "OnlyOnSwiggy"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Mithai.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Mithai.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Poa%20Kachori.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "OnlyOnSwiggy",
                      "imageId": "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹19"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "594"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/jain-mithai-bhandar-jmb-khajrana-old-palasia-rest64708",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "767642",
          "name": "Subway",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/8ff4d852-bdf0-40a4-92d9-b2445b15eeb1_767642.JPG",
          "locality": "Prestige College",
          "areaName": "The Hub",
          "costForTwo": "₹350 for two",
          "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.1,
          "parentId": "2",
          "avgRatingString": "4.1",
          "totalRatingsString": "645",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 6.2,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "6.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-14 03:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Sandwiches.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "30% OFF",
            "subHeader": "UPTO ₹75"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/subway-prestige-college-the-hub-rest767642",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "65267",
          "name": "McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_65267.JPG",
          "locality": "South Tukoganj",
          "areaName": "South Tukoganj",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
          ],
          "avgRating": 4.4,
          "parentId": "630",
          "avgRatingString": "4.4",
          "totalRatingsString": "16K+",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 6.3,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "6.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:45:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Burger.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Burger.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Burger.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹209"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.3",
              "ratingCount": "6.5K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/mcdonalds-south-tukoganj-rest65267",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "580590",
          "name": "GetAWay-Ice Creams & Desserts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/5/b17a6bfa-1902-4862-a22e-024d901857c1_580590.jpg",
          "locality": "Scheme No. 54",
          "areaName": "Vijay Nagar",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts",
            "Healthy Food",
            "Sweets"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "354819",
          "avgRatingString": "4.4",
          "totalRatingsString": "260",
          "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 7.7,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "7.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-14 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹69"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/getaway-ice-creams-and-desserts-scheme-no-54-vijay-nagar-rest580590",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "192425",
          "name": "McCafe by McDonald's",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/8/19/14e42c34-976f-4707-b732-0a54b71614e4_192425.jpg",
          "locality": "South Tukoganj",
          "areaName": "M.G Rd",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "American",
            "Beverages",
            "Desserts"
          ],
          "avgRating": 4.5,
          "parentId": "8263",
          "avgRatingString": "4.5",
          "totalRatingsString": "24",
          "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 6.3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.3 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:45:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/mccafe-by-mcdonalds-south-tukoganj-m-g-rd-rest192425",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "403809",
          "name": "Starbucks Coffee",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/3/5bdd318d-fe96-401f-ba94-b91c7b9a4abe_403809.JPG",
          "locality": "Race Course Road",
          "areaName": "New Palasia",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Bakery",
            "Ice Cream"
          ],
          "avgRating": 4.4,
          "parentId": "195515",
          "avgRatingString": "4.4",
          "totalRatingsString": "1.0K+",
          "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 5,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "5.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/starbucks-coffee-race-course-road-new-palasia-rest403809",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "303103",
          "name": "KFC",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/e2270129-d210-4a35-b044-73ae307c5280_303103.JPG",
          "locality": "RNT Marg",
          "areaName": "South Tukoganj",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Burgers",
            "Fast Food",
            "Rolls & Wraps"
          ],
          "avgRating": 4.4,
          "parentId": "547",
          "avgRatingString": "4.4",
          "totalRatingsString": "5.4K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 5.7,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.7 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:00:00",
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
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.3",
              "ratingCount": "1.2K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/kfc-rnt-marg-south-tukoganj-rest303103",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "84070",
          "name": "Gurukripa Restaurant - Sarwate",
          "cloudinaryImageId": "g5txnz35wlrgbskk3r8y",
          "locality": "Sarwate",
          "areaName": "South Tukoganj",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "North Indian",
            "Thalis",
            "Indian",
            "Fast Food",
            "Chinese",
            "Beverages",
            "Desserts",
            "Jain",
            "Punjabi"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "92204",
          "avgRatingString": "4.4",
          "totalRatingsString": "118K+",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Khichdi.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-North%20Indian.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Paneer.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Pure%20Veg.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Khichdi.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-North%20Indian.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/gurukripa-restaurant-sarwate-sarwate-south-tukoganj-rest84070",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "698520",
          "name": "Ibaco",
          "cloudinaryImageId": "a75b9873d2809fc9c3df51c5c24b11f2",
          "locality": "Sector -D",
          "areaName": "Vijay Nagar",
          "costForTwo": "₹500 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.3,
          "veg": true,
          "parentId": "3481",
          "avgRatingString": "4.3",
          "totalRatingsString": "72",
          "sla": {
            "deliveryTime": 31,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-14 02:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "newg.png",
                "description": "Gourmet"
              }
            ]
          },
          "isOpen": true,
          "aggregatedDiscountInfoV2": {

          },
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Gourmet",
                      "imageId": "newg.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/ibaco-sector-d-vijay-nagar-rest698520",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "198432",
          "name": "The Biryani Life",
          "cloudinaryImageId": "mclqhksycwrqrvlxyt4v",
          "locality": "AMAR DARSHAN BUILDING, SAKET SQUARE, KHAJRANA MAIN ROAD",
          "areaName": "Baikunth Dham",
          "costForTwo": "₹200 for two",
          "cuisines": [
            "Biryani",
            "Mughlai",
            "Lucknowi",
            "Hyderabadi",
            "Kebabs",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.2,
          "parentId": "8496",
          "avgRatingString": "4.2",
          "totalRatingsString": "710",
          "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 7.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "7.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/the-biryani-life-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-rest198432",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "65129",
          "name": "Sweet Truth - Cake and Desserts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/7/2/b08d5d0b-f4c3-43ae-8745-a20971e84fcc_65129.JPG",
          "locality": "AMAR DARSHAN BUILDING, ,SAKET SQUARE, , KHAJRANA MAIN ROAD",
          "areaName": "Baikunth Dham",
          "costForTwo": "₹450 for two",
          "cuisines": [
            "Snacks",
            "Bakery",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.5,
          "parentId": "4444",
          "avgRatingString": "4.5",
          "totalRatingsString": "1.5K+",
          "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 7.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "7.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹79"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/sweet-truth-cake-and-desserts-amar-darshan-building-saket-square-khajrana-main-road-baikunth-dham-rest65129",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "86719",
          "name": "Cafe Coffee Day",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/4/47b48f68-743b-4244-8aa7-ead4d0d67f52_86719.jpg",
          "locality": "TREASURE ISLAND 2 MALL INDORE MP",
          "areaName": "South Tukoganj",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Beverages",
            "Cafe",
            "Snacks",
            "Desserts",
            "Burgers",
            "Ice Cream",
            "Bakery",
            "Fast Food"
          ],
          "avgRating": 4.5,
          "parentId": "1",
          "avgRatingString": "4.5",
          "totalRatingsString": "416",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹159"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/cafe-coffee-day-treasure-island-2-mall-mp-south-tukoganj-rest86719",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "770309",
          "name": "Keventers - Milkshakes & Desserts",
          "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/5c0cf9a2-1195-4825-956b-bf00c6660d91_770309.JPG",
          "locality": "Sapna Sangeeta Road",
          "areaName": "Narendra Chamber",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Beverages",
            "Ice Cream",
            "Desserts",
            "Healthy Food"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "268997",
          "avgRatingString": "4.5",
          "totalRatingsString": "234",
          "sla": {
            "deliveryTime": 33,
            "lastMileTravel": 6.8,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.8 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:59:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/keventers-milkshakes-and-desserts-sapna-sangeeta-road-narendra-chamber-rest770309",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "744948",
          "name": "Taco Bell",
          "cloudinaryImageId": "d3b3db238b6448c3f297c851e9d0b96b",
          "locality": "AB road",
          "areaName": "Indore",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "Mexican",
            "Fast Food",
            "Snacks"
          ],
          "avgRating": 4.1,
          "parentId": "1557",
          "avgRatingString": "4.1",
          "totalRatingsString": "1.1K+",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 6.9,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.9 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-14 04:00:00",
            "opened": true
          },
          "badges": {

          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {

              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹59"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/taco-bell-ab-road-indore-rest744948",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "519580",
          "name": "Domino's Pizza",
          "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
          "locality": "Banganaga Main Road",
          "areaName": "Sarafa",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
          ],
          "avgRating": 4.2,
          "parentId": "2456",
          "avgRatingString": "4.2",
          "totalRatingsString": "197",
          "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 0.1,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "0.1 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 22:55:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              }
            ],
            "textExtendedBadges": [
              {
                "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                "shortDescription": "Free Delivery",
                "fontColor": "#7E808C"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "",
                      "fontColor": "#7E808C",
                      "iconId": "Ratnesh_Badges/free%20del%20icon.png",
                      "shortDescription": "Free Delivery"
                    }
                  }
                ]
              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/dominos-pizza-banganaga-main-road-sarafa-rest519580",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "362169",
          "name": "Baskin Robbins - Ice Cream Desserts",
          "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
          "locality": "44th Scheme",
          "areaName": "Khatiwala",
          "costForTwo": "₹250 for two",
          "cuisines": [
            "Desserts",
            "Ice Cream"
          ],
          "avgRating": 4.5,
          "veg": true,
          "parentId": "5588",
          "avgRatingString": "4.5",
          "totalRatingsString": "317",
          "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 5.5,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "5.5 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                "description": "Delivery!"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/baskin-robbins-ice-cream-desserts-44th-scheme-khatiwala-rest362169",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "64532",
          "name": "Sagar Gaire",
          "cloudinaryImageId": "irki7zudjxrbbmtcvpgy",
          "locality": "New Palasia",
          "areaName": "New Palasia",
          "costForTwo": "₹300 for two",
          "cuisines": [
            "North Indian",
            "Chinese",
            "Italian",
            "Thalis",
            "Punjabi"
          ],
          "avgRating": 4.4,
          "veg": true,
          "parentId": "7049",
          "avgRatingString": "4.4",
          "totalRatingsString": "55K+",
          "sla": {
            "deliveryTime": 48,
            "lastMileTravel": 6,
            "serviceability": "SERVICEABLE",
            "slaString": "45-50 mins",
            "lastMileTravelString": "6.0 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "4.0",
              "ratingCount": "3.1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/sagar-gaire-new-palasia-rest64532",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "697214",
          "name": "Natural Ice Cream",
          "cloudinaryImageId": "d940666c8d2376a8d89661d09a1497f5",
          "locality": "Usha Nagar",
          "areaName": "Ranjeet Hanuman",
          "costForTwo": "₹150 for two",
          "cuisines": [
            "Ice Cream",
            "Desserts"
          ],
          "avgRating": 4.8,
          "veg": true,
          "parentId": "2093",
          "avgRatingString": "4.8",
          "totalRatingsString": "686",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 5.6,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "5.6 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-14 00:00:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Ice%20cream.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Ice-creams.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "10% OFF",
            "subHeader": "UPTO ₹40"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "--"
            }
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/natural-ice-cream-usha-nagar-ranjeet-hanuman-rest697214",
          "type": "WEBLINK"
        }
      },
      {
        "info": {
          "id": "475536",
          "name": "La Pino'z Pizza",
          "cloudinaryImageId": "5fe4444a065b60c4fe39ef975222c12b",
          "locality": "Vijay Nagar",
          "areaName": "Vijay Nagar",
          "costForTwo": "₹400 for two",
          "cuisines": [
            "Pizzas",
            "Pastas",
            "Italian",
            "Desserts",
            "Beverages"
          ],
          "avgRating": 4.4,
          "parentId": "4961",
          "avgRatingString": "4.4",
          "totalRatingsString": "5.8K+",
          "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 6.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "6.2 km",
            "iconType": "ICON_TYPE_EMPTY"
          },
          "availability": {
            "nextCloseTime": "2024-09-13 23:59:00",
            "opened": true
          },
          "badges": {
            "imageBadges": [
              {
                "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png",
                "description": "Delivery!"
              },
              {
                "imageId": "Rxawards/_CATEGORY-Pizza.png",
                "description": "Delivery!"
              },
              {
                "imageId": "v1695133679/badges/Pure_Veg111.png",
                "description": "pureveg"
              }
            ]
          },
          "isOpen": true,
          "type": "F",
          "badgesV2": {
            "entityBadges": {
              "imageBased": {
                "badgeObject": [
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Green%20Dot%20Awards/Best%20In%20Veg%20Pizza.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "Delivery!",
                      "imageId": "Rxawards/_CATEGORY-Pizza.png"
                    }
                  },
                  {
                    "attributes": {
                      "description": "pureveg",
                      "imageId": "v1695133679/badges/Pure_Veg111.png"
                    }
                  }
                ]
              },
              "textBased": {

              },
              "textExtendedBadges": {

              }
            }
          },
          "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹90"
          },
          "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
              "mediaType": "ADS_MEDIA_ENUM_IMAGE",
              "lottie": {

              },
              "video": {

              }
            }
          },
          "reviewsSummary": {

          },
          "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
          "restaurantOfferPresentationInfo": {

          },
          "externalRatings": {
            "aggregatedRating": {
              "rating": "3.9",
              "ratingCount": "532"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
          },
          "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
        },
        "analytics": {

        },
        "cta": {
          "link": "https://www.swiggy.com/city/indore/la-pinoz-pizza-vijay-nagar-rest475536",
          "type": "WEBLINK"
        }
      }
]

const Body = () =>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCarts resData = {resObj[0]} />
                <RestaurantCarts resData = {resObj[1]} />
                <RestaurantCarts resData = {resObj[2]} />
                <RestaurantCarts resData = {resObj[3]} />
                <RestaurantCarts resData = {resObj[4]} />
                <RestaurantCarts resData = {resObj[5]} />
                <RestaurantCarts resData = {resObj[6]} />
                <RestaurantCarts resData = {resObj[7]} />
                <RestaurantCarts resData = {resObj[8]} />
                <RestaurantCarts resData = {resObj[9]} />
                <RestaurantCarts resData = {resObj[10]} />
            </div>
        </div>
    )
}

const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <div className="logo">
                    <img className="logo-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnqv3WhcmAkrbmhlr3ARNwybuGX0SLI9thuQ&s"></img>
                </div>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = () =>{
    return (
    <div className="app">
        <Header/>
        <Body/>
    </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout/>);