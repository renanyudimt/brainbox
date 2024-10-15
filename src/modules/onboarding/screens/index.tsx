import {
  Box,
  Button,
  Flex,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import RobotImage from "@src/assets/robot-image.jpeg";
import useEmblaCarousel from "embla-carousel-react";
import ArrowLeft from "@src/assets/icons/light/arrow-left.svg";
import ArrowRightLight from "@src/assets/icons/light/arrow-right.svg";
import ArrowRightDark from "@src/assets/icons/dark/arrow-right.svg";
import DividerVerticalSvg from "@src/assets/icons/light/divider-vertical.svg";
import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const OnboardingPage = () => {
  const carouselImages = [RobotImage, RobotImage, RobotImage];
  const arrowRight = useColorModeValue(ArrowRightLight, ArrowRightDark);

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    dragFree: false,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaApi) return;
      emblaApi.scrollTo(index);
      setSelectedIndex(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();

    emblaApi.on("select", onSelect).on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <Flex
      flexDir="column"
      gap={6}
      flex={1}
      maxW={{
        sm: "100%",
        md: "768px",
      }}
      mx="auto"
    >
      <Flex justifyContent="flex-end" flexDir="row" px={"46px"} pt={"42px"}>
        <Link to="/chat">
          <Button variant="unstyled" color="gray.75" fontSize={18}>
            Skip
          </Button>
        </Link>
      </Flex>
      <Flex justify="center" overflow="hidden`">
        <Box className="embla">
          <Box className="embla__viewport" ref={emblaRef}>
            <Flex className="embla__container" justify="center" align="center">
              {carouselImages.map((img, index) => (
                <Flex
                  key={index}
                  className="embla__slide"
                  align="center"
                  justify="center"
                >
                  <Flex w="100%" align="center" justify="center" p={12}>
                    <Image
                      src={img}
                      w="336px"
                      h="440px"
                      objectFit="cover"
                      borderRadius={33}
                      _light={{
                        boxShadow:
                          "7px 7px 15px rgba(0, 0, 0, 0.25), -7px 7px 15px rgba(0, 0, 0, 0.25), 0px 10px 20px rgba(0, 0, 0, 0.25)",
                      }}
                      _dark={{
                        boxShadow:
                          "7px 7px 15px rgba(255, 255, 255, 0.10), -7px 7px 15px  rgba(255, 255, 255, 0.10), 0px 10px 20px  rgba(255, 255, 255, 0.10)",
                      }}
                    />
                  </Flex>
                </Flex>
              ))}
            </Flex>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap={3}
          >
            {carouselImages.map((_, index) => (
              <>
                {index === selectedIndex ? (
                  <Flex
                    key={index}
                    w="18px"
                    h="18px"
                    borderRadius="50%"
                    justify="center"
                    align="center"
                    _dark={{
                      borderColor: "white",
                    }}
                    _light={{
                      borderColor: "black",
                    }}
                    borderWidth="1px"
                    borderStyle="solid"
                    cursor="pointer"
                    onClick={() => onThumbClick(index)}
                  >
                    <Box
                      _dark={{
                        bg: "white",
                      }}
                      _light={{
                        bg: "black",
                      }}
                      rounded="50%"
                      w="12px"
                      h="12px"
                    />
                  </Flex>
                ) : (
                  <Box
                    borderRadius="50%"
                    w="9px"
                    h="9px"
                    key={index}
                    bg="rgba(255,255,255,0.5)"
                    cursor="pointer"
                    onClick={() => onThumbClick(index)}
                  />
                )}
              </>
            ))}
          </Box>
        </Box>
      </Flex>
      <Flex justify="center" flexDir="column" gap={2}>
        <Text
          fontWeight="bold"
          textAlign="center"
          fontSize="34px"
          lineHeight="50px"
        >
          Unlock the Power
          <br />
          Of Future AI
        </Text>
        <Text color="#8E9295" fontSize="16px" textAlign="center">
          Chat with the smartest AI Future
          <br />
          Experience power of AI with us
        </Text>
      </Flex>
      <Flex justify="center" mt={6}>
        <Flex
          p={2}
          gap={4}
          borderRadius={16}
          w="154px"
          h="64px"
          _light={{
            boxShadow: "0px 32px 52px 16px rgba(15, 15, 15, 0.12)",
          }}
          _dark={{
            background: "gray.900",
          }}
          alignItems="center"
          justifyContent="space-evenly"
        >
          <Button variant="unstyled">
            <Image margin="auto" src={ArrowLeft} w="24px" h="24px" />
          </Button>
          <Image src={DividerVerticalSvg} w="2px" h="24px" />
          <Button variant="unstyled">
            <Image margin="auto" src={arrowRight} w="24px" h="24px" />
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default OnboardingPage;
