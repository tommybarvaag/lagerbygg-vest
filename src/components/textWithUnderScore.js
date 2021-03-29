import { Text } from "@chakra-ui/react";

export default function TextWithUnderscore({ children }) {
  return (
    <Text
      as="span"
      position="relative"
      _after={{
        content: "''",
        width: "full",
        height: "30%",
        position: "absolute",
        bottom: 1,
        left: 0,
        bg: "red.400",
        zIndex: -1
      }}
    >
      {children}
    </Text>
  );
}
