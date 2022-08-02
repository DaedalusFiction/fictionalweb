import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { navigateToTop } from "../utils/utils";

const routes = [
    { location: "Home", to: "/", value: 0 },
    { location: "About", to: "/about", value: 1 },
    { location: "Projects", to: "/projects", value: 2 },
    { location: "Contact", to: "/contact", value: 3 },
];

export default function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [value, setValue] = useState(0);

    const handleChange = (e, newValue) => {
        setValue(newValue);
        navigate(e.target.id);
    };

    useEffect(() => {
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
                        />
                    );
                })}
            </Tabs>
        </Box>
    );
}
