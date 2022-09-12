import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigateToTop } from "../utils/utils";
import { primary } from "../themes/primary";

const routes = [
    { location: "Templates", to: "/templates", value: 0 },
    { location: "Projects", to: "/projects", value: 1 },
    { location: "About", to: "/about", value: 2 },
    { location: "Contact", to: "/contact", value: 3 },
];

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(false);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        navigate(e.target.id);
    };

    useEffect(() => {
        if (location.pathname === "/" || window.innerWidth > 500) {
            setValue(false);
            return;
        }
        //makes sure value gets updated if user navigates to page using button in content sections or elsewhere
        const newValue = routes.filter(
            (route) => route.to === location.pathname
        )[0].value;
        setValue(newValue);
    }, [location.pathname]);

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
                            sx={{
                                "&:hover": {
                                    color: primary.palette.custom.accent,
                                },
                            }}
                        />
                    );
                })}
            </Tabs>
        </Box>
    );
}
