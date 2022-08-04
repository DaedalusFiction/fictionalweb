import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const Hero = () => {
    return (
        <Box
            sx={{
                height: "100vh",
                overflow: "hidden",
            }}
        >
            <Box className="hero" id="spacer"></Box>
            <Box className="hero" id="inset" sx={{ padding: "0 1rem 0 1rem" }}>
                <Typography variant="h1">FICTIONAL</Typography>
                <Typography
                    variant="h1"
                    sx={{
                        lineHeight: ".85em",
                        color: "red",
                        textAlign: "end",
                    }}
                >
                    WEB.
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
                My soul is more than matched; she's overmanned; and by a madman!
                Insufferable sting, that sanity should not ground arms on such a
                field! But he drilled deep down, and blasted all my reason out
                of me! I think I see his impious end; but feel that I must help
                him to it. Will I, nill I, the ineffable thing has tied me to
                him; tows me with a cable I have no knife to cut. Horrible old
                man! Who's over him, he cries;--aye, he would be a democrat to
                all above; look, how he lords it over all below! Oh! I plainly
                see my miserable office,--to obey, rebelling; and worse yet, to
                hate with touch of pity! For in his eyes I read some lurid woe
                would shrivel me up, had I it. Yet is there hope. Time and tide
                flow wide. The hated whale has the round watery world to swim
                in, as the small gold-fosh has its glassy globe. His
                heaven-insulting purpose, God may wedge aside. I would up heart,
                were it not like lead. But my whole clock's run down; my heart
                the all-controlling weight, I have no key to lift again. [
                <em>A burst of revelry from the forecastle</em>] Oh, God! to
                sail with such a heathen crew that have small touch of human
                mothers in them! Whelped somewhere by the sharkish sea. The
                white whale is their demigorgon. Hark! the infernal orgies! that
                revelry is forward! mark the unfaltering silence aft! Methinks
                it pictures life. Foremost through the sparkling sea shoots on
                the gay, embattled, bandering bow, but only to drag dark Ahab
                after it, where he broods within his sternward cabin, builded
                over the dead waters of the wake, and further on, hunted by its
                wolfish gurglings. The long howl thrills me through! Peace! ye
                revellers, and set the watch! Oh, life! 'tis in an hour like
                this, with soul beat down and held to knowledge,--as wild,
                untutored things are forced to feed--Oh, life! 'tis now that I
                do feel the latent horror in thee! but 'tis not me! that
                horror's out of me! and with the soft feeling of the human in
                me, yet will I try to fight ye, ye grim, phantom futures! Stand
                by me, hold me, bind me, O ye blessed influences!
            </Typography>
        </Box>
    );
};

export default Hero;
