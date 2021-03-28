import { Box, Link, Text, VStack } from "@chakra-ui/layout";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "popmotion";
import * as React from "react";
import HeadingWithUnderscore from "./headingWithUnderscore";
import { Image } from "./image";

const PrevNextButton = styled(Box)`
  top: calc(50% - 20px);
  position: absolute;
  background: white;
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

const Wrapper = styled(Box)`
  width: 100%;
  position: relative;
`;

export default function NewSlider({
  title,
  text,
  images,
  variants = {
    enter: (direction) => {
      return {
        x: direction > 0 ? 1000 : -1000,
        opacity: 0,
        height: "auto",
      };
    },
    center: {
      x: 0,
      opacity: 1,
      height: "auto",
    },
    exit: (direction) => {
      return {
        x: direction < 0 ? 1000 : -1000,
        opacity: 0,
        height: "auto",
      };
    },
  },
  ...other
}) {
  const [[page, direction], setPage] = React.useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const index = wrap(0, images.length, page);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Wrapper mb={12} {...other}>
      <VStack p={8} maxWidth="2xl" alignItems="flex-start" margin="0 auto">
        <HeadingWithUnderscore heading="Illustrasjoner" />
        <Text>{text}</Text>
      </VStack>

      <AnimatePresence initial={false} exitBeforeEnter custom={direction}>
        <motion.div
          key={page}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 250, damping: 30 },
            y: { type: "spring", stiffness: 250, damping: 30 },
          }}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={(e, { offset, velocity }) => {
            const swipe = swipePower(offset.x, velocity.x);

            if (swipe < -swipeConfidenceThreshold) {
              paginate(1);
            } else if (swipe > swipeConfidenceThreshold) {
              paginate(-1);
            }
          }}
          style={{
            width: "100%",
          }}
        >
          <Link href={images[index]} isExternal>
            <Image src={images[index]} dimensions={[1280, 800]} nextImageObjectFit="contain" />
          </Link>
        </motion.div>
      </AnimatePresence>
      <PrevNextButton className="next" right="10px" onClick={() => paginate(1)}>
        {"‣"}
      </PrevNextButton>
      <PrevNextButton className="prev" left="10px" transform="scale(-1)" onClick={() => paginate(-1)}>
        {"‣"}
      </PrevNextButton>
    </Wrapper>
  );
}
