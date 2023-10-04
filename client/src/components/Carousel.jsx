import { useEffect, useCallback, useState } from "react";
import { Box, MobileStepper } from "@mui/material";
import useEmblaCarousel from "embla-carousel-react";

export const Carousel = props => {
    const {
        slides = [],
        ...otherProps
    } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
    const [activeStep, setActiveStep] = useState(0);

    const handleSelect = useCallback(() => {
        if (!emblaApi) {
            return;
        }

        setActiveStep(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (emblaApi) {
            handleSelect();
            emblaApi.on("select", handleSelect);
            emblaApi.on("reInit", handleSelect);
        }
    }, [emblaApi, handleSelect]);

    return (
        <Box {...otherProps}>
            <Box ref={emblaRef} height={1} overflow="hidden">
                <Box display="flex" height={1}>
                    {slides.map((slide, index) =>
                        <Box key={index} flex="0 0 100%" minWidth={0} height={1}>
                            <Box
                                component="img"
                                src={slide}
                                width={1}
                                height={1}
                                sx={{ objectFit: "contain", cursor: "grab" }}
                            />
                        </Box>
                    )}
                </Box>
            </Box>
            <MobileStepper
                position="static"
                steps={slides.length}
                activeStep={activeStep}
                sx={{ justifyContent: "center" }}
            />
        </Box>
    )
};

Carousel.displayName = "Carousel";
