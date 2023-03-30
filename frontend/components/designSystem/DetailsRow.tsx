import {
  CopyIcon,
  ExternalLinkIcon,
  QuestionOutlineIcon,
} from "@chakra-ui/icons";

import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  Tooltip,
  useClipboard,
  useToast,
} from "@chakra-ui/react";

interface Props {
  title: string;
  value: string;
  link?: string | null;
  tooltip?: string;
  copyValue?: string;
  fontColor?: string;
}

function DetailsRow({
  title,
  value,
  link,
  tooltip,
  copyValue,
  fontColor,
}: Props) {
  const { onCopy } = useClipboard(copyValue ?? "");
  const toast = useToast();

  return (
    <Box py={3} w="100%">
      <Flex direction="row" justifyContent="space-between" maxW="100%">
        <Text
          fontWeight={600}
          fontSize="md"
          textAlign="left"
          flexShrink={0}
          noOfLines={1}
          color={fontColor}
        >
          {title}
        </Text>
        <HStack minWidth={0} pl={4}>
          <Text
            fontWeight={200}
            fontSize="md"
            textAlign="right"
            noOfLines={1}
            color={fontColor}
          >
            {value}
          </Text>

          {tooltip && (
            <Tooltip
              label={tooltip}
              aria-label="module tooltip"
              placement="right"
            >
              <QuestionOutlineIcon ml={2} mb={1} />
            </Tooltip>
          )}
          {link && (
            <Link href={link} isExternal>
              <ExternalLinkIcon mb={1} />
            </Link>
          )}
          {copyValue && (
            <CopyIcon
              cursor={"pointer"}
              onClick={() => {
                onCopy();
                toast({
                  title: "Address copied",
                  status: "success",
                  duration: 1000,
                  isClosable: true,
                });
              }}
            />
          )}
        </HStack>
      </Flex>
    </Box>
  );
}

export default DetailsRow;
