import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Property } from "../components"

import { baseUrl, fetchApi } from "../utils/fetchApi"

const Banner = ({purpose, imageUrl, title1, title2, desc1, desc2, linkName, buttonText}) => (
   <Flex flexWrap="wrap" justifyContent="space-around" alignItems="center" m="10">
       <Image src={imageUrl} width={700} height={500} style={{ borderTopLeftRadius: '10px', borderBottomRightRadius: '10px' }} />
       <Box>
           <Text color="gray.500" fontSize="sm" fontWeight="medium"> { purpose } </Text>
           <Text fontSize="3xl" fontWeight="bold"> { title1 } <br /> { title2 } </Text>
           <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700"> { desc1 } <br /> { desc2 } </Text>
           <Button fontSize='xl'>
               <Link href={linkName}><a> { buttonText } </a></Link> 
           </Button>
       </Box>
   </Flex>
)

export default function Home({propertiesForSale, propertiesForRent}) 
{

  console.log(propertiesForSale, propertiesForRent)
  return (
    <Box>
        <Banner 
          purpose='RENT A HOME'
          title1='Rental Homes for'
          title2='Everyone'
          desc1=' Explore from Apartments, builder floors, villas'
          desc2='and more'
          buttonText='Explore Renting'
          linkName='search?purpose=for-rent'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4'
        />
          <Flex flexWrap="wrap"> 
              { propertiesForSale.map(property => <Property property={property} key={property.id} />) }
          </Flex>
         <Banner
          purpose='BUY A HOME'
          title1=' Find, Buy & Own Your'
          title2='Dream Home'
          desc1=' Explore from Apartments, land, builder floors,'
          desc2=' villas and more'
          buttonText='Explore Buying'
          linkName='/search?purpose=for-sale'
          imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008'
        />
        <Flex flexWrap="wrap">
            { propertiesForRent.map(property => <Property property={property} key={property.id} />) }
        </Flex>
    </Box>
  )
}

export async function getStaticProps() {
     const propertiesForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)
     const propertiesForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)

    //  const 

     return {
        props: {
          propertiesForSale: propertiesForSale?.hits,
          propertiesForRent: propertiesForRent?.hits
        }
     }
}