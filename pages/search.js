import { useState } from 'react'
import { useRouter } from "next/router"
import Image from 'next/image'
import { Flex, Text, Box, Icon } from "@chakra-ui/react"
import { BsFilter } from "react-icons/bs"
import SearchFilter from '../components/SearchFilter'

import { fetchApi, baseUrl } from "../utils/fetchApi"
import Property from '../components/Property.jsx'
import noResult from "../assets/images/NoResult.jpeg"

const Search = ({ properties }) => {
    const [searchFilters, setSearchFilters] = useState(false)
    const router = useRouter();

    console.log(properties.map(property => console.log(property)) )

  return (
    <Box>
        <Flex cursor="pointer" bg="gray.100"
            borderBottom="1px" borderColor='gray.200'
            p='2' fontWeight="black" fontSize="lg"
            justifyContent='center' alignItems="center"
            onClick={() => setSearchFilters(!searchFilters)}>
                <Text>Search Property By Filter</Text>
                <Icon paddingLeft="2" w="7" as={BsFilter} />
        </Flex>
        { searchFilters && <SearchFilter /> }
        <Text fontSize='2xl' p='4'>
            Properties { router.query.purpose }
        </Text>
        <Flex flexWrap="wrap">
            { properties?.map(property => <Property property={property} key={property.id} />) }
        </Flex>
        { properties?.length === 0 && (
            <Flex justifyContent='center' alignItems='center' flexDirection="column">
                <Image alt="no result" src={noResult} />
                <Text fontSize='2xl' marginTop={2}> No Result Found </Text>
            </Flex>
        ) }
    </Box>
  )
}

export async function getServerSideProps({query}) {
    const purpose = query.purpose || 'for-rent';
    const rentFrequency = query.rentFrequency || 'yearly';
    const minPrice = query.minPrice || '1';
    const maxPrice = query.maxPrice || '1000000';
    const roomsMin = query.roomsMin || '1';
    const bathsMin = query.bathsMin || '1';
    const sort = query.sort || 'price-desc';
    const areaMax = query.areaMax || '35000';
    const locationExternalIDs = query.locationExternalIDs || '5002';
    const categoryExternalID = query.categoryExternalID || '4';
    const hasVideo = query.hasVideo || true;

  const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}&hasVideo=${hasVideo}`);

  return {
      props: {
          properties: data?.hits
      }
  }
}

export default Search;