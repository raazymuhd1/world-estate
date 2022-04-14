import Link from "next/link"
import { Menu, MenuButton, MenuItem, MenuList, Flex, Spacer, IconButton, Box } from "@chakra-ui/react"
import { FcMenu, FcHome, FcAbout } from "react-icons/fc"
import { BsSearch } from "react-icons/bs"
import { FiKey } from "react-icons/fi"

const Navbar = () => {
  return (
    <Flex p="2" borderBottom="2px" borderColor="gray.100">
        <Box fontSize="3xl" fontWeight="bold" color="cyan.400">
            <Link href="/"> WorldEstate. </Link>
        </Box>
        <Spacer />
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}> Home </MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}> Search </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FcAbout />}> Buy Property </MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-rent" passHref>
                        <MenuItem icon={<FiKey />}> Rent Property </MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Box>
    </Flex>
  )
}

export default Navbar