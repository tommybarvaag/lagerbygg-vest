import { ChevronDownIcon, ChevronRightIcon, CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Collapse,
  Flex,
  Icon,
  IconButton,
  Link,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Logo from "./logo";

export default function NavBar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box as="nav">
      <Flex bg="gray.50" color="black" minH="60px" py={{ base: 2 }} px={{ base: 4 }} align="center">
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <Logo />
          <Flex
            display={{ base: "none", md: "flex" }}
            flexGrow="1"
            justifyContent="flex-end"
            ml={10}
          >
            <DesktopNav />
          </Flex>
        </Flex>
        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? (
                <CloseIcon color="black" w={3} h={3} />
              ) : (
                <HamburgerIcon color="black" w={5} h={5} />
              )
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const router = useRouter();

  return (
    <Stack direction="row" spacing={4} alignItems="center">
      {NAV_ITEMS.map(navItem => (
        <Box key={navItem.label}>
          <Popover trigger="hover" placement="bottom-start">
            <PopoverTrigger>
              <NextLink href={navItem.href ?? "#"} passHref>
                <Link
                  p={2}
                  fontSize="xl"
                  fontWeight={500}
                  color={router.pathname === navItem.href ? "red.500" : "black"}
                  _hover={{
                    textDecoration: "none",
                    color: "red.500"
                  }}
                >
                  {navItem.label}
                </Link>
              </NextLink>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent border={0} boxShadow="xl" bg="gray.50" p={4} rounded="xl" minW="sm">
                <Stack>
                  {navItem.children.map(child => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <NextLink href={href} passHref>
      <Link role="group" display="block" p={2} rounded="md" _hover={{ bg: "orange.500" }}>
        <Stack direction="row" align="center">
          <Box>
            <Text transition="all .3s ease" _groupHover={{ color: "orange.500" }} fontWeight={500}>
              {label}
            </Text>
            <Text fontSize="sm">{subLabel}</Text>
          </Box>
          <Flex
            transition="all .3s ease"
            transform="translateX(-10px)"
            opacity={0}
            _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
            justify="flex-end"
            align="center"
            flex={1}
          >
            <Icon color="orange.500" w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    </NextLink>
  );
};

const MobileNav = () => {
  return (
    <Stack bg="gray.50" p={4} display={{ md: "none" }}>
      {NAV_ITEMS.map(navItem => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <NextLink href={href ?? "#"} passHref>
        <Flex
          py={2}
          as={Link}
          justify="space-between"
          align="center"
          _hover={{
            textDecoration: "none"
          }}
        >
          <Text fontWeight={600} color="black">
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition="all .25s ease-in-out"
              transform={isOpen ? "rotate(180deg)" : ""}
              w={6}
              h={6}
            />
          )}
        </Flex>
      </NextLink>
      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack mt={2} pl={4} borderLeft={1} borderStyle="solid" borderColor="black" align="start">
          {children &&
            children.map(child => (
              <NextLink key={child.label} href={child.href} passHref>
                <Link py={2}>{child.label}</Link>
              </NextLink>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

const NAV_ITEMS = [
  {
    label: "Kontakt oss",
    href: "/kontakt-oss"
  },
  {
    label: "Områder",
    href: "/omraade"
  }
];
