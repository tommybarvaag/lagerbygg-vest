import { HStack } from "@chakra-ui/layout";
import { Stat, StatHelpText, StatLabel, StatNumber } from "@chakra-ui/stat";
import * as React from "react";

export default function AreaStat({ price, commonExpenses, area, ...other }) {
  return (
    <HStack mb={6} justifyContent="space-around" alignItems="flex-start" width="full" {...other}>
      <Stat>
        <StatLabel>Pris</StatLabel>
        <StatNumber>{price}</StatNumber>
        <StatHelpText>+ omkostninger</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Fellesutgifter</StatLabel>
        <StatNumber>{commonExpenses}</StatNumber>
        <StatHelpText>/år</StatHelpText>
      </Stat>
      <Stat>
        <StatLabel>Areal</StatLabel>
        <StatNumber>{area}</StatNumber>
        <StatHelpText>BTA</StatHelpText>
      </Stat>
    </HStack>
  );
}
