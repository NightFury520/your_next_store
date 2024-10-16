const {PrismaClient} = require('@prisma/client')
const prisma = new PrismaClient()

async function main() {
  try{
    const ApparelCategory = await prisma.category.create({
      data: {
        name:'Apparel',
        slug:'apparel',
        imgUrl:'/a (12).jpg'
      }
    })
    const apparel = [
      {
        name:'ShadowStride Shoes',
        slug:'Shadow-Stride-Shoes',
        description:'These classic black shoes are a wardrobe essential. Designed for both comfort and versatility,they pair well with any attire. The cushioned sole ensure all-day comfort',
        imageUrl:[
          "/a (1).jpg",
          "/a (2).jpg",
          "/a (3).jpg",
          "/a (4).jpg"
        ],
        basePrice: 20,
        categoryId: ApparelCategory.id,
        discountPercentage:5
      },
      {
        name:'Horizon Gaze Sunglasses',
        slug:'Horizon-Gaze-Sunglasses',
        description:'Protect your eyes in style with these chic sunglasses. Featuring polarized lenses they offer superior UV protection, The lightweight frame provides comfort and a timeless look',
        imageUrl:[
          "/a (2).jpg",
          "/a (3).jpg",
          "/a (4).jpg",
          "/a (5).jpg"
        ],
        basePrice: 20,
        categoryId: ApparelCategory.id,
        discountPercentage:10
      },
      {
        name:'ZebraBlend T-Shirt',
        slug:'ZebraBlend-T-Shirt',
        description:'These classic black shoes are a wardrobe essential. Designed for both comfort and versatility,they pair well with any attire. The cushioned sole ensure all-day comfort',
        imageUrl:[
          "/a (3).jpg",
          "/a (4).jpg",
          "/a (5).jpg",
          "/a (6).jpg"
        ],
        basePrice: 55,
        categoryId: ApparelCategory.id,
        discountPercentage:5
      },
      {
        name:'Horizon Gaze Sunglasses',
        slug:'Horizon-Gaze-Sunglasses',
        description:'Protect your eyes in style with these chic sunglasses. Featuring polarized lenses they offer superior UV protection, The lightweight frame provides comfort and a timeless look',
        imageUrl:[
          "/a (4).jpg",
          "/a (5).jpg",
          "/a (6).jpg",
          "/a (7).jpg"
        ],
        basePrice: 20,
        categoryId: ApparelCategory.id,
        discountPercentage:0
      },
    ]
    await prisma.product.createMany({
      data:apparel
    })

    const AccessoriesCategory = await prisma.category.create({
      data: {
        name:'Accessories',
        slug:'accessories',
        imgUrl:'/a (13).jpg',
      }
    })
    const accessories = [
      {
        name:'AquaStride Bottle',
        slug:'aqua-stride-bottle',
        description:'Stay hydrated on the go with our lea-proof, stainless steel water bottle. Its double-wall insulation keeps beverages old for up to 24 hours. The ergonomic design fits comfortably in your hand',
        basePrice:265,
        imageUrl: [
          "/a (5).jpg",
          "/a (6).jpg",
          "/a (7).jpg",
          "/a (8).jpg",
        ],
        categoryId: AccessoriesCategory.id,
        discountPercentage:5
      },
      {
        name:'Another Handbag',
        slug:'anther-handbag',
        description:'Stay hydrated on the go with our lea-proof, stainless steel water bottle. Its double-wall insulation keeps beverages old for up to 24 hours. The ergonomic design fits comfortably in your hand',
        basePrice:265,
        imageUrl: [
          "/a (6).jpg",
          "/a (7).jpg",
          "/a (8).jpg",
          "/a (9).jpg",
        ],
        categoryId: AccessoriesCategory.id,
        discountPercentage:0
      },
      {
        name:'All Weather Dry Bag',
        slug:'all-weather-dry-bag',
        description:'Stay hydrated on the go with our lea-proof, stainless steel water bottle. Its double-wall insulation keeps beverages old for up to 24 hours. The ergonomic design fits comfortably in your hand',
        basePrice:265,
        imageUrl: [
          "/a (7).jpg",
          "/a (8).jpg",
          "/a (9).jpg",
          "/a (10).jpg",
        ],
        categoryId: AccessoriesCategory.id,
        discountPercentage:10
      },
      {
        name:'Chestnut Carryall Bag',
        slug:'chestnut-carryall-bag',
        description:'Stay hydrated on the go with our lea-proof, stainless steel water bottle. Its double-wall insulation keeps beverages old for up to 24 hours. The ergonomic design fits comfortably in your hand',
        basePrice:265,
        imageUrl: [
          "/a (8).jpg",
          "/a (9).jpg",
          "/a (10).jpg",
          "/a (11).jpg",
        ],
        categoryId: AccessoriesCategory.id,
        discountPercentage:0
      },
    ]
    await prisma.product.createMany({
      data:accessories
    })
    
  } catch (error) {
    console.error("Error seeding database:", error)
  } finally {
    await prisma.$disconnect()
  }
}

main()
.then(async () => {
  await prisma.$disconnect()
})
.catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit(1)
})