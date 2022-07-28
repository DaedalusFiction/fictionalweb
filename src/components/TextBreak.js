import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { primary } from "../themes/primary";

const TextBreak = () => {
    return (
        <Typography
            variant="body2"
            sx={{
                textAlign: "justify",
                color: primary.palette.custom.decorative,
                fontSize: "1.25rem",
                height: "7rem",
                overflow: "hidden",
                margin: "1em 0",
            }}
        >
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
            hic odit at necessitatibus facere reiciendis consectetur, optio
            labore perferendis ad deleniti ab quas. Possimus delectus dolor
            aperiam maxime debitis id nobis rerum, necessitatibus sed numquam
            molestiae qui a labore amet nulla officiis? Alias fuga error dolores
            ea quisquam dolore atque totam ab optio animi, aperiam impedit nam
            velit quibusdam vitae quis assumenda doloremque ipsam incidunt, esse
            mollitia! Perspiciatis alias dignissimos veritatis tenetur magnam a
            totam cum est repellat sint molestiae modi atque tempore nobis
            officia voluptatibus rem sed asperiores voluptatum ex labore facere,
            deleniti expedita dolorum! Perspiciatis fugit delectus harum earum
            nisi possimus vitae, dignissimos ducimus vel blanditiis illum? Eos
            explicabo placeat deserunt vitae illum dolor sapiente, sit rerum
        </Typography>
    );
};

export default TextBreak;
