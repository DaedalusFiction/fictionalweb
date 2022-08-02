import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { navigateToTop } from "../utils/utils";

const routes = [
    { location: "Home", to: "/" },
    { location: "About", to: "/about" },
    { location: "Projects", to: "/projects" },
    { location: "Contact", to: "/contact" },
];

export default function NavBar() {
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        navigate(e.target.id);
    };

    return (
        <Box sx={{ width: "100%" }}>
            <Tabs value={value} onChange={handleChange} centered>
                {routes.map((route) => {
                    return (
                        <Tab
                            key={route.location}
                            id={route.to}
                            label={route.location}
                            onClick={() => {
                                navigateToTop(route.location === "Home");
                            }}
                        />
                    );
                })}
            </Tabs>
        </Box>
    );
}
