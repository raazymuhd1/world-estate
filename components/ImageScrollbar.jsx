import {useContext} from 'react'
import Image from "next/image"
import {Box, Flex, Icon} from "@chakra-ui/react"
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu"
import {FaArrowAltCircleLeft, FaArrowAltCircleRight} from "react-icons/fa"

const LeftArrow = () => {
    const {scrollPrev} = useContext(VisibilityContext)

    return (
        <Flex justifyContent='center' alignItems="center" marginRight={1}>
            <Icon as={FaArrowAltCircleLeft} fontSize='2xl' cursor='pointer' onClick={() => scrollPrev()} />
        </Flex>
    )
}

const RightArrow = () => {
    const {scrollNext} = useContext(VisibilityContext)

    return (
        <Flex justifyContent='center' alignItems="center" marginRight={1}>
            <Icon as={FaArrowAltCircleRight} fontSize='2xl' cursor='pointer' onClick={() => scrollNext()} />
        </Flex>
    )
}

const ImageScrollbar = ({data}) => {
  return (
    <ScrollMenu 
    LeftArrow={LeftArrow} 
    RightArrow={RightArrow} 
    style={{overflow: 'hidden'}}>
        {data.map(item => (
            <Box 
            key={item.id} 
            width="910px" 
            itemId={item.id} 
            overflow='hidden' p='1'>
                <Image  
                placeholder='blur' blurDataURL={item.url} 
                src={item.url} width={1000} 
                height={500} sizes='(maxWidth: 500px) 100px, (maxWidth:1024px) 400px' 
                alt='property' />
         ()   </Box>
        ))}
    </ScrollMenu>
  )
}

export default ImageScrollbar