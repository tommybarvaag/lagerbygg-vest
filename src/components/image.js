import { chakra, useStyleConfig } from "@chakra-ui/react";
import NextImage from "next/image";

const deviceSizes = [320, 480, 640, 750, 828, 960, 1080, 1200, 1440, 1920, 2048, 2560, 3840];
const deviceSizesMax = Math.max(...deviceSizes);

const ImageWithChakra = chakra(
  ({
    className,
    dimensions = [0, 0],
    layout = "fill",
    loading,
    nextImageObjectFit = "cover",
    objectPosition,
    priority,
    quality,
    sizes = "(max-width: 320px) 320px, (max-width: 480px) 480px, (max-width: 640px) 640px, (max-width: 750px) 750px, (max-width: 828px) 828px, (max-width: 960px) 960px, (max-width: 1080px) 1080px, (max-width: 1200px) 1200px, (max-width: 1440px) 1440px, (max-width: 1920px) 1920px, (max-width: 2048px) 2048px, (max-width: 2560px) 2560px, 3840px",
    src,
    meh,
    unoptimized,
    ...nextjsInternals
  }) => {
    /**
     * ? As explained earlier, NextJs typing is preventing auto-suggest for layout, width and height
     * ? Here we actually convert our component typing to NextJs typing
     */
    const [width, height] = dimensions;

    const layoutAndSize =
      height > 0 || width > 0
        ? {
            height,
            layout: layout === "fill" ? "intrinsic" : layout,
            width
          }
        : {
            layout: "fill"
          };

    return (
      <NextImage
        className={className}
        loading={loading}
        objectFit={nextImageObjectFit}
        objectPosition={objectPosition}
        priority={priority}
        quality={quality}
        sizes={sizes}
        src={src}
        unoptimized={unoptimized}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...layoutAndSize}
        // eslint-disable-next-line react/jsx-props-no-spreading
        {...nextjsInternals}
      />
    );
  }
);

export const Image = ({ variant, ...props }) => {
  /**
   * ? This components serves as an interface to pass Chakra's styles
   * ? You can use the theme and/or styling properties (eg. backgroundColor='red.200')
   */

  const styles = useStyleConfig("Image", { variant });
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <ImageWithChakra sx={styles} {...props} />;
};
