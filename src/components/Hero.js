import { Button, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const Hero = () => {
    return (
        <Box
            sx={{
                height: "98.5vh",
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
                    WEB
                </Typography>
            </Box>
            <Typography variant="body2" sx={{ textAlign: "justify" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus exercitationem amet culpa nihil maiores qui
                aspernatur harum, aliquid magnam. Ab mollitia exercitationem
                dolorum corrupti adipisci est itaque, deleniti ex. Ut amet nisi
                maxime veritatis temporibus minus odio, sunt possimus reiciendis
                tempora cum expedita quis tenetur, enim repellat, inventore
                corrupti architecto eveniet exercitationem hic assumenda! Eos
                consectetur corrupti deserunt voluptates voluptate et maxime
                expedita quia eaque eius ut, esse ex? Quibusdam, pariatur!
                Mollitia nisi ratione repellendus eius saepe? Libero, provident,
                saepe sequi dolore qui perspiciatis accusantium dolores
                consequuntur quo ipsam, et est. Sit delectus maiores cupiditate
                velit exercitationem, non amet dolorem nam soluta quidem illum
                reiciendis eveniet nesciunt rem corporis eius dicta ullam,
                quisquam provident sequi. Quos, quas tenetur. Nobis atque eum
                deleniti ipsam cupiditate nemo assumenda velit sed aliquam,
                laborum provident fugit, iure maiores cumque magni in sint eaque
                ullam sequi! Suscipit optio aperiam quidem accusamus hic
                voluptates accusantium harum nisi rem ratione. Illo illum
                architecto non repellendus? Doloribus corporis, ratione nam,
                accusamus incidunt neque iste rem assumenda soluta illum
                laboriosam deleniti possimus excepturi quam explicabo,
                repellendus debitis molestiae. Illo, architecto. Qui autem
                libero aliquam saepe ab dolor obcaecati esse voluptate inventore
                accusamus ut quam perferendis, temporibus nulla asperiores
                voluptates laborum cum, iste fuga et. Nesciunt asperiores,
                impedit esse at consequatur doloremque ducimus eos
                exercitationem incidunt repudiandae, quae cupiditate quis labore
                tempora amet eveniet ratione natus ex accusantium atque! Beatae
                placeat illo consequuntur iste reprehenderit laborum autem earum
                provident, repudiandae inventore sunt ex doloremque hic nemo
                ipsam voluptatum est tempore, molestiae nisi velit. Optio
                dolorum enim accusantium vero quos amet tempora voluptatum
                consequatur ipsam? Doloremque, voluptatum vitae veritatis
                officiis error magni voluptatem maxime nostrum obcaecati? Ipsam,
                quia aspernatur. Minus a corporis maxime laborum ut, adipisci
                nisi architecto harum eos reiciendis consequatur, cupiditate
                impedit voluptas quas facere debitis nobis, mollitia provident.
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus exercitationem amet culpa nihil maiores qui
                aspernatur harum, aliquid magnam. Ab mollitia exercitationem
                dolorum corrupti adipisci est itaque, deleniti ex. Ut amet nisi
                maxime veritatis temporibus minus odio, sunt possimus reiciendis
                tempora cum expedita quis tenetur, enim repellat, inventore
                corrupti architecto eveniet exercitationem hic assumenda! Eos
                consectetur corrupti deserunt voluptates voluptate et maxime
                expedita quia eaque eius ut, esse ex? Quibusdam, pariatur!
                Mollitia nisi ratione repellendus eius saepe? Libero, provident,
                saepe sequi dolore qui perspiciatis accusantium dolores
                consequuntur quo ipsam, et est. Sit delectus maiores cupiditate
                velit exercitationem, non amet dolorem nam soluta quidem illum
                reiciendis eveniet nesciunt rem corporis eius dicta ullam,
                quisquam provident sequi. Quos, quas tenetur. Nobis atque eum
                deleniti ipsam cupiditate nemo assumenda velit sed aliquam,
                laborum provident fugit, iure maiores cumque magni in sint eaque
                ullam sequi! Suscipit optio aperiam quidem accusamus hic
                voluptates accusantium harum nisi rem ratione. Illo illum
                architecto non repellendus? Doloribus corporis, ratione nam,
                accusamus incidunt neque iste rem assumenda soluta illum
                laboriosam deleniti possimus excepturi quam explicabo,
                repellendus debitis molestiae. Illo, architecto. Qui autem
                libero aliquam saepe ab dolor obcaecati esse voluptate inventore
                accusamus ut quam perferendis, temporibus nulla asperiores
                voluptates laborum cum, iste fuga et. Nesciunt asperiores,
                impedit esse at consequatur doloremque ducimus eos
                exercitationem incidunt repudiandae, quae cupiditate quis labore
                tempora amet eveniet ratione natus ex accusantium atque! Beatae
                placeat illo consequuntur iste reprehenderit laborum autem earum
                provident, repudiandae inventore sunt ex doloremque hic nemo
                ipsam voluptatum est tempore, molestiae nisi velit. Optio
                dolorum enim accusantium vero quos amet tempora voluptatum
                consequatur ipsam? Doloremque, voluptatum vitae veritatis
                officiis error magni voluptatem maxime nostrum obcaecati? Ipsam,
                quia aspernatur. Minus a corporis maxime laborum ut, adipisci
                nisi architecto harum eos reiciendis consequatur, cupiditate
                impedit voluptas quas facere debitis nobis, mollitia provident.
            </Typography>
        </Box>
    );
};

export default Hero;
