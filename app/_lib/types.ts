type RoomProp = {
    id: string,
    name: string,
    slug: string
    size: string
    bedType: string
    maxGuests: string
    roomCount: string
    pricePerNight: string
    currency: string
    availability: string
    rating: string
    features: string[],
    images: string[]
}

type GalleryProp = {
    image: string,
    category: string
}

type BlogProp = {
    "id": string,
      "slug": "discover-the-beauty-of-enugu",
      "title": string,
      "category": string,
      "publishedAt": string,
      "image": string,
      "content": string,
      "tags": string[]
}